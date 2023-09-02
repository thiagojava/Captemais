import Input from '@/components/Input'
import React from 'react'

export default function Apoio() {
  return (
    <div className="grid grid-cols-2 min-h-[1300px]">
      <div className="bg-[url('/images/apoio-bg.png')] bg-no-repeat bg-cover py-16 px-24">
        <div className="flex items-center">
          <button className="p-5 bg-primary bg-[url('/images/arrow.svg')] bg-no-repeat bg-center"></button>
          <a href="/" className="text-secondary text-base underline ml-4">Retornar</a>
        </div>
        <h1 className="text-[90px] leading-none font-title text-white mt-[167px]">Apoie um atleta de forma simples e direta</h1>
      </div>

      <section className="px-24 py-16">
        <h2 className='text-5xl font-title'>Insira seus dados básicos</h2>
        <p className="text-lg mt-2">Preencha corretamente os dados abaixo para que seu apoio seja cadastrado em nossa plataforma</p>

        <form action="" className="mt-11 flex flex-col">
          <Input label="Nome" placeholder="Preencha" type="text" id="nome" />
          <Input label="CPF" type="text" placeholder="Preencha" id="cpf" />
          <Input label="E-mail" type="text" placeholder="Preencha" id="email" />
          <button className="py-6 px-14 bg-primary text-secondary uppercase hover:bg-secondary hover:text-primary ease-in-out duration-200 w-fit mt-9">Avançar</button>
        </form>
      </section>
    </div>
  )
}
