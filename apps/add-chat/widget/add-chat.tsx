"use client";
import { useChat } from "@ai-sdk/react";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui";
import {
  ArrowDown,
  ArrowUpIcon,
  Bot,
  BotMessageSquare,
  StopCircle,
} from "@repo/ui/icons";
import { cn } from "@repo/ui/lib/utils";
import React, { useEffect, useRef, useState } from "react";

import { AutoResizeTextarea } from "./auto-resize-textarea";
import { ChatLoadingBubble } from "./chat-loading-bubble";
import { MessageBubble } from "./message-bubble";

export interface AddChatProps {
  title: string;
  api: string;
}

export const AddChat = ({ title, api }: AddChatProps) => {
  const [open, setOpen] = useState(false);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  const { messages, input, handleSubmit, handleInputChange, status } = useChat({
    api,
    maxSteps: 3,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter" && !e.shiftKey && status === "ready") {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
      setShowScrollToBottom(false);
    }
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const threshold = 50;
    const distanceToBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    const nearBottom = distanceToBottom < threshold;

    setIsAtBottom(nearBottom);
    setShowScrollToBottom(!nearBottom);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el && isAtBottom) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, isAtBottom]);

  const header = (
    <header className="my-4 flex h-fit min-h-full flex-col gap-4">
      <MessageBubble role="assistant">
        <div className="flex gap-2 items-end">
          <Bot className="size-6 text-primary" />
          <h1 className="text-xl font-semibold text-foreground">
            안녕하세요, 애디에요!
          </h1>
        </div>
      </MessageBubble>
      <MessageBubble role="assistant">
        <p className="text-[13px] leading-relaxed">
          저는 Addie, AI 기반 챗봇입니다.
          <br />
          {title}에 대해 궁금한 걸 자유롭게 물어보세요!
        </p>
      </MessageBubble>
      <MessageBubble role="assistant">
        <p className="rounded-md bg-muted px-3 py-2 text-xs leading-relaxed text-muted-foreground">
          ⚠️ 제가 드리는 답변은 AI가 자동으로 생성한 내용이에요.
          <br />
          중요한 정보는 꼭 운영자에게 확인해 주세요.
        </p>
      </MessageBubble>
    </header>
  );

  const messageList = (
    <div className="my-4 flex h-fit min-h-full flex-col gap-4">
      {messages.map(({ role, content }, index) => (
        <MessageBubble key={index} role={role}>
          {content}
        </MessageBubble>
      ))}
      {status === "submitted" && <ChatLoadingBubble />}
    </div>
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-4">
      <TooltipProvider delayDuration={0}>
        {open && (
          <main
            className={cn(
              "relative mx-auto flex w-svw max-w-[500px] flex-col items-stretch min-h-80 max-h-[calc(100svh-100px)] bg-background/95 border rounded-md"
            )}
          >
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto px-6 py-2"
            >
              {messages.length ? messageList : header}
            </div>
            {showScrollToBottom && (
              <Button
                variant="outline"
                onClick={scrollToBottom}
                className="absolute bottom-24 right-8 shadow-md"
              >
                <ArrowDown />맨 아래로 이동
              </Button>
            )}
            <form
              onSubmit={handleSubmit}
              className="border-input bg-background focus-within:ring-ring/10 relative mx-6 mb-6 flex items-center rounded-[16px] border px-3 py-1.5 pr-8 text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0"
            >
              <AutoResizeTextarea
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                value={input}
                placeholder="Enter a message"
                className="placeholder:text-muted-foreground flex-1 bg-transparent focus:outline-none"
              />
              <Tooltip>
                <TooltipTrigger asChild>
                  {status === "ready" ? (
                    <Button
                      type="submit"
                      variant="ghost"
                      size="sm"
                      className="absolute bottom-1 right-1 size-6 rounded-full"
                    >
                      <ArrowUpIcon size={16} />
                      <span className="sr-only">Submit</span>
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute bottom-1 right-1 size-6 rounded-full"
                      type="button"
                      onClick={() => stop()}
                    >
                      <StopCircle size={16} />
                      <span className="sr-only">Stop</span>
                    </Button>
                  )}
                </TooltipTrigger>
                <TooltipContent sideOffset={12}>Submit</TooltipContent>
              </Tooltip>
            </form>
          </main>
        )}
        <Button
          className="size-12 rounded-full p-4"
          onClick={() => setOpen((prev) => !prev)}
        >
          <BotMessageSquare />
          <span className="sr-only">Open AddChat</span>
        </Button>
      </TooltipProvider>
    </div>
  );
};
