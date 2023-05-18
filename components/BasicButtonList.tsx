import { FunctionBody } from "typescript";
import CalculatorButton from "./CalculatorButton";

interface BasicButtonListProps {
  calculation: string | number;
  addCalculation: (calc: string) => void;
  clearCalculation: () => void;
  eraseLastCalculation: () => void;
  parseCalculation: () => void;
}

export default function BasicButtonList(props: BasicButtonListProps) {
  return (
    <div className="grid grid-cols-4 gap-3 max-w-md justify-center items-center">
      <CalculatorButton
        className="bg-[#ac9fbb]"
        onClick={props.clearCalculation}
        value={"C"}
      />
      <CalculatorButton onClick={props.eraseLastCalculation} value={"⌫"} />
      <CalculatorButton onClick={() => props.addCalculation("%")} value={"%"} />
      <CalculatorButton onClick={() => props.addCalculation("*")} value={"X"} />
      <CalculatorButton onClick={() => props.addCalculation("7")} value={7} />
      <CalculatorButton onClick={() => props.addCalculation("8")} value={8} />
      <CalculatorButton onClick={() => props.addCalculation("9")} value={9} />
      <CalculatorButton onClick={() => props.addCalculation("/")} value={"/"} />
      <CalculatorButton onClick={() => props.addCalculation("4")} value={4} />
      <CalculatorButton onClick={() => props.addCalculation("5")} value={5} />
      <CalculatorButton onClick={() => props.addCalculation("6")} value={6} />
      <CalculatorButton onClick={() => props.addCalculation("-")} value={"-"} />
      <CalculatorButton onClick={() => props.addCalculation("1")} value={1} />
      <CalculatorButton onClick={() => props.addCalculation("2")} value={2} />
      <CalculatorButton onClick={() => props.addCalculation("3")} value={3} />
      <CalculatorButton onClick={() => props.addCalculation("+")} value={"+"} />
      <CalculatorButton onClick={() => props.addCalculation("0")} value={0} />
      <CalculatorButton onClick={() => props.addCalculation(".")} value={"."} />
      <CalculatorButton
        onClick={props.parseCalculation}
        className="bg-[#ac9fbb] col-span-2"
        value={"="}
      />
    </div>
  );
}
