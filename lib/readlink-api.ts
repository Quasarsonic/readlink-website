import { auth } from "@clerk/nextjs/server";

const apiUrl = (process.env.READLINK_API_URL || "http://localhost:3000").replace(
  /\/$/,
  "",
);

async function readlinkToken() {
  const { getToken } = await auth();
  const template = process.env.CLERK_JWT_TEMPLATE || "readlink-prod";
  return getToken({ template });
}

export async function readlinkApiFetch(path: string, init: RequestInit = {}) {
  const token = await readlinkToken();
  if (!token) throw new Error("Not authenticated");

  const headers = new Headers(init.headers);
  headers.set("Authorization", `Bearer ${token}`);

  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  return fetch(`${apiUrl}${path}`, {
    ...init,
    headers,
    cache: "no-store",
  });
}

export async function readlinkApiJson<T>(path: string, init: RequestInit = {}) {
  const response = await readlinkApiFetch(path, init);
  const payload = (await response.json().catch(() => ({}))) as T & {
    error?: string;
    message?: string;
  };

  if (!response.ok) {
    throw new Error(payload.error || payload.message || "Readlink API request failed");
  }

  return payload as T;
}
