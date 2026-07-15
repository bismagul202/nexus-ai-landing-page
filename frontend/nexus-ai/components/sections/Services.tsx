import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/landing";

export default function Services() {
  return (
    <SectionContainer id="services" className="bg-white">
      <SectionHeading
        eyebrow="Services"
        title="Core offerings for your AI go-to-market strategy"
        description="A modern landing page requires a mix of strategy, visual design, and backend integration. These services work together to deliver that foundation."
      />
      
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article 
            key={service.id} 
            className="group rounded-3xl border border-blue-100 bg-white p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
          >
            {/* Using Blue for the Eyebrow/Title */}
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              {service.title}
            </p>
            
            <p className="mt-4 text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}