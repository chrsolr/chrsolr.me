import { ReactNode } from "react";

export function Typography({
  as = "p",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  children: ReactNode;
}) {
  if (as === "h1") {
    return (
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {children}
      </h1>
    );
  }

  if (as === "h2") {
    return (
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {children}
      </h2>
    );
  }

  if (as === "h3") {
    return (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {children}
      </h3>
    );
  }

  if (as === "h4") {
    return (
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {children}
      </h4>
    );
  }

  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}
