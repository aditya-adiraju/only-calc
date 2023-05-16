'use client';
import BasicButtonList from '@/components/BasicButtonList';
import { CenterSection } from '@/components/CenterSection';
import Screen from '@/components/Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

export default function Home() {
  const [calculation, setCalculation] = useState("1+1");
  

  function addCalculation(calc: string) : void {
      if (calculation === 'SYNTAX ERROR') setCalculation(prev => '');
      setCalculation(prevCalculation => prevCalculation + calc);
  }

  function clearCalculation() : void {
      setCalculation('');
  }

  function eraseLastCalculation() : void {
      clearCalculation();
  }

  function parseCalculation() : void {
    let result: string;
    try {
      result = evaluate(calculation);
    } catch(e) {
      result = "SYNTAX ERROR"
    }
    setCalculation(result);
  }

  return (    
    <>
      <CenterSection>
        <Screen content={calculation} />
        <BasicButtonList calculation={calculation} addCalculation={addCalculation} clearCalculation={clearCalculation} eraseLastCalculation={eraseLastCalculation} parseCalculation={parseCalculation}/>
      </CenterSection>
    </>
  )
}
