interface CalculatorButtonProps {
  className?: string;
  value: number | string;
  onClick: () => void;
}

export default function CalculatorButton(props: CalculatorButtonProps) {
  function handleKeyPress(event: React.KeyboardEvent): any {
    console.log(event.key + " key pressed")
    console.log(props.value)
    if (event.key === props.value) {
      console.log("TRIGGERED ONCLICK")
      props.onClick();
    }
  }

  return (
    <>
      <button
        className={
          !props.className
            ? "bg-[#ddbdd5] hover:bg-[#bb9bc3] border-2 border-[#3f2945] text-white font-bold px-4 py-4 rounded-lg"
            : "hover:bg-[#3f2945] border-2 border-[#3f2945] text-white font-bold px-4 py-4 rounded-lg " +
              props.className
        }
        onClick={props.onClick}
        onKeyDown={handleKeyPress}
      >
        {props.value}
      </button>
    </>
  );
}
