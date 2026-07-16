import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import axios from "axios";

export default async function FAQ() {
  let faqs = [];

  try {
    const res = await axios.get("http://127.0.0.1:8000/api/faqs");
    faqs = Array.isArray(res.data) ? res.data : res.data.data || [];
  } catch (error) {
    console.error("Error fetching FAQs:", error);
  }

  if (faqs.length === 0) return null;

  return (
    <SectionContainer id="faq" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <SectionHeading
          eyebrow="Support"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our platform and services."
        />

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-blue-100 rounded-3xl bg-white p-2 shadow-xl shadow-blue-950/5 ring-1 ring-slate-200">
          {faqs.map((item: any) => (
            <details
              key={item.id}
              className="group p-6 transition-all"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-blue-950 outline-none hover:text-blue-600">
                <span className="text-lg">{item.question}</span>
                <span className="ml-6 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-300 group-open:rotate-180">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 pr-12 text-base leading-7 text-slate-600 animate-in fade-in duration-500">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
