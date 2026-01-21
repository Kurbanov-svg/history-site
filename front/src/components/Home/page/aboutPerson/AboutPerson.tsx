// "use client";
import Link from "next/link";

const AboutPerson = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex  items-center justify-center gap-6 pb-8">
          <h1 className="text-4xl font-bold text-white">
            Спортсмены Кыргызстана 🇰🇬
          </h1>
          <select className="rounded-lg border border-white/30 bg-black px-4 py-2 text-white outline-none transition hover:border-white">
            <option>Көк-бөрү</option>
            <option>Пулевая стрельба</option>
            <option>Альпинизм</option>
            <option>Волейбол</option>
            <option>Футбол </option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-900 shadow-lg">
            <Link href="/detail">
              <img
                src="https://cdn-1.aki.kg/st_runews/.storage/runews31/images/fotoknovostyam/6f29b847eae7e9dab7c4e64ec4a2fc03.jpg"
                alt="Айсулуу Тыныбекова"
                className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-lg font-semibold text-white">
                Айсулуу Тыныбекова
              </h2>
              <p className="text-sm text-white/70">
                Чемпионка мира по вольной борьбе
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-900 shadow-lg">
            <img
              src="https://cdn-1.aki.kg/cdn-st-0/qf2/7/en-789482.1723022446.b.jpg"
              alt="Акжол Махмудов"
              className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-lg font-semibold text-white">
                Акжол Махмудов
              </h2>
              <p className="text-sm text-white/70">
                Чемпион мира по греко-римской борьбе
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPerson;
