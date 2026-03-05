"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type SuiteStatus = "pass" | "retry";

interface RegressionSuite {
  suite: string;
  tests: number;
  duration: string;
  status: SuiteStatus;
}

type LogTone = "muted" | "pass" | "retry" | "error";

interface TerminalLogLine {
  id: string;
  message: string;
  tone: LogTone;
}

const regressionSuites: RegressionSuite[] = [
  {
    suite: "auth > session-timeout-regression",
    tests: 18,
    duration: "18.4s",
    status: "pass",
  },
  {
    suite: "checkout > cart-and-promotions",
    tests: 24,
    duration: "26.9s",
    status: "pass",
  },
  {
    suite: "api > order-lifecycle-contracts",
    tests: 20,
    duration: "15.1s",
    status: "pass",
  },
  {
    suite: "reporting > dashboard-data-parity",
    tests: 16,
    duration: "31.8s",
    status: "retry",
  },
  {
    suite: "device-lab > kiosk-fallback-flows",
    tests: 19,
    duration: "22.2s",
    status: "pass",
  },
  {
    suite: "localization > currency-and-locale",
    tests: 15,
    duration: "12.6s",
    status: "pass",
  },
  {
    suite: "permissions > role-based-access",
    tests: 21,
    duration: "21.0s",
    status: "pass",
  },
  {
    suite: "release > smoke-suite",
    tests: 15,
    duration: "9.7s",
    status: "pass",
  },
];

const adjacentKeys: Record<string, string[]> = {
  q: ["w", "a"], w: ["q", "e", "s"], e: ["w", "r", "d"],
  r: ["e", "t", "f"], t: ["r", "y", "g"], y: ["t", "u", "h"],
  u: ["y", "i", "j"], i: ["u", "o", "k"], o: ["i", "p", "l"],
  p: ["o", "[", ";"], a: ["q", "w", "s", "z"], s: ["a", "w", "d", "e", "x"],
  d: ["s", "e", "f", "r", "c"], f: ["d", "r", "g", "t", "v"],
  g: ["f", "t", "h", "y", "b"], h: ["g", "y", "j", "u", "n"],
  j: ["h", "u", "k", "i", "m"], k: ["j", "i", "l", "o"],
  l: ["k", "o", "p", ";"], z: ["a", "s", "x"],
  x: ["z", "s", "d", "c"], c: ["x", "d", "f", "v"],
  v: ["c", "f", "g", "b"], b: ["v", "g", "h", "n"],
  n: ["b", "h", "j", "m"], m: ["n", "j", "k"],
};

const totalTests = regressionSuites.reduce((count, suite) => count + suite.tests, 0);
const retriedCount = regressionSuites.filter((suite) => suite.status === "retry").length;

function toneClass(tone: LogTone): string {
  if (tone === "pass") {
    return "text-status-pass";
  }

  if (tone === "retry") {
    return "text-status-retry";
  }

  if (tone === "error") {
    return "text-red-400";
  }

  return "text-text-muted";
}

const fullCommand = "pnpm exec cypress run --record --group nightly-regression";

interface LogEntry {
  message: string;
  tone: LogTone;
  /** Delay in ms before this line appears during animation. */
  delayMs: number;
}

function buildLogEntries(): LogEntry[] {
  const entries: LogEntry[] = [
    { message: "[00:00] Booting services: web, api, db, queue...", tone: "muted", delayMs: 130 },
    {
      message: `[00:11] Discovered ${regressionSuites.length} specs / ${totalTests} tests across 4 CI shards`,
      tone: "muted",
      delayMs: 180,
    },
  ];

  for (const suite of regressionSuites) {
    if (suite.status === "retry") {
      entries.push({
        message: `[RETRY] ${suite.suite} assertion timed out on attempt 1/2`,
        tone: "retry",
        delayMs: 220,
      });
    }
    entries.push({
      message: `[PASS] ${suite.suite} (${suite.tests} tests, ${suite.duration})`,
      tone: "pass",
      delayMs: suite.status === "retry" ? 340 : 250,
    });
  }

  entries.push(
    { message: "[04:27] Uploading traces, videos, screenshots, junit.xml...", tone: "muted", delayMs: 220 },
    { message: `${totalTests} passing - 0 failing - ${retriedCount} retried`, tone: "pass", delayMs: 180 },
    { message: "Total runtime: 4m 29s", tone: "muted", delayMs: 110 },
  );

  return entries;
}

const logEntries = buildLogEntries();

function buildStaticLogLines(): TerminalLogLine[] {
  return logEntries.map((entry, index) => ({
    id: `s-${index}`,
    message: entry.message,
    tone: entry.tone,
  }));
}

