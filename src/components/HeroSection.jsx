const HeroSection = () => {
  return (
    <div
      className="text-white flex flex-col items-center justify-center min-h-screen px-4 py-4 text-center md:text-left"
      id="home"
    >
      <div className="relative mb-4">
        <p className="text-sm mb-2 text-purple-300">
          Hello! I am <span className="text-purple-500">Dushyant Mahto</span>
        </p>
        <img
          src="./assets/Arrow.png"
          className="hidden md:block absolute -bottom-23 -left-37 w-40"
          alt="Arrow"
        />
      </div>

      <div className="flex flex-col md:flex-row py-8 gap-12 md:gap-24 items-center">
        <div className="relative">
          <div className="rounded-full w-40 h-40 bg-purple-700 blur-2xl absolute z-0"></div>
          <img
            src="./assets/memoji.png"
            alt="emoji"
            className="w-45 z-10 relative"
          />
        </div>
        <div>
          <h2 className="text-xl mt-4 font-light">A Designer who</h2>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Judges a book by its{" "}
            <span className=" text-purple-400">cover...</span>
          </h1>
          <p className="text-xs mt-5">
            Because if the cover doesn't impress you what else can?
          </p>
        </div>
      </div>

      <h2 className="text-3xl mt-6 font-bold">
        I'm a Full Stack Developer.<span className="animate-pulse">|</span>
      </h2>
      <p className="mt-2 text-base">
        Currently, I’m an engineering graduate with a passion for{" "}
        <span className="text-blue-400">software & systems.</span>
      </p>

      <p className="mt-6 max-w-2xl font-medium">
        I’m a full-stack developer who speaks fluent React-ish, Node-lingo, and
        a sprinkle of CSS sorcery. I believe good design is invisible—but the
        impact shouldn’t be.
      </p>
    </div>
  );
};

export default HeroSection;
