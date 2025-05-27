import { Message } from "ai";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

interface MessageBubbleProps {
  role: Message["role"];
  children: ReactNode;
}

export type MarkdownMessageBubbleProps = Omit<
  MessageBubbleProps,
  "children"
> & {
  children: string;
};

export const MessageBubble = ({ role, children }: MessageBubbleProps) => {
  return (
    <div
      data-role={role}
      className="max-w-[80%] rounded-xl px-3 py-2 text-sm data-[role=assistant]:self-start data-[role=user]:self-end data-[role=assistant]:bg-gray-100 data-[role=user]:bg-blue-500 data-[role=assistant]:text-black data-[role=user]:text-white"
    >
      {children}
    </div>
  );
};

export const MarkdownMessageBubble = ({
  role,
  children,
}: MarkdownMessageBubbleProps) => {
  return (
    <MessageBubble role={role}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
      >
        {children}
      </ReactMarkdown>
    </MessageBubble>
  );
};
