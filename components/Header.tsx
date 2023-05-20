import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="drop-shadow-lg inline-grid grid-cols-3 ml-auto border-2 min-w-full max-h-[8rem]">
      <div className="pt-8 pl-6 border-0">
        <a href="/">
          {" "}
          <img src="/logo.png" className="max-h-[6rem] " />{" "}
        </a>
      </div>
      <div className="flex place-content-center border-0">
        <a className="flex justify-center items-center no-shadow" href="/">
          {" "}
          <img src="/banner.png" className="max-h-[6rem]" />{" "}
        </a>
      </div>
      <div className="place-content-center border-0 flex">
        <Navbar />
      </div>
    </header>
  );
}
