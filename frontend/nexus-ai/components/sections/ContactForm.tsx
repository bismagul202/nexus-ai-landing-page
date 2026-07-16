"use client";

import { CheckCircle2, AlertCircle, Loader2, User, Mail, Phone, Building2, MessageSquare, Zap, ShieldCheck, Clock, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { useContactForm } from "@/hooks/useContactForm";

const perks = [
  { icon: Zap, text: "Response within 24 hours" },
  { icon: ShieldCheck, text: "No spam, ever — your data stays private" },
  { icon: Clock, text: "Free 30-minute discovery call" },
];

export default function ContactForm() {
  const { values, status, error, updateField, submit } = useContactForm();
  const isSubmitting = status === "submitting";

  return (
    <SectionContainer id="contact" className="relative overflow-hidden bg-white">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative">
        <SectionHeading
          eyebrow="Contact"
          title="Start your project with a tailored landing page"
          description="Share your goals and we’ll connect your Next.js landing page with your Laravel REST API."
        />

        <div className="mx-auto max-w-2xl">
          <form
            className="space-y-6 rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-sm transition hover:shadow-2xl hover:shadow-blue-900/10 sm:p-10"
            onSubmit={(event) => {
              event.preventDefault();
              submit();
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-bold text-blue-950">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-500" />
                  Name
                </span>
                <input
                  className="w-full rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="Your full name"
                  value={values.fullName}
                  onChange={(event) => updateField("fullName", event.target.value)}
                  required
                />
              </label>
              <label className="space-y-2 text-sm font-bold text-blue-950">
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-500" />
                  Email
                </span>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  required
                />
              </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-bold text-blue-950">
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-500" />
                  Phone
                </span>
                <input
                  type="tel"
                  className="w-full rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="+92 300 1234567"
                  value={values.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  required
                />
              </label>
              <label className="space-y-2 text-sm font-bold text-blue-950">
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-blue-500" />
                  Company
                </span>
                <input
                  className="w-full rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="Company name (optional)"
                  value={values.company}
                  onChange={(event) => updateField("company", event.target.value)}
                />
              </label>
            </div>

            <label className="space-y-2 text-sm font-bold text-blue-950">
              <span className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-blue-500" />
                Message
              </span>
              <textarea
                className="min-h-[140px] w-full rounded-3xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                placeholder="Tell us a bit about your project..."
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                required
              />
            </label>

            {error && (
              <div className="flex items-start gap-2 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}
            {status === "success" && (
              <div className="flex items-start gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Message sent successfully. We’ll get back to you shortly.</span>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 bg-[#0a1128] py-3.5 text-base text-white shadow-lg shadow-blue-900/25 hover:bg-[#132056] hover:shadow-blue-900/35 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Trust strip */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            {perks.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm font-medium text-blue-950/70">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Icon className="h-4 w-4" />
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
