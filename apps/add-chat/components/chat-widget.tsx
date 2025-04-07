"use client";

import { BotMessageSquare } from "@repo/ui/icons";
import React, { useState } from "react";

export const AddChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, `🙋 ${userMessage}`]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, `🤖 ${data.reply}`]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, "❌ 오류가 발생했습니다."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        fontFamily: "sans-serif",
      }}
    >
      {!open && (
        <button className="addchat-button" onClick={() => setOpen(true)}>
          <BotMessageSquare />
          <span className="sr-only">Open AddChat</span>
        </button>
      )}
      {open && (
        <div
          style={{
            width: "300px",
            height: "400px",
            background: "#fff",
            border: "1px solid #ccc",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "10px",
              fontWeight: "bold",
              borderBottom: "1px solid #eee",
            }}
          >
            AddChat
            <button style={{ float: "right" }} onClick={() => setOpen(false)}>
              ✖️
            </button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
            {messages.map((m, i) => (
              <div key={i}>{m}</div>
            ))}
            {loading && <div>🤖 ...응답 중...</div>}
          </div>
          <form
            onSubmit={handleSend}
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #eee",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1 }}
              placeholder="메시지를 입력하세요"
            />
            <button type="submit">전송</button>
          </form>
        </div>
      )}
    </div>
  );
};
