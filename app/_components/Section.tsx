import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("max-w-8xl px-2 md:px-6 m-auto", props.className)}>
      {props.children}
    </section>
  );
};
