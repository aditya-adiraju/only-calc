import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer className="bg-[#aC9fbb] relative bottom-0 min-w-full pt-5 min-h-fit ">
      <div className="text-lg text-black flex justify-center place-items-center min-w-full pb-2">
        Made with ❤️ by Aditya Adiraju
      </div>
      <div className="flex justify-center min-w-full pb-5">
        <a href="https://github.com/aditya-adiraju" target="_blank">
          <GitHubIcon className="scale-125" />
        </a>
      </div>
    </footer>
  );
}
