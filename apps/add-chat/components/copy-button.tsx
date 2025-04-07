"use client";
import { Button } from "@repo/ui";
import { Copy } from "@repo/ui/icons";
import React from "react";

export const CopyButton = ({ text }: { text: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <Button
      variant="secondary"
      size="icon"
      className="absolute top-2 right-2"
      onClick={handleCopy}
    >
      <Copy className="h-4 w-4" />
    </Button>
  );
};
