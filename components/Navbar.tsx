function NavbarElement(props: {
  className?: string;
  children: any;
  href: string;
}) {
  return (
    <a className="flex" href={props.href}>
      <div className={props.className + " flex flex-col justify-center p-5"}>
        <div className="hover:text-[#db187699]">{props.children}</div>
      </div>
    </a>
  );
}

export default function Navbar() {
  return (
    <>
      <nav className="flex text-brown font-semibold">
        <div className="ml-auto text-lg h-auto flex pr-5">
          <NavbarElement href="/">Basic</NavbarElement>
          <NavbarElement href="/scientific">Scientific</NavbarElement>
          <NavbarElement href="/programming">Programming</NavbarElement>
          <NavbarElement href="/graphing">Graphing</NavbarElement>
        </div>
      </nav>
    </>
  );
}