export function RegressionTerminal() {
  const prefersReduced = useReducedMotion();
  // Default to reduced until media query resolves — safer for motion-sensitive users
  const shouldReduceMotion = prefersReduced ?? true;
  const [commandText, setCommandText] = useState("");
  const [logLines, setLogLines] = useState<TerminalLogLine[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) {
      setCursorVisible(true);
      return;
    }

    const intervalId = window.setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 460);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!outputRef.current) {
      return;
    }

    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [commandText, logLines]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setCommandText(fullCommand);
      setLogLines(buildStaticLogLines());
      setIsRunning(false);
      return;
    }

    setCommandText("");
    setLogLines([]);

    let cancelled = false;
    let cycleNumber = 0;

    const wait = async (ms: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, ms);
      });

    const typeChar = async (char: string, speedMs: number) => {
      if (cancelled) {
        return false;
      }

      setCommandText((current) => `${current}${char}`);
      await wait(speedMs);
      return true;
    };

    const backspace = async (count: number, speedMs: number) => {
      for (let index = 0; index < count; index += 1) {
        if (cancelled) {
          return false;
        }

        setCommandText((current) => current.slice(0, -1));
        await wait(speedMs);
      }

      return true;
    };

    const addLine = async (
      message: string,
      tone: LogTone,
      delayMs: number,
      cycleId: number,
      lineNumber: { current: number },
    ) => {
      await wait(delayMs);

      if (cancelled) {
        return false;
      }

      lineNumber.current += 1;
      setLogLines((current) => [
        ...current,
        {
          id: `${cycleId}-${lineNumber.current}`,
          message,
          tone,
        },
      ]);

      return true;
    };

    interface TypoResult {
      completed: boolean;
      missedError?: { errorMessage: string; typedCommand: string };
    }

    /**
     * Generates an error message for a miss-and-error typo based on
     * which word in the command was mistyped.
     */
    function buildErrorMessage(
      wordIndex: number,
      misspelled: string,
      correct: string,
    ): string {
      if (wordIndex === 0) {
        return `zsh: command not found: ${misspelled}`;
      }

      if (correct.startsWith("-")) {
        return `error: unknown option '${misspelled}'. Did you mean '${correct}'?`;
      }

      return `error: no such group '${misspelled}'`;
    }

    /**
     * Applies a typo to a character at the given index, returning the
     * characters to type and the new index to resume from.
     */
    function applyTypo(
      text: string,
      index: number,
    ): { chars: string[]; newIndex: number } {
      const char = text[index];
      const nextChar = text[index + 1];
      const roll = Math.random();

      // Transposition (40%)
      if (roll < 0.4 && nextChar !== undefined) {
        return { chars: [nextChar, char], newIndex: index + 2 };
      }

      // Adjacent key (30%)
      if (roll < 0.7) {
        const neighbors = adjacentKeys[char.toLowerCase()];
        if (neighbors && neighbors.length > 0) {
          const neighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
          return { chars: [neighbor], newIndex: index + 1 };
        }
      }

      // Double-hit (15%)
      if (roll < 0.85) {
        return { chars: [char, char], newIndex: index + 1 };
      }

      // Skip (15%) — type the next char instead
      if (nextChar !== undefined) {
        return { chars: [nextChar], newIndex: index + 2 };
      }

      // Fallback: double-hit if skip can't work (end of string)
      return { chars: [char, char], newIndex: index + 1 };
    }

    /**
     * Types text with optional random typos that are either caught and fixed
     * mid-stream, or missed entirely (triggering a shell error and retype).
     */
    const typeTextWithTypos = async (
      text: string,
      speedMs: number,
      typoChance: number = 0.08,
      maxTypos: number = 1,
    ): Promise<TypoResult> => {
      let typosRemaining = maxTypos;
      let index = 0;

      while (index < text.length) {
        if (cancelled) {
          return { completed: false };
        }

        const char = text[index];

        // Roll for typo if eligible: has budget, passes chance, and char is a letter
        const shouldTypo =
          typosRemaining > 0 &&
          /[a-zA-Z]/.test(char) &&
          Math.random() < typoChance;

        if (!shouldTypo) {
          if (!(await typeChar(char, speedMs))) {
            return { completed: false };
          }

          index += 1;
          continue;
        }

        // --- Typo triggered ---
        typosRemaining -= 1;

        const typo = applyTypo(text, index);
        const catchAndFix = Math.random() < 0.55;

        if (catchAndFix) {
          // Type the wrong char(s)
          for (const typoChar of typo.chars) {
            if (!(await typeChar(typoChar, speedMs))) {
              return { completed: false };
            }
          }

          // Type 1-2 more correct chars before noticing
          const extraChars = Math.random() < 0.5 ? 1 : 2;
          let typed = 0;

          for (
            let extra = typo.newIndex;
            extra < text.length && typed < extraChars;
            extra += 1
          ) {
            if (!(await typeChar(text[extra], speedMs))) {
              return { completed: false };
            }

            typed += 1;
          }

          // Pause to "notice" the mistake
          await wait(200 + Math.random() * 200);

          if (cancelled) {
            return { completed: false };
          }

          // Backspace to the typo point
          const deleteCount = typo.chars.length + typed;

          if (!(await backspace(deleteCount, 20))) {
            return { completed: false };
          }

          // Resume from the same index — next iteration types the correct char
        } else {
          // --- Miss-and-error: type the rest with the typo baked in ---
          for (const typoChar of typo.chars) {
            if (!(await typeChar(typoChar, speedMs))) {
              return { completed: false };
            }
          }

          // Type remaining text after the typo
          for (let rest = typo.newIndex; rest < text.length; rest += 1) {
            if (!(await typeChar(text[rest], speedMs))) {
              return { completed: false };
            }
          }

          // Build the mistyped command to determine the error message
          const typed = text.slice(0, index) + typo.chars.join("") + text.slice(typo.newIndex);
          const typedWords = typed.split(" ");
          const correctWords = text.split(" ");

          // Find which word was mangled
          let errorWordIndex = 0;

          for (let w = 0; w < typedWords.length; w += 1) {
            if (typedWords[w] !== correctWords[w]) {
              errorWordIndex = w;
              break;
            }
          }

          const misspelled = typedWords[errorWordIndex] ?? typed;
          const correct = correctWords[errorWordIndex] ?? text;
          const errorMessage = buildErrorMessage(errorWordIndex, misspelled, correct);

          return { completed: true, missedError: { errorMessage, typedCommand: typed } };
        }
      }

      return { completed: true };
    };

    const runLoop = async () => {
      while (!cancelled) {
        cycleNumber += 1;
        const cycleId = cycleNumber;
        const lineNumber = { current: 0 };

        setCommandText("");
        setLogLines([]);
        setIsRunning(false);

        const typoResult = await typeTextWithTypos(fullCommand, 26);

        if (!typoResult.completed) {
          return;
        }

        // Handle miss-and-error: show error, new prompt, retype cleanly
        if (typoResult.missedError) {
          const { errorMessage, typedCommand } = typoResult.missedError;

          await wait(240);

          if (cancelled) {
            return;
          }

          // Preserve the mistyped command as a completed prompt line
          lineNumber.current += 1;
          const promptLineId = `${cycleId}-${lineNumber.current}`;
          setLogLines((lines) => [
            ...lines,
            {
              id: promptLineId,
              message: `ben@qa-runner:~$ ${typedCommand}`,
              tone: "muted",
            },
          ]);
          setCommandText("");

          if (
            !(await addLine(
              errorMessage,
              "error",
              100,
              cycleId,
              lineNumber,
            ))
          ) {
            return;
          }

          await wait(400);

          // Retype the command cleanly (no typos)
          const retryResult = await typeTextWithTypos(fullCommand, 26, 0, 0);

          if (!retryResult.completed) {
            return;
          }
        }

        await wait(240);

        if (cancelled) {
          return;
        }

        setIsRunning(true);

        for (const entry of logEntries) {
          if (
            !(await addLine(
              entry.message,
              entry.tone,
              entry.delayMs,
              cycleId,
              lineNumber,
            ))
          ) {
            return;
          }
        }

        setIsRunning(false);
        await wait(3000);
      }
    };

    void runLoop();

    return () => {
      cancelled = true;
    };
  }, [shouldReduceMotion]);

  return (
    <div className="flex h-full min-w-0 flex-col">
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
        Nightly Regression Run
      </p>
      <div className="flex h-full min-h-[320px] min-w-0 flex-col overflow-hidden rounded-lg bg-bg-elevated font-mono text-[11px] sm:min-h-[360px] sm:text-xs lg:min-h-[420px]">
        <div className="flex items-center gap-1.5 border-b border-border px-2.5 py-1.5 sm:px-3 sm:py-2" aria-hidden="true">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
          <span className="ml-1.5 text-[10px] text-text-muted">
            {isRunning ? "nightly-regression - running" : "nightly-regression - queued"}
          </span>
        </div>
        <div
          ref={outputRef}
          role="region"
          aria-label="Nightly regression run output"
          aria-live="off"
          tabIndex={0}
          className="max-h-[340px] flex-1 space-y-0.5 overflow-y-auto p-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 sm:space-y-1 sm:p-3 lg:max-h-[460px]"
        >
          <p className="text-text-secondary">
            <span className="text-text-muted">ben@qa-runner</span>
            <span className="text-text-muted">:~$ </span>
            <span>{commandText}</span>
            <span
              aria-hidden="true"
              className={`text-accent transition-opacity duration-200 ${
                cursorVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              _
            </span>
          </p>

          <p className="sr-only">
            Nightly regression results: {totalTests} tests passing across{" "}
            {regressionSuites.length} suites, 0 failing, {retriedCount} retried.
          </p>

          {logLines.map((line) => (
            <p key={line.id} className={toneClass(line.tone)}>
              {line.message}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
