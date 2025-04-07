"use client";

import { cn } from "@repo/ui/lib/utils";
import React, { useRef, useEffect, type TextareaHTMLAttributes } from "react";

interface AutoResizeTextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "value"> {
  value: string;
}

export const AutoResizeTextarea = ({
  className,
  value,
  onChange,
  ...props
}: AutoResizeTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    resizeTextarea();
  }, [value]);

  return (
    <textarea
      {...props}
      value={value}
      ref={textareaRef}
      rows={1}
      onChange={(e) => {
        if (onChange) {
          onChange(e);
        }
        resizeTextarea();
      }}
      className={cn("resize-none min-h-4 max-h-80", className)}
    />
  );
};
