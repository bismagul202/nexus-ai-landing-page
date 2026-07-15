"use client";

import { useState } from "react";
import type { ContactFormInput } from "@/types/sections";
import { postContactForm } from "@/lib/api";

export function useContactForm() {
  const [values, setValues] = useState<ContactFormInput>({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof ContactFormInput, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const submit = async () => {
    setStatus("submitting");
    setError(null);

    try {
      await postContactForm(values);
      setStatus("success");
      setValues({ fullName: "", email: "", company: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error");
      setStatus("error");
    }
  };

  return {
    values,
    status,
    error,
    updateField,
    submit,
  };
}
