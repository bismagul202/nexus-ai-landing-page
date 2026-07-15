import Button from "@/components/ui/Button";
import type { SectionId } from "@/types/sections";
import axios from "axios";

const heroId: SectionId = "hero";

export default async function Hero() {
  let heroData = null;

  try {
    // Laravel API se data fetch kar rahe hain
    const res = await axios.get("http://127.0.0.1:8000/api/heroes");
    heroData = res.data.data[0]; // Pehla active hero record le rahe hain
  } catch (error) {
    console.error("Error fetching hero data:", error);
  }

  // Fallback UI agar API response na aaye
  if (!heroData) return null;

  return (
    <section 
      id={heroId} 
      className="relative overflow-hidden py-24 px-6 sm:px-10 lg:px-16 min-h-[80vh] flex items-center"
      style={heroData.image_url ? { backgroundImage: `url(${heroData.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />

      {/* Main Content Wrapper - Text directly on image */}
      <div className="relative z-10 mx-auto max-w-6xl w-full">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-300 drop-shadow-lg">
            AI-Driven Landing Experience
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            {heroData.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-100 sm:text-xl leading-relaxed drop-shadow-lg">
            {heroData.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row relative z-20">
          <Button 
            variant="primary" 
            href="#contact" 
            className="bg-blue-600 px-8 py-3 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700"
          >
            Start a Project
          </Button>
          <Button 
            variant="secondary" 
            href="#about"
            className="border-2 border-white px-8 py-3 text-blue hover:bg-white hover:text-blue-600"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}