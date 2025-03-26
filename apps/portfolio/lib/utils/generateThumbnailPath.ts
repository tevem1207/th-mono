type Options = {
  x: number;
  y: number;
  w?: number;
  h?: number;
  tw?: number;
  th?: number;
};

type GenerateThumbnailPathOptions = {
  src: string;
  options: Options;
};

export function generateThumbnailPath({
  src,
  options: { x, y, w, h, tw, th },
}: GenerateThumbnailPathOptions): string {
  const params = new URLSearchParams();

  params.set("src", src);
  params.set("x", x.toString());
  params.set("y", y.toString());

  if (typeof w === "number") {
    params.set("w", w.toString());
  }

  if (typeof h === "number") {
    params.set("h", h.toString());
  }

  if (typeof tw === "number") {
    params.set("tw", tw.toString());
  }

  if (typeof th === "number") {
    params.set("th", th.toString());
  }

  return `/api/thumbnail?${params.toString()}`;
}
