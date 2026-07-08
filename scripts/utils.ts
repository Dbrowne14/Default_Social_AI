export const withKeys = <T>(items: T[], prefix: string) =>
  items.map((item, index) => ({
    _key: `${prefix}-${index}`,
    ...item,
  }));

export const withTitleLines = (section: { title: any[] }) => ({
  ...section,
  title: withKeys(section.title, "line").map((line, lineIndex) => ({
    ...line,
    segments: withKeys(line.segments, `segment-${lineIndex}`),
  })),
});

export const toDocumentId = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");