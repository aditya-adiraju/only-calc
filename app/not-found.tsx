'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Error (): React.ReactElement {
  return (
        <>
            <Header />
            <main className="min-h-full">
                <div className="flex items-center justify-center place-content-center text-4xl min-h-[40rem]">
                    <text className="font-bold">Error 404 |&nbsp;</text>
                    <text>Page not found </text>
                </div>
            </main>
            <Footer />
        </>
  )
}
