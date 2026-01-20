const Register = () => {
  return (
    <section className="py-10 flex flex-col items-center">
      <div className="container">
        <div className="flex flex-col items-center gap-10 justify-center">
          <h1 className="text-[30px]">Регистрация аккаунта</h1>
          <div className="flex flex-col items-center gap-5 justify-center">
            <input
              style={{
                border: "2px solid white",
              }}
              className="text-[20px] py-1 px-3 rounded-[5px]"
              type="text"
              placeholder="Name..."
            />
            <input
              style={{
                border: "2px solid white",
              }}
              className="text-[20px] py-1 px-3 rounded-[5px]"
              type="email"
              placeholder="Email..."
            />
            <input
              style={{
                border: "2px solid white",
              }}
              className="text-[20px] py-1 px-3 rounded-[5px]"
              type="password"
              placeholder="Password..."
            />
            <button className="py-1.25 px-7.5 text-[20px] rounded-[5px] bg-[white] text-[black]">
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
