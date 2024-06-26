import { ComponentPropsWithoutRef, forwardRef, LegacyRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
    error?: boolean;
    errorMessage?: string;
}

function Input (
    { className, error, errorMessage, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement> | undefined
) {
    const inputClassName = twMerge(
        "rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-primaryDarker transition-all duration-200 focus:ring-1 outline-none focus:ring-primary",
        error ? "border-red-500" : "focus:ring-1 focus:ring-primary",
        className
    );

    return (
        <div className="flex w-full flex-col">
            <input ref={ref} className={inputClassName} {...props} />
            {error && errorMessage && (
                <span className="my-1 text-xs text-red-400">{errorMessage}</span>
            )}
        </div>
    );
}

export default forwardRef(Input);