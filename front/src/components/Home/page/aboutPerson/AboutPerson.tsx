const AboutPerson = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white ">
          Спортсмены Кыргызстана
        </h1>
        <select
          style={{
            background: "black",
            padding: "10px",
            marginLeft: "840px",
            border: "1px solid white",
            borderRadius: "10px",
          }}
        >
          <option value="filter">Писатели</option>
          <option value="filter">Спортсмены</option>
          <option value="filter">Исторические личности</option>
          <option value="filter">Ислам</option>
          <option value="filter">Кино</option>
          <option value="filter">Музыка</option>
          <option value="filter">Искусство сцены</option>
          <option value="filter">Народные герои</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <div className="mx- max-w-[330px] overflow-hidden rounded-2xl shadow-lg group relative mt-[60px]">
          <img
            src="https://cdn-1.aki.kg/st_runews/.storage/runews31/images/fotoknovostyam/6f29b847eae7e9dab7c4e64ec4a2fc03.jpg"
            alt="Айсулуу Тыныбекова"
            className="h-[250px] w-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-/black/70 via-black/10 to-transparent" />

          <h2 className="text-xl font-semibold  bg-black px-3  rounded-full text-center text-white">
            Айсулуу Тыныбекова
          </h2>
          <span
            style={{
              fontSize: "10px",
              marginLeft: "30px",
              color: "white",
            }}
          >
            Чемпионка мира по вольной борьбе
          </span>
        </div>
        <div className="mx- max-w-[330px] overflow-hidden rounded-2xl shadow-lg group  mt-[60px]">
          <img
            src="https://cdn-1.aki.kg/cdn-st-0/qf2/7/en-789482.1723022446.b.jpg"
            alt="Айсулуу Тыныбекова"
            className="h-[250px] w-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-/black/70 via-black/10 to-transparent" />
          <h2 className="text-xl font-semibold  bg-black px-3 rounded-full text-center text-white">
            Акжол Махмудов
          </h2>
          <span
            style={{
              fontSize: "10px",
              marginLeft: "30px",
              color: "white",
            }}
          >
            Чемпионка мира по вольной борьбе
          </span>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default AboutPerson;
