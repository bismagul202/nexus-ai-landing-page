type SectionContainerProps = {
  id?: string;
  children: React.ReactNode;
  className?: string; // Added to allow custom overrides per section
};

export default function SectionContainer({ id, children, className }: SectionContainerProps) {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 sm:px-10 lg:px-16 ${className || ""}`}
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}