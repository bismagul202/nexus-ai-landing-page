import type { ContactFormInput } from "@/types/sections";

export const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function postContactForm(body: ContactFormInput) {
  const response = await fetch(`${API_BASE}/api/contact-messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: body.fullName,
      email: body.email,
      phone: "",
      subject: body.company || "General Inquiry",
      message: body.message,
    }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      data?.message ||
      (data?.errors ? Object.values(data.errors).flat().join(", ") : null) ||
      "Unable to send contact request. Please try again.";
    throw new Error(message);
  }

  return data;
}

export async function fetchLandingData<T>(path: string) {
  const response = await fetch(`${API_BASE}/${path}`);

  if (!response.ok) {
    throw new Error(`Unable to fetch landing data from ${path}`);
  }

  return (await response.json()) as T;
}
