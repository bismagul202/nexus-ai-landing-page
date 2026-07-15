import type { ContactFormInput } from "@/types/sections";

export const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function postContactForm(body: ContactFormInput) {
  const response = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Unable to send contact request. Please try again.");
  }

  return response.json();
}

export async function fetchLandingData<T>(path: string) {
  const response = await fetch(`${API_BASE}/${path}`);

  if (!response.ok) {
    throw new Error(`Unable to fetch landing data from ${path}`);
  }

  return (await response.json()) as T;
}
