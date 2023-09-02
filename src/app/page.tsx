import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
        <header className="flex justify-between pt-6">
          <Image src="/images/logo.svg" width="132" height="57" alt="capte+ logo" />
          <nav className="flex gap-[76px] items-center text-white">
            <a href="" className="link link-underline">Sobre</a>
            <a href="" className="link link-underline">Posso participar?</a>
            <button className="bg-primary py-3 px-7 text-white hover:bg-secondary hover:text-black ease-in-out duration-200">Cadastrar-me</button>
          </nav>
        </header>

        <section className="mt-36 mb-48 max-w-xl">
          <h1 className="text-8xl font-title text-white">É possível viver do esporte!</h1>
          <p className="text-lg text-white mt-1.5 font-light">Tenha acesso a um sistema de financiamento único, que facilita
            o acesso a seus recurso e pode manter suas metas em dia.</p>
        <button className="text-secondary border border-secondary py-6 px-12 hover:bg-secondary hover:text-black mt-9 ease-in-out duration-200">Garantir minhas doações</button>
        </section>

      <section className="flex gap-[174px]">
        <Image src="/images/atletas.png" width="577" height="654" alt="atletas" className="mt-16" />
        <div>
          <Image src="/images/balls.svg" width="53" height="53" alt="detalhes bolinhas" className="mb-6 mt-24"/>
          <h2 className="font-title text-5xl mb-2<BS>1.5">Facilitamos o acesso a incentivos para o esporte</h2>
          <p className="text-lg mb-9">Cadastre seus dados bancários e receba os incentivos de forma simples e prática. Aceitamos os pagamentos via PIX, TED e DOC, trazendo praticidade para você se preocupar apenas com sua performance esportiva.</p>
          <button className="py-6 px-14 bg-primary text-secondary uppercase hover:bg-secondary hover:text-primary ease-in-out duration-200">eu quero ter acesso</button>
        </div>
      </section>

      <section className="relative text-center mb-28">
        <Image src="/images/star.svg" width="224" height="215" alt="star icon" className="absolute right-3 top-[-80px] -z-10" />
        <h3 className="text-[110px] font-title mt-24 leading-none ">Mantenha seu foco voltado <br/> para sua perfomance</h3>
        <p className="text-lg mt-1.5 max-w-3xl m-auto">Se você quer ter recursos recorrentes, conquistar sustentabilidade financeira e <b>VIVER DO ESPORTE</b> do jeito que sempre quis, entre agora para o Capte Mais clicando no botão abaixo</p>
        <button className="py-6 px-14 text-primary uppercase border border-primary hover:bg-primary hover:text-white mt-9 ease-in-out duration-200">criar minha conta</button>
      </section>
    </React.Fragment>
  )
}
