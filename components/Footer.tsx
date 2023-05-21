import GitHubIcon from '@mui/icons-material/GitHub'

export default function Footer (): React.ReactElement {
  return (
    <footer className="bg-[#aC9fbb] fixed bottom-0 min-w-full pt-5 min-h-fit max-h-[20%]">
      <div className="text-lg text-black font-semibold flex justify-center place-items-center min-w-full pb-2">
        Made with ❤️ by Aditya Adiraju
      </div>
      <div className="flex justify-center min-w-full pb-5">
        <a href="https://github.com/aditya-adiraju" target="_blank" rel="noreferrer">
          <GitHubIcon className="scale-125" />
        </a>
      </div>
    </footer>
  )
}
