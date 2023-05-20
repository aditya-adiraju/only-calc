"use client";
import BasicButtonList from "@/components/BasicButtonList";
import CenterSection from "@/components/CenterSection";
import Screen from "@/components/Screen";
import React, { useState } from "react";
import { evaluate } from "mathjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [calculation, setCalculation] = useState("");

  function addCalculation(calc: string): void {
    if (calculation === "SYNTAX ERROR") setCalculation((prev) => "");
    setCalculation((prevCalculation) => prevCalculation + calc);
  }

  function clearCalculation(): void {
    setCalculation("");
  }

  function eraseLastCalculation(): void {
    if (
      calculation === "SYNTAX ERROR" ||
      calculation === "Infinity" ||
      !(typeof calculation === "string")
    ) {
      clearCalculation();
    } else {
      setCalculation(calculation.substring(0, calculation.length - 1));
    }
  }

  function parseCalculation(): void {
    let result: string;
    try {
      result = evaluate(calculation);
    } catch (e) {
      result = "SYNTAX ERROR";
    }
    setCalculation(result);
  }

  function handleInputChange(event: React.ChangeEvent): void {
    const target = event.target as HTMLInputElement;
    setCalculation(target.value);
  }

  function handleKeyPress(event: React.KeyboardEvent) : void {
    switch(event.key) {
      case "Enter":
        event.preventDefault();
        parseCalculation();
        break;
      case "Delete":
        event.preventDefault();
        clearCalculation();  
        break;
      case "Backspace":
        event.preventDefault();
        eraseLastCalculation();
        break;
    }
  }

  return (
    <div className="min-h-full">
      <Header />
      <main className="min-h-[70%]">
        <CenterSection>
          <Screen content={calculation} onChange={handleInputChange} onKeyDown={handleKeyPress} />
          <BasicButtonList
            calculation={calculation}
            addCalculation={addCalculation}
            clearCalculation={clearCalculation}
            eraseLastCalculation={eraseLastCalculation}
            parseCalculation={parseCalculation}
          />
        </CenterSection>
        <br />
        <br />
      </main>
      <Footer />
    </div>
  );
}
