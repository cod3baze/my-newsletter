import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Loader2 } from "lucide-react";

interface SubscribeButtonProps extends ComponentProps<"button"> {
  loading?: boolean;
}

export const SubscribeButton = forwardRef<
  HTMLButtonElement,
  SubscribeButtonProps
>(({ loading = false, disabled, ...rest }: SubscribeButtonProps, ref) => {
  return (
    <button
      ref={ref}
      {...rest}
      disabled={disabled}
      className={twMerge(
        "flex items-center justify-center gap-2 h-11 w-full rounded-lg text-white bg-[#7149c1] hover:brightness-90 disabled:bg-purple-400 disabled:text-zinc-100 disabled:cursor-not-allowed transition-all",
        rest.className
      )}
    >
      {(loading || disabled) && (
        <Loader2 className="text-white mr-1 h-5 w-5 animate-spin" />
      )}
      Inscrever-se (Grátis)
    </button>
  );
});
