'use client';
import CenterSection from "@/components/CenterSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Screen from "@/components/Screen";

export default function Scientific() {


    const doNothing = () => {} 
  return (
    <>
      <Header />
      <main>
        <CenterSection>
            <Screen content={''} onChange={doNothing} onKeyDown={doNothing} />
        </CenterSection>
      </main>
      <Footer />
    </>
  );
}
