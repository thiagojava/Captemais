import React from 'react'
import Image from 'next/image'

export default function Agradecimento() {
  return (
    <div className="flex h-screen items-center justify-center bg-primary flex-col">

      <div className="relative">
        <Image src="images/star-outline.png" width="304" height="304" alt="imagem de estrelas" className="absolulte animate-wiggle" />
        <Image src="images/trofeu.png" width="304" height="304" alt="imagem de trofeus" className="absolute top-0 animate-bounce" />
      </div>

      <h1 className="font-title text-[110px] text-white leading-none mt-7">Obrigado pelo apoio!!</h1>
      <p className="text-white text-center">Atletas como eu sonham em poder viver do esporte, saiba que <b>você é<br/>uma peça essencial</b> para que isso possa se tornar realidade!</p>
      <button className="py-6 px-14 bg-secondary text-primary uppercase border border-primary hover:bg-white hover:text-black mt-9 ease-in-out duration-200">finalizar pagamento</button>
    </div>
  )
}
