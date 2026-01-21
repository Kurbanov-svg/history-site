"use client";
import Link from "next/link";
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
      img: "/diniy.webp",
      desc: "Ислам баалуулуктарын жайылтып, адеп-ахлакка, биримдикке жана туура жолго чакырган диний аалымдар жана ишмерлер.",
    },
    {
      title: "Тарыхый инсандар",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Kurmandjan.jpg",
      img1: "https://gdb.rferl.org/7511F24B-26DD-4F75-A5B8-074288A90934_w408_r0_s.jpg",
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
    {
      title: "It Сфера",
      img: "https://i.vuzopedia.ru/storage/app/uploads/public/62e/810/826/62e8108260665367966566.jpg",
      desc: "Айти сфера (информационные технологии, IT",
    },
  ];

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="container">
        <div className="absolute top-0 left-0 w-full">
          <Image
            src="/etno.jpg"
            alt="Кыргызский орнамент"
            width={1200}
            height={60}
            className="w-full opacity-2"
            priority
          />
        </div>

        <div className="relative container mx-auto px-4">
          <h1
            style={{
              textAlign: "center",
              paddingBottom: "30px",
              fontSize: "40px",
              fontFamily: "-apple-system",
            }}
          >
            Известные люди Кыргызстана
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {box.map((el, index) => (
              <div
                key={index}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-black/80 border border-black shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,161,74,0.25)] hover:border-[#c9a14a]"
              >
                <div className="relative h-[190px] overflow-hidden">
                  <Link href="/aboutperson">
                    <Image
                      src={el.img}
                      alt={el.title}
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                    />
                  </Link>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex flex-col flex-grow p-6 text-center">
                  <h2 className="mb-3 text-xl font-semibold tracking-wide text-[]">
                    {el.title}
                  </h2>
                  <p className="flex-grow text-sm leading-relaxed text-gray-400">
                    {el.desc}
                  </p>
                  <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[#c9a14a]/40 to-transparent" />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 ring-1 ring-[#c9a14a]/40" />
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
      </div>
    </section>
  );
};

export default Welcome;
