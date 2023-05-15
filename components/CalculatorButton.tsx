
interface CalculatorButtonProps {
    value: number | string
}

export default function CalculatorButton(props: CalculatorButtonProps) {
    return (
        <>
            <button
                className="bg-gray-900 hover:bg-gray-700 text-white font-bold px-4 py-4 rounded-lg  "
                onClick={() => console.log(props.value)}
            >
                {props.value}
            </button>
        </>
    )
}