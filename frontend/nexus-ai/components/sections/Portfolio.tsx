"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Portfolio() {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/portfolios");
        setPortfolios(res.data.data || []);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolios();
  }, []);

  if (loading) return null;

  return (
    <SectionContainer id="portfolio" className="bg-white py-24">
      <SectionHeading
        eyebrow="Our Work"
        title="Featured Portfolio Projects"
        description="A selection of our latest work demonstrating technical excellence and innovation."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {portfolios.map((p: any) => (
          <article
            key={p.id}
            className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col overflow-hidden"
          >
            <div className="mb-6 overflow-hidden rounded-2xl h-56 bg-slate-100">
              <img
                // Yahan 'p.image' use kiya kyunke API response mein yahi key hai
                src={`http://127.0.0.1:8000/storage/${p.image}`}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
                }}
              />
            </div>

            <div className="flex-grow">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-500">{p.category}</span>
              <h3 className="text-xl font-bold text-blue-950 mt-1 mb-2">{p.title}</h3>
            </div>

            <div className="pt-6 border-t border-slate-100">
               <a
                 href={p.project_url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider hover:text-blue-800 transition-colors"
               >
                 View Project <span className="ml-2">→</span>
               </a>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
