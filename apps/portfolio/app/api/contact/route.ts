import { Client } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";

import { ContactSchema } from "@/lib/schemas";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function POST(req: NextRequest) {
  const json = await req.json();
  const result = ContactSchema.safeParse(json);

  if (!result.success) {
    return new Response(JSON.stringify(result.error), { status: 400 });
  }

  const { name, email, subject, message } = result.data;
  try {
    const NOTION_DB_ID = process.env.NOTION_DB_ID;

    if (!NOTION_DB_ID) {
      throw new Error("NOTION_DB_ID is not defined in environment variables.");
    }

    await notion.pages.create({
      parent: { database_id: NOTION_DB_ID },
      properties: {
        Subject: {
          title: [{ text: { content: subject } }],
        },
        Email: {
          rich_text: [{ text: { content: email } }],
        },
        Name: {
          rich_text: [{ text: { content: name } }],
        },
      },
      children: [
        { paragraph: { rich_text: [{ text: { content: message } }] } },
      ],
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[Notion API Error]", err);
    if (err instanceof Error) {
      return NextResponse.json(
        { ok: false, error: err.message },
        { status: 500 }
      );
    }
  }
}
