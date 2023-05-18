export default function Header() {
  return (
    <header className="drop-shadow-lg grid grid-cols-3 border-2 min-w-full">
      <div className="min-w-[33%] pt-8 pl-6 border-0">
        <a href="/">
          {" "}
          <img src="/logo.png" className="max-h-[10rem] " />
          {" "}
        </a>
      </div>
      <div className="min-w-[33%] flex place-content-center border-0">
        <a className="flex justify-center items-center" href="/">
          {" "}
          <img src="/banner.png" className="max-h-[10rem]" />
          {" "}
        </a>
      </div>
      <div className='min-w-[33%]'>

      </div>
    </header>
  );
}
