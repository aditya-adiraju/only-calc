'use client';
import Image from 'next/image'
import styles from './page.module.css'
import CalculatorButton from '@/components/CalculatorButton';
import BasicButtonList from '@/components/BasicButtonList';

export default function Home() {
  return (
    <>
      <h1 className='min-h-5 text-3xl fill-slate-300 border-black border-size flex justify-center items-center'> Hello world</h1>
      <div className='flex justify-center items-center'>
        <BasicButtonList />
      </div>
    </>
  )
}
