import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps =
  | { href: string; children: ReactNode; variant?: "solid" | "outline" }
  | { onClick: () => void; children: ReactNode; variant?: "solid" | "outline" };

export default function Button(props: ButtonProps) {
  const variant = props.variant ?? "solid";
  const cls =
    variant === "solid"
      ? "inline-flex items-center justify-center rounded-md bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-violet-800"
      : "inline-flex items-center justify-center rounded-md border border-violet-300 bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition-colors duration-150 hover:bg-violet-50";

  if ("href" in props) {
    return (
      <Link className={cls} href={props.href}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={cls} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
