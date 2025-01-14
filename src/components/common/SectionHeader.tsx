interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}