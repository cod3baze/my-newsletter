import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputPrefixProps extends ComponentProps<"div"> {}

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

type InputControlProps = ComponentProps<"input">;

const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
  (props: InputControlProps, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={twMerge(
          "flex-1 border-0 bg-transparent p-0 outline-none text-zinc-900 placeholder:text-zinc-600",
          props.className
        )}
      />
    );
  }
);

type InputRootProps = ComponentProps<"div">;

function InputRoot(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        "flex w-full items-center gap-2 mx-1 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm",
        "focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100",
        props.className
      )}
      {...props}
    />
  );
}

export const Input = {
  Root: InputRoot,
  Prefix: InputPrefix,
  Control: InputControl,
};
