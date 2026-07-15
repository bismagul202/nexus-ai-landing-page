type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
          {eyebrow}
        </p>
      ) : null}
      
      <h2 className="text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
        {title}
      </h2>
      
      {description ? (
        <p className="mt-5 text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}