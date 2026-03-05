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

type LogTone = "muted" | "pass" | "retry";

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

const commandPrefix = "pnpm exec cypress run --record --";
const mistypedSegment = "gruop";
const correctedSegment = "group";
const commandSuffix = " nightly-regression";

const totalSpecs = regressionSuites.length;
const totalTests = regressionSuites.reduce((count, suite) => count + suite.tests, 0);
const retriedCount = regressionSuites.filter((suite) => suite.status === "retry").length;

function toneClass(tone: LogTone): string {
  if (tone === "pass") {
    return "text-green-400";
  }

  if (tone === "retry") {
    return "text-yellow-400";
  }

  return "text-text-muted";
}

const fullCommand = `${commandPrefix}${correctedSegment}${commandSuffix}`;

function buildStaticLogLines(): TerminalLogLine[] {
  const lines: TerminalLogLine[] = [
    { id: "s-1", message: "[00:00] Booting services: web, api, db, queue...", tone: "muted" },
    {
      id: "s-2",
      message: `[00:11] Discovered ${totalSpecs} specs / ${totalTests} tests across 4 CI shards`,
      tone: "muted",
    },
  ];

  let index = 3;
  for (const suite of regressionSuites) {
    if (suite.status === "retry") {
      lines.push({
        id: `s-${index}`,
        message: `[RETRY] ${suite.suite} assertion timed out on attempt 1/2`,
        tone: "retry",
      });
      index += 1;
    }
    lines.push({
      id: `s-${index}`,
      message: `[PASS] ${suite.suite} (${suite.tests} tests, ${suite.duration})`,
      tone: "pass",
    });
    index += 1;
  }

  lines.push(
    { id: `s-${index}`, message: "[04:27] Uploading traces, videos, screenshots, junit.xml...", tone: "muted" },
    { id: `s-${index + 1}`, message: `${totalTests} passing - 0 failing - ${retriedCount} retried`, tone: "pass" },
    { id: `s-${index + 2}`, message: "Total runtime: 4m 29s", tone: "muted" },
  );

  return lines;
}

export function RegressionTerminal() {
  const shouldReduceMotion = useReducedMotion();
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

    let cancelled = false;
    let cycleNumber = 0;

    const wait = async (ms: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, ms);
      });

    const typeText = async (text: string, speedMs: number) => {
      for (const character of text) {
        if (cancelled) {
          return false;
        }

        setCommandText((current) => `${current}${character}`);
        await wait(speedMs);
      }

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

    const runLoop = async () => {
      while (!cancelled) {
        cycleNumber += 1;
        const cycleId = cycleNumber;
        const lineNumber = { current: 0 };

        setCommandText("");
        setLogLines([]);
        setIsRunning(false);

        if (!(await typeText(commandPrefix, 26))) {
          return;
        }

        if (!(await typeText(mistypedSegment, 30))) {
          return;
        }

        await wait(280);

        if (!(await backspace(mistypedSegment.length, 20))) {
          return;
        }

        if (!(await typeText(correctedSegment, 28))) {
          return;
        }

        if (!(await typeText(commandSuffix, 24))) {
          return;
        }

        await wait(240);

        if (cancelled) {
          return;
        }

        setIsRunning(true);

        if (
          !(await addLine(
            "[00:00] Booting services: web, api, db, queue...",
            "muted",
            130,
            cycleId,
            lineNumber,
          ))
        ) {
          return;
        }

        if (
          !(await addLine(
            `[00:11] Discovered ${totalSpecs} specs / ${totalTests} tests across 4 CI shards`,
            "muted",
            180,
            cycleId,
            lineNumber,
          ))
        ) {
          return;
        }

        for (const suite of regressionSuites) {
          if (suite.status === "retry") {
            if (
              !(await addLine(
                `[RETRY] ${suite.suite} assertion timed out on attempt 1/2`,
                "retry",
                220,
                cycleId,
                lineNumber,
              ))
            ) {
              return;
            }
          }

          if (
            !(await addLine(
              `[PASS] ${suite.suite} (${suite.tests} tests, ${suite.duration})`,
              "pass",
              suite.status === "retry" ? 340 : 250,
              cycleId,
              lineNumber,
            ))
          ) {
            return;
          }
        }

        if (
          !(await addLine(
            "[04:27] Uploading traces, videos, screenshots, junit.xml...",
            "muted",
            220,
            cycleId,
            lineNumber,
          ))
        ) {
          return;
        }

        if (
          !(await addLine(
            `${totalTests} passing - 0 failing - ${retriedCount} retried`,
            "pass",
            180,
            cycleId,
            lineNumber,
          ))
        ) {
          return;
        }

        if (
          !(await addLine(
            "Total runtime: 4m 29s",
            "muted",
            110,
            cycleId,
            lineNumber,
          ))
        ) {
          return;
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
        <div className="flex items-center gap-1.5 border-b border-border px-2.5 py-1.5 sm:px-3 sm:py-2">
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
          tabIndex={0}
          className="max-h-[340px] flex-1 space-y-0.5 overflow-y-auto p-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:outline-offset-bg-elevated sm:space-y-1 sm:p-3 lg:max-h-[460px]"
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
