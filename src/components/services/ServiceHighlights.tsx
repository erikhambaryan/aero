import image1 from '../services/image1.jpg';
import image2 from '../services/image2.png';

export function ServiceHighlights() {
  const services = [
    {
      // Описание удалено
      image: image1,
    },
    {
      // Описание удалено
      image: image2,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              {/* Контейнер изображения */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] mb-6 overflow-hidden rounded-lg">
                {/* Изображение */}
                <img
                  src={service.image}
                  alt={`Service ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Если требуется описание, добавьте сюда */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}