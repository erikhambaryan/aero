import { Plane } from 'lucide-react';

export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
      <div className="absolute transform -rotate-12">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex justify-between" style={{ marginTop: `${i * 8}rem` }}>
            {[...Array(8)].map((_, j) => (
              <Plane
                key={j}
                className="w-12 h-12 text-blue-200"
                style={{ marginLeft: `${j * 12}rem` }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}