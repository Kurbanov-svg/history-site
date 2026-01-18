import Image from "next/image";

const Welcome = () => {
  const box = [
    {
      title: "Кино дүйнөсү",
      img: "/kyrgyz1.svg",
      desc: "Кыргыз кино өнөрүнүн өсүшүнө салым кошкон режиссёрлор, актёрлор жана чыгармачыл инсандар.",
    },
    {
      title: "Диний инсандар",
      img: "/диний.htm",
      desc: "Ислам баалуулуктарын жайылтып, адеп-ахлакка, биримдикке жана туура жолго чакырган диний аалымдар жана ишмерлер.",
    },
    {
      title: "Тарыхый инсандар",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Kurmandjan.jpg",
      desc: "Кыргыз элинин тарыхында чоң из калтырган инсандар.",
    },
    {
      title: "Жазуучулар",
      img: "/writer.jpg",
      desc: "Кыргыз адабиятын өнүктүргөн улуу калемгерлер.",
    },
    {
      title: "Музыка өнөрү",
      img: "https://i.ytimg.com/vi/AO5g9lwiDCY/maxresdefault.jpg",
      desc: "Кыргыз музыка өнөрүнө салым кошкон инсандар.",
    },
    {
      title: "Улуттук баатырлар",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_MZ-JNmsGYYOQjKqrQaKDaQCZo9jctsnnQ&s",
      desc: "Эрдиги жана мекенчилдиги менен эл эсинде калган каармандар.",
    },
    {
      title: "Спорт жылдыздары",
      img: "https://gdb.rferl.org/01000000-0a00-0242-5239-08dcaa2779f2_w1080_h608_s.jpg",
      desc: "Кыргызстанды дүйнөгө тааныткан спортчулар.",
    },
    {
      title: "Сахна өнөрү",
      img: "https://data.kaktus.media/image/big/2023-11-09_11-52-45_602771.jpg",
      desc: "Кыргыз сахна өнөрүнүн өкүлдөрү.",
    },
  ];

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full">
        <Image
          src="/etno.jpg"
          alt="Кыргызский орнамент"
          width={1200}
          height={60}
          className="w-full opacity-10"
          priority
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {box.map((el, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl bg-black/90 border-2 border-[gray]/60 p-5 shadow-lg transition-all duration-300 hover:border-[#c9a14a]  hover:shadow-2xl"
            >
              <div className="mb-4 h-[180px] overflow-hidden rounded-lg border border-[gray]/40 relative">
                <Image
                  src={el.img}
                  alt={el.title}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h2 className="mb-3 text-center text-xl font-semibold text-gray">
                {el.title}
              </h2>

              <p className="flex-grow text-center text-sm text-gray-400">
                {el.desc}
              </p>

              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-[#8b0000] to-transparent" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full rotate-180">
        <Image
          src="/etno.jpg"
          alt="Кыргызский орнамент"
          width={1200}
          height={60}
          className="w-full opacity-5"
        />
      </div>
    </section>
  );
};

export default Welcome;
