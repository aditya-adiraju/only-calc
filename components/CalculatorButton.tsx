
interface CalculatorButtonProps {
    className?: string;
    value: number | string;
    onClick: () => void;
}

export default function CalculatorButton(props: CalculatorButtonProps) {
    return (
        <>
            <button
                className= {"bg-gray-900 hover:bg-gray-700 text-white font-bold px-4 py-4 rounded-lg " + props.className }
                onClick={props.onClick}
            >
                {props.value}
            </button>
        </>
    )
}