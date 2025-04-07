"use client";

import { Bot } from "@repo/ui/icons";
import React from "react";

import { MessageBubble } from "./message-bubble";

export const ChatLoadingBubble = () => {
  return (
    <MessageBubble role="assistant">
      <div className="flex gap-2 text-muted-foreground">
        <Bot />
        <span className="flex items-center gap-1">
          <span>아디가 생각을 정리하고 있어요</span>
          <span className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce"></span>
          <span className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce [animation-delay:.2s]"></span>
          <span className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce [animation-delay:.4s]"></span>
        </span>
      </div>
    </MessageBubble>
  );
};
