const HeroSection = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center min-h-[20vh] px-4 pt-24 pb-8 text-left">
      <div className="relative">
        <p className="text-sm mb-2 text-purple-300">
          Hello! I am <span className="text-purple-500">Dushyant Mahto</span>
        </p>
        <img
          src="src/assets/Arrow.png"
          className="absolute -bottom-23 -left-37 w-40"
        />
      </div>

      <div className="flex py-8 gap-24">
        <div className="relative">
          <div className="rounded-full w-32 h-32 bg-purple-700 blur-2xl absolute z-0"></div>
          <img
            src="src\assets\Me.png"
            alt="emoji"
            className="w-42 z-10 relative"
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
