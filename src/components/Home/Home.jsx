import RegisterButton from "../Register/RegisterButton";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white font-bold">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500 via-black to-green-500 opacity-20 blur-lg"></div>
        <div className="relative items-center">
          <h1 className="text-8xl font-extrabold font-sans tracking-wide">CODE</h1>
          <h2 className="text-8xl font-light tracking-wide text-green-500">GREEN</h2>
        </div>
        <RegisterButton />
      </div>
    </div>
  );
};

export default Home;