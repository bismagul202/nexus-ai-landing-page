import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import axios from "axios";
import { BrainCircuit, Code, BarChart3, Cloud, Zap, ShieldCheck, BotMessageSquare, Layers3 } from "lucide-react";

const iconMap: { [key: string]: any } = {
  BrainCircuit,
  Code,
  BarChart3,
  Cloud,
  Zap,
  ShieldCheck,
  BotMessageSquare,
  Layers3,
};

export default async function Features() {
  let features = [];

  try {
    // Fetch dynamic data from Laravel API
    const res = await axios.get("http://127.0.0.1:8000/api/features");
    // Handle cases where the API response structure might be different
    features = Array.isArray(res.data) ? res.data : res.data.data || [];
  } catch (error) {
    console.error("Error fetching features:", error);
  }

  // Don't render anything if there are no features
  if (features.length === 0) {
    return null;
  }

  return (
    <SectionContainer id="features" className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      
      {/* Decorative Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-16">
        
        {/* Header Section - Centered */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-inner">
            Platform Capabilities
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl">
            Engineered for Growth
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Leverage a complete suite of tools designed to build, deploy, and scale high-performance AI applications with ease.
          </p>
        </div>

        {/* Features Grid - 2 columns on tablet, 3 on desktop */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
          {features.map((feature: any) => {
            // Dynamically pick icon, fallback to BotMessageSquare
            const IconComponent = iconMap[feature.icon] || BotMessageSquare;
            
            return (
              <div 
                key={feature.id} 
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-blue-950/5 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Fancy Gradient Border Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-[2px]" aria-hidden="true">
                    <div className="absolute inset-[2px] rounded-[22px] bg-white" />
                </div>

                {/* Content Container - Needs relative positioning to sit ON TOP of gradient border */}
                <div className="relative z-10 flex flex-col h-full">
                    {/* Icon with background glow */}
                    <div className="mb-8 flex items-center gap-x-4">
                        <div className="relative flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white ring-1 ring-slate-100">
                            {/* Background blur element for glow */}
                            <div className="absolute -inset-2 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                            <IconComponent className="h-8 w-8 relative z-10" aria-hidden="true" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <h3 className="text-xl font-bold leading-7 text-blue-950 tracking-tight">
                        {feature.title}
                    </h3>
                    <p className="mt-4 flex-auto text-base leading-7 text-slate-600">
                        {feature.description}
                    </p>

                    {/* Learn More link that appears on hover */}
                    <div className="mt-8 text-sm font-semibold text-blue-600 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
                        Learn More <span>→</span>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}