"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/testimonials");
        // API response structure ke mutabiq data set kiya
        setTestimonials(res.data.data || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (loading) return null;

  return (
    <SectionContainer id="testimonials" className="bg-white py-24">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by bold teams building the next AI wave"
        description="Feedback from product leaders, founders, and engineering teams who value clarity and execution."
      />
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t: any) => (
          <blockquote 
            key={t.id} 
            className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4 text-4xl text-blue-200">“</div>
              <p className="text-slate-600 leading-relaxed italic">{t.review}</p>
            </div>
            
            <footer className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
              {/* Avatar Container: Same structure as your working About component */}
              <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 bg-slate-50 flex-shrink-0">
                <img 
                  src={t.client_avatar} 
                  alt={t.client_name} 
                  className="w-full h-full object-cover block"
                />
              </div>
              
              <div>
                <span className="block font-bold text-blue-950">{t.client_name}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
                  {t.client_designation} {t.client_company && `at ${t.client_company}`}
                </span>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </SectionContainer>
  );
}