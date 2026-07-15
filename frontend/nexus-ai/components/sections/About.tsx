import axios from "axios";

export default async function About() {
  let aboutData = null;

  try {
    const res = await axios.get("http://127.0.0.1:8000/api/about");
    aboutData = res.data.data;
  } catch (error) {
    console.error("Error fetching about data:", error);
  }

  if (!aboutData) return null;

  return (
    <section id="about" className="bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side: Styled Container with 3D Effect */}
          <div className="relative h-[600px] w-full">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 scale-95 opacity-20" />
            
            {/* Main Image */}
            <img 
              src={aboutData.image_url} 
              alt={aboutData.title} 
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]" 
            />
          </div>

          {/* Text Side: Minimalist Typography */}
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Our Story</h2>
              <h3 className="text-4xl font-black text-blue-950 leading-tight">{aboutData.title}</h3>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              {aboutData.body}
            </p>

            <div className="space-y-8">
              {/* Mission */}
              <div className="border-l-4 border-blue-600 pl-6 py-1">
                <h4 className="text-blue-950 font-bold mb-1">Our Mission</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{aboutData.mission}</p>
              </div>
              
              {/* Vision */}
              <div className="border-l-4 border-slate-300 pl-6 py-1">
                <h4 className="text-blue-950 font-bold mb-1">Our Vision</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{aboutData.vision}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}