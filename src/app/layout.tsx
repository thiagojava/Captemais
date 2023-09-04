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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={pathName === '/agradecimento' ? 'bg-primary' : 'bg-white'}>
        {pathName.search('/atleta') !== -1 && <div className="bg-primary block h-[136px] absolute min-w-full -z-10 top-[40px]"></div>}
        {pathName === '/' && (
          <div className="bg-[url('/images/banner.png')] bg-right-top bg-cover bg-black sm:bg-[center_top] min-h-[860px] sm:min-h-[755px] block absolute -z-10 min-w-full"></div>
        )}
        {children}
        <footer className="h-12 bg-primary flex justify-center items-center">
          <p className="text-center text-white text-sm px-4 sm:px-0 sm:text-base">Capte+ - © 2023 All Rights Reserved | Feito com <span className="text-red-700">♥</span> pela <a href="">Dutra.io</a></p>
        </footer>
      </body>
    </html>
  )
}
