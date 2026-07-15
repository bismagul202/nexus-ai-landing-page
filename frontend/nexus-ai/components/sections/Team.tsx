"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/team");
        setTeamMembers(res.data.data || []);
      } catch (error) {
        console.error("Error fetching team:", error);
      }
    };
    fetchTeam();
  }, []);

  return (
    <SectionContainer id="team" className="bg-slate-50 py-24">
      <SectionHeading
        eyebrow="Our Experts"
        title="Meet the minds behind the code"
        description="A passionate team dedicated to building seamless AI-driven experiences."
      />
      
      {/* Grid Layout update: Desktop pe 3 columns, mobile pe 1 */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {teamMembers.map((member: any) => (
          <div 
            key={member.id} 
            className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
          >
            {/* Stylish Image Container */}
            <div className="relative w-24 h-24 mb-6 mx-auto">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full rounded-full object-cover border-4 border-slate-50 group-hover:border-blue-50 transition-colors"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-slate-200 group-hover:ring-blue-500 transition-all"></div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-blue-950 group-hover:text-blue-700 transition-colors">
                {member.name}
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mt-1 mb-4">
                {member.designation}
              </p>
              
              <a 
                href={member.linkedin_url} 
                target="_blank" 
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-blue-600 transition-colors"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}