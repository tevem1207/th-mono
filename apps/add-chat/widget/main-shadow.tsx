import React from "react";
import { createRoot } from "react-dom/client";

import { AddChat } from "./add-chat";
import styles from "./index.css?inline";

const root = createShadowRoot(styles);
root.render(<AddChat />);

function createShadowRoot(styles: string) {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(styles);

  const node = document.createElement("div");
  node.id = "add-chat-shadow";
  document.body.appendChild(node);

  const shadow = node.attachShadow({ mode: "open" });

  shadow.adoptedStyleSheets = [sheet];

  return createRoot(shadow);
}
