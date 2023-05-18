interface ScreenProps {
  content: string;
}

export default function Screen(props: ScreenProps) {
  return (
    <input
      className="text-lg bg-[#f7ebec] border-4 border-black shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] font-bold h-14 w-lg rounded-sm text-right pr-3"
      readOnly={true}
      value={props.content}
    />
  );
}
