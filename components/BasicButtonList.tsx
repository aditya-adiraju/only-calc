import CalculatorButton from "./CalculatorButton";

interface BasicButtonListProps {

}

export default function BasicButtonList(props: BasicButtonListProps) {
    return (
        <div className='grid grid-cols-4 gap-3 max-w-md justify-center items-center'>
          <CalculatorButton value={"C"} />
          <CalculatorButton value={"⌫"} />
          <CalculatorButton value={"%"} />
          <CalculatorButton value={"X"} /> 
          <CalculatorButton value={7} />
          <CalculatorButton value={8} />
          <CalculatorButton value={9} />
          <CalculatorButton value={"X"} /> 
          <CalculatorButton value={4} />
          <CalculatorButton value={5} />
          <CalculatorButton value={6} />
          <CalculatorButton value={"-"} /> 
          <CalculatorButton value={1} />
          <CalculatorButton value={2} />
          <CalculatorButton value={3} />
          <CalculatorButton value={"+"} /> 
          <CalculatorButton value={0} /> 
          <CalculatorButton value={"."} />   
          <CalculatorButton value={"="} />        
        </div>
    )
}