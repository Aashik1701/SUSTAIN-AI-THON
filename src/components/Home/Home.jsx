
const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white font-bold">
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 opacity-20 blur-lg"></div>
        <div className="relative">
          <h1 className="text-8xl font-extrabold tracking-wide">CODE</h1>
          <h2 className="text-7xl font-extrabold tracking-wide text-green-500">GREEN</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;