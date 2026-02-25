import type { ComponentPropsWithoutRef } from "react";

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mb-4 mt-10 text-2xl font-bold text-text-primary"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-4 text-text-secondary" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mb-4 ml-6 list-disc space-y-2" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="text-text-secondary" {...props} />
  ),
  hr: () => <hr className="my-8 border-border" />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="text-text-muted" {...props} />
  ),
};
