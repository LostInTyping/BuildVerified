export type ExpertiseIconName =
  | "beaker"
  | "chart-bar"
  | "bug"
  | "server"
  | "git-branch"
  | "eye"
  | "code-bracket"
  | "bolt"
  | "database";

type ExpertiseIconProps = {
  name: ExpertiseIconName;
  className?: string;
};

export function ExpertiseIcon({ name, className }: ExpertiseIconProps) {
  switch (name) {
    case "beaker":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className={className}
        >
          <path d="M9 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-.5v4.382l5.553 9.26A2 2 0 0 1 17.336 20H6.664a2 2 0 0 1-1.717-3.008L10.5 7.732V4H10a1 1 0 0 1-1-1Zm3.5 1h-1v4a1 1 0 0 1-.138.508L6.32 17.34a.5.5 0 0 0 .166.672.5.5 0 0 0 .178.063.5.5 0 0 0 .083.006h10.506a.5.5 0 0 0 .429-.752L12.638 8.158A1 1 0 0 1 12.5 7.65V4Z" />
        </svg>
      );
    case "chart-bar":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className={className}
        >
          <path d="M3 3a1 1 0 0 1 1 1v14h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm4 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm5-2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm5-3a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Z" />
        </svg>
      );
    case "bug":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className={className}
        >
          <path d="M12 2a4 4 0 0 0-3.874 3.022A6.002 6.002 0 0 0 4 6a1 1 0 0 0 0 2h1.126A6.007 6.007 0 0 0 4 11H3a1 1 0 1 0 0 2h1c0 1.13.312 2.187.854 3.09L3.293 17.65a1 1 0 1 0 1.414 1.414L6.1 17.672A5.98 5.98 0 0 0 9 19.17V13a1 1 0 1 1 2 0v6.17a5.98 5.98 0 0 0 2.9-1.498l1.393 1.392a1 1 0 0 0 1.414-1.414l-1.56-1.56A5.974 5.974 0 0 0 16 13h1a1 1 0 1 0 0-2h-1c0-1.126-.312-2.18-.854-3.083A1.01 1.01 0 0 0 16 8h1a1 1 0 1 0 0-2h-.126a6.002 6.002 0 0 0-1-1.022A4 4 0 0 0 12 2Zm-2 4a2 2 0 1 1 4 0c0 .033-.002.066-.003.098A6 6 0 0 0 12 6c-.696 0-1.37.034-1.997.098C10.002 6.066 10 6.033 10 6Z" />
        </svg>
      );
    case "server":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className={className}
        >
          <path d="M4 2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm0 2h16v3H4V4Zm13 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM4 11a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H4Zm0 2h16v3H4v-3Zm13 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 20a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Z" />
        </svg>
      );
    case "git-branch":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className={className}
        >
          <path d="M6 3a3 3 0 0 1 2 5.236V11h4a3 3 0 0 1 3 3v1.764a3 3 0 1 1-2 0V14a1 1 0 0 0-1-1H8v2.764a3 3 0 1 1-2 0V8.236A3.001 3.001 0 0 1 6 3Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
        </svg>
      );
    case "eye":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className={className}
        >
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5ZM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z" />
        </svg>
      );
    case "code-bracket":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className={className}
        >
          <path d="M9.707 5.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L4.414 12l5.293-5.293a1 1 0 0 0 0-1.414Zm4.586 0a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L19.586 12l-5.293-5.293a1 1 0 0 1 0-1.414Z" />
        </svg>
      );
    case "bolt":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className={className}
        >
          <path d="M13 2 4 14h5v8l9-12h-5V2Z" />
        </svg>
      );
    case "database":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className={className}
        >
          <path d="M12 2C7.58 2 4 3.79 4 6v12c0 2.21 3.58 4 8 4s8-1.79 8-4V6c0-2.21-3.58-4-8-4Zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2ZM6 9.26C7.53 10.03 9.63 10.5 12 10.5s4.47-.47 6-1.24V12c0 .5-2.13 2-6 2s-6-1.5-6-2V9.26ZM6 15.26C7.53 16.03 9.63 16.5 12 16.5s4.47-.47 6-1.24V18c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.74Z" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
