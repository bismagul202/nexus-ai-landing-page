import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/landing";

export default function FAQ() {
  return (
    <SectionContainer id="faq" className="bg-white">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Common questions about the site architecture, API integration, and the reusable component strategy."
      />
      
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((item) => (
          <details 
            key={item.id} 
            className="group rounded-3xl border border-blue-100 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-md"
          >
            <summary className="flex cursor-pointer items-center justify-between font-bold text-blue-950 outline-none">
              {item.question}
              <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform group-open:rotate-180">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-blue-50 pt-4 text-slate-600 leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </SectionContainer>
  );
}