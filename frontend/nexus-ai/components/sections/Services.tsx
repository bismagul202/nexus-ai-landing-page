"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

const fetchServices = async () => {
  const { data } = await axios.get("http://127.0.0.1:8000/api/services");
  return data.data;
};

export default function Services() {
  const { data: services, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
  });

  return (
    <SectionContainer id="services" className="bg-slate-50 py-24">
      <SectionHeading
        eyebrow="Our Expertise"
        title="Engineering Intelligent Solutions"
        description="We bridge the gap between complex AI logic and intuitive user experiences."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          services?.map((service: any) => (
            <div
              key={service.id}
              className="relative p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                <div className="w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {/* Aap yahan icon bhi laga sakti hain */}
                  <span className="text-xl font-bold">0{service.id}</span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </SectionContainer>
  );
}
