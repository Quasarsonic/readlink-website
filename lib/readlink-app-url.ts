export const READLINK_APP_URL = (
  process.env.NEXT_PUBLIC_READLINK_APP_URL ?? "https://readlink.app"
).replace(/\/$/, "");

export const readlinkAppUrls = {
  signUp: `${READLINK_APP_URL}/sign-up`,
  profile: `${READLINK_APP_URL}/profile`,
  library: `${READLINK_APP_URL}/library`,
} as const;

export function readlinkLibraryUrl(handle: string) {
  const slug = handle.trim();
  if (!slug) return readlinkAppUrls.signUp;
  return `${READLINK_APP_URL}/l/${encodeURIComponent(slug)}`;
}
