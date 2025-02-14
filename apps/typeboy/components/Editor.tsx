"use client";

import {
  ComponentPropsWithoutRef,
  FocusEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  useRef,
} from "react";
import { useTypingHook } from "../hooks";
import { formatNumber } from "@repo/util";
import { cn } from "@repo/ui/lib/utils";

export const Editor = ({ text }: { text: string }) => {
  const { inputText, cpm, accuracy, handleInputChange } = useTypingHook(text);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormFocus = () => {
    inputRef.current?.focus();
  };

  const handleInputFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    const input = event.target;
    const length = input.value.length;

    input.setSelectionRange(length, length);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "a") {
      event.preventDefault();
    }
  };

  const handleFormSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log("제출");
  };

  return (
    <form
      onFocus={handleFormFocus}
      onClick={handleFormFocus}
      className="max-w-[1280px] w-full h-96 border-y-slate-900 border-y-2 mb-20 flex items-center relative"
      onSubmit={handleFormSubmit}
    >
      <div className="px-10 flex flex-wrap">
        {text?.split("").map((char, index) => {
          const isLast = index === inputText.length - 1;
          const inputChar = inputText[index];

          return (
            <div className="flex flex-col mb-4" key={`type-letter-${index}`}>
              <EditorText
                className={cn(
                  "cursor-default",
                  !isLast &&
                    inputChar &&
                    inputChar !== char &&
                    "text-red-600 font-semibold"
                )}
              >
                {char}
              </EditorText>
              {inputChar ? (
                <EditorText>{inputChar}</EditorText>
              ) : (
                <EditorText
                  isCursor={index === inputText.length}
                  className="text-gray-300"
                >
                  {char}
                </EditorText>
              )}
            </div>
          );
        })}
        <input
          name="type"
          className="opacity-0 absolute"
          autoFocus
          autoComplete="off"
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          ref={inputRef}
          value={inputText}
        />
      </div>

      <div className="absolute bottom-2 right-4 flex gap-3 items-center">
        <div className="flex gap-4">
          <div>SPEED</div>
          <div>{`${formatNumber(cpm)} CPM`}</div>
        </div>
        <div className="h-5 border-r border-gray-900"></div>
        <div className="flex gap-4">
          <div>ACC</div>
          <div>{`${formatNumber(accuracy)} %`}</div>
        </div>
      </div>
    </form>
  );
};

const EditorText = ({
  children,
  className,
  isCursor,
  ...props
}: ComponentPropsWithoutRef<"p"> & { isCursor?: boolean }) => {
  return (
    <div className="font-[D2Coding] flex w-6 text-2xl justify-left">
      <span
        className={cn(
          "border box-border border-transparent",
          isCursor && "animate-cursor border-gray-900"
        )}
      />
      <p className={cn("flex-1", className)} {...props}>
        {children === " " ? "\u00A0" : children}
      </p>
    </div>
  );
};
