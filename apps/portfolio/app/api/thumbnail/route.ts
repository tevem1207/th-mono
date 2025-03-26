import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rawSrc = searchParams.get("src");

  if (!rawSrc) {
    return NextResponse.json({ error: "Missing src" }, { status: 400 });
  }

  const src = rawSrc.startsWith("http")
    ? rawSrc
    : `${req.nextUrl.origin}${rawSrc}`;

  try {
    const res = await fetch(src);
    if (!res.ok) {
      return NextResponse.json(
        { error: "Image fetch failed" },
        { status: 400 }
      );
    }

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const metadata = await sharp(buffer).metadata();

    const x = parseInt(searchParams.get("x") || "0");
    const y = parseInt(searchParams.get("y") || "0");
    const w = parseInt(searchParams.get("w") || `${metadata.width}`);
    const h = parseInt(searchParams.get("h") || `${metadata.height}`);
    const tw = parseInt(searchParams.get("tw") || "150");
    const th = parseInt(searchParams.get("th") || "150");

    const output = await sharp(buffer)
      .extract({
        left: x,
        top: y,
        width: w,
        height: h,
      })
      .resize(tw, th)
      .webp({ quality: 80 })
      .toBuffer();

    return new NextResponse(output, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}
