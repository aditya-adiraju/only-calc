import CalculatorButton from "./CalculatorButton";

interface BasicButtonListProps {
    
}

export default function BasicButtonList(props: BasicButtonListProps) {
    return (
        <div className='grid grid-cols-3 gap-3 max-w-lg justify-center items-center'>
          <CalculatorButton value={7} />
          <CalculatorButton value={8} />
          <CalculatorButton value={9} />
          <CalculatorButton value={4} />
          <CalculatorButton value={5} />
          <CalculatorButton value={6} />
          <CalculatorButton value={1} />
          <CalculatorButton value={2} />
          <CalculatorButton value={3} />
          <CalculatorButton value={0} /> 
          <CalculatorButton value={"."} />   
          <CalculatorButton value={"="} />        
        </div>
    )
}