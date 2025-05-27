import { NextRequest, NextResponse } from "next/server";

import { createResource } from "@/lib/actions/resources";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const content = await req.json();

  const resource = await createResource(content);

  return NextResponse.json({
    success: true,
    resource,
  });
}
