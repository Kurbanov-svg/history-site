const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-[#c9a14a]/30 text-gray-400">
      <div className="relative container py-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="mb-4 text-xl font-semibold tracking-wide text-[#fff]">
              Известные люди Кыргызстана
            </h2>
            <p className="text-sm leading-relaxed">
              Платформа, посвящённая выдающимся личностям Кыргызстана — их
              жизни, достижениям и вкладу в историю, культуру и общество.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Разделы</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#c9a14a] transition">Кино и театр</li>
              <li className="hover:text-[#c9a14a] transition">
                Исторические личности
              </li>
              <li className="hover:text-[#c9a14a] transition">
                Писатели и поэты
              </li>
              <li className="hover:text-[#c9a14a] transition">Спорт</li>
              <li className="hover:text-[#c9a14a] transition">Музыка</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">О проекте</h3>
            <p className="text-sm leading-relaxed">
              Проект создан с целью сохранить память о людях, которые внесли
              значительный вклад в развитие Кыргызстана, и передать их наследие
              будущим поколениям.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-[#c9a14a]/20 pt-6 text-sm md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Известные люди Кыргызстана</span>
          <span className="text-gray-500">
            Сделано с уважением к истории 🇰🇬
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
