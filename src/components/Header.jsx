const Header = () => {
  return (
    <nav className="flex justify-between items-center p-6 text-white bg-[#1A0B2E] px-16 ">
      <div className="text-2xl font-mono">Dushyant's Portfolio</div>
      <ul className="flex gap-10 text-slate-100 text-lg">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
