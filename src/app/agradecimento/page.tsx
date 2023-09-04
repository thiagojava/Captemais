import React from 'react'
import Image from 'next/image'

export default function Agradecimento() {
  return (
        <main className="container max-w-7xl m-auto">
    <div className="flex h-screen items-center justify-center bg-primary flex-col px-8 sm:px-0 text-center">

      <div className="relative sm:mt-24 w-[200px] sm:w-[300px] sm:h-[300px] h-[200px]">
        <Image src="images/star-outline.png" fill alt="imagem de estrelas" className="absolulte animate-wiggle" />
        <Image src="images/trofeu.png" fill alt="imagem de trofeus" className="absolute top-0 animate-bounce" />
      </div>

      <h1 className="font-title text-7xl sm:text-[110px] text-white leading-none mt-7">Obrigado pelo apoio!!</h1>
      <p className="text-white text-center">Atletas como eu sonham em poder viver do esporte, saiba que <b>você é<br/>uma peça essencial</b> para que isso possa se tornar realidade!</p>
      <a href="/" className="py-6 px-14 bg-secondary text-primary uppercase border border-primary hover:bg-white hover:text-black mt-9 ease-in-out duration-200">finalizar pagamento</a>
    </div>
    </main>
  )
}
