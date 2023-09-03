'use client'
import './globals.css'
import { usePathname } from 'next/navigation'
import { Exo } from 'next/font/google'

const exo = Exo({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname();

  return (
    <html lang="pt-BR" className={exo.className}>
      <head>
        <title>Capte+</title>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={pathName === '/agradecimento' ? 'bg-primary' : 'bg-white' }>
        {pathName.search('/atleta') !== -1 && <div className="bg-primary block h-[136px] absolute min-w-full -z-10 top-[40px]"></div> }
        {pathName === '/' && (
          <div className="bg-[url('/images/banner.png')] bg-black bg-no-repeat bg-[center_top] min-h-[755px] block absolute -z-10 min-w-full"></div>
        )}
        <main className="container max-w-7xl m-auto">
          {children}
        </main>
        <footer className="h-12 bg-primary flex justify-center items-center">
          <p className="text-center text-white text-base">Capte+ - © 2023 All Rights Reserved | Feito com <span className="text-red-700">♥</span> pela <a href="">Dutra.io</a></p>
        </footer>
      </body>
    </html>
  )
}
