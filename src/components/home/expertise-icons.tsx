export type ExpertiseIconName =
  | "beaker"
  | "clipboard-check"
  | "bug"
  | "server"
  | "git-branch"
  | "users"
  | "code-bracket"
  | "bolt"
  | "shield-check";

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
    case "clipboard-check":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className={className}
        >
          <path d="M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v15A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 18.5 3h-1.585A1.5 1.5 0 0 0 15.5 2h-7ZM9 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm6.854 7.354-4.5 4.5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 14.293l4.146-4.147a.5.5 0 0 1 .708.708Z" />
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
    case "users":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className={className}
        >
          <path d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-3 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0v-1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1a1 1 0 1 1-2 0v-1Zm12-7a1 1 0 0 1 1-1 4 4 0 0 1 4 4v1a1 1 0 1 1-2 0v-1a2 2 0 0 0-2-2 1 1 0 0 1-1-1Zm-1-5a1 1 0 0 1 1-1 4 4 0 1 1 0 8 1 1 0 1 1 0-2 2 2 0 1 0 0-4 1 1 0 0 1-1-1Z" />
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
    case "shield-check":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className={className}
        >
          <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm-1 15.5-3.5-3.5 1.41-1.41L11 13.67l5.09-5.09L17.5 10 11 16.5Z" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
