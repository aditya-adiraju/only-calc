'use client';
import BasicButtonList from '@/components/BasicButtonList';
import { CenterSection } from '@/components/CenterSection';
import Screen from '@/components/Screen';


export default function Home() {
  return (
    <>
      <CenterSection>
        <Screen content="Sample text" />
        <BasicButtonList />
      </CenterSection>
    </>
  )
}
