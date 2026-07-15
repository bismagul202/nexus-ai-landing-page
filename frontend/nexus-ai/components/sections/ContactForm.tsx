"use client";

import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactForm() {
  const { values, status, error, updateField, submit } = useContactForm();

  return (
    <SectionContainer id="contact" className="bg-white">
      <SectionHeading
        eyebrow="Contact"
        title="Start your project with a tailored landing page"
        description="Share your goals and we’ll connect your Next.js landing page with your Laravel REST API."
      />
      
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Form */}
        <form
          className="space-y-6 rounded-3xl border border-blue-100 bg-white p-8 shadow-sm"
          onSubmit={(event) => {
            event.preventDefault();
            submit();
          }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-bold text-blue-950">
              <span>Name</span>
              <input
                className="w-full rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                value={values.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                required
              />
            </label>
            <label className="space-y-2 text-sm font-bold text-blue-950">
              <span>Email</span>
              <input
                type="email"
                className="w-full rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                required
              />
            </label>
          </div>

          <label className="space-y-2 text-sm font-bold text-blue-950">
            <span>Company</span>
            <input
              className="w-full rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              value={values.company}
              onChange={(event) => updateField("company", event.target.value)}
            />
          </label>

          <label className="space-y-2 text-sm font-bold text-blue-950">
            <span>Message</span>
            <textarea
              className="min-h-[140px] w-full rounded-3xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              value={values.message}
              onChange={(event) => updateField("message", event.target.value)}
              required
            />
          </label>

          {error && <p className="text-sm font-medium text-rose-600">{error}</p>}
          {status === "success" && <p className="text-sm font-medium text-blue-600">Message sent successfully.</p>}

          <Button type="submit" variant="primary" className="w-full bg-blue-600 py-3 hover:bg-blue-700">
            {status === "submitting" ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {/* Info Panel */}
        <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl shadow-blue-600/20">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-200">API connection</p>
          <h3 className="mt-4 text-2xl font-bold">Laravel REST integration</h3>
          <p className="mt-4 text-blue-100 leading-relaxed">
            Use the contact form as a reference implementation for POST requests to your Laravel API and adapt it to additional routes such as leads, demos, or authentication.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}