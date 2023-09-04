import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <header className="flex flex-col items-center md:flex-row justify-between pt-6">
        <Image src="/images/logo.svg" width="132" height="57" alt="capte+ logo" />
        <nav className="flex flex-col gap-5 mt-8 sm:flex-row sm:gap-[76px] items-center text-white">
          <a href="" className="link link-underline">Sobre</a>
          <a href="" className="link link-underline">Posso participar?</a>
          <a href="/cadastro" className="bg-primary py-3 px-7 text-white hover:bg-secondary hover:text-black ease-in-out duration-200">Cadastrar-me</a>
        </nav>
      </header>

      <section className="px-8 sm:px-0 mt-12 sm:mt-36 sm:mb-48 max-w-xl">
        <h1 className="text-8xl font-title text-white">É possível viver do esporte!</h1>
        <p className="text-lg text-white mt-1.5 font-light">Tenha acesso a um sistema de financiamento único, que facilita
          o acesso a seus recurso e pode manter suas metas em dia.</p>
        <a href="/apoio" className="text-secondary border border-secondary py-6 px-12 hover:bg-secondary hover:text-black mt-9 ease-in-out duration-200 block w-fit">Garantir minhas doações</a>
      </section>

      <section className="flex flex-col sm:flex-row sm:gap-[174px]">
        <Image src="/images/atletas.png" width="577" height="654" alt="atletas" className="hidden sm:block sm:mt-16" />
        <div className="px-8 mb-28 sm:px-0 sm:mb-0">
          <Image src="/images/balls.svg" width="53" height="53" alt="detalhes bolinhas" className="mb-6 mt-24" />
          <h2 className="font-title text-5xl mb-2<BS>1.5">Facilitamos o acesso a incentivos para o esporte</h2>
          <p className="text-lg mb-9">Cadastre seus dados bancários e receba os incentivos de forma simples e prática. Aceitamos os pagamentos via PIX, TED e DOC, trazendo praticidade para você se preocupar apenas com sua performance esportiva.</p>
          <a href="/cadastro" className="py-6 px-14 bg-primary text-secondary uppercase hover:bg-secondary hover:text-primary ease-in-out duration-200">eu quero ter acesso</a>
        </div>
      </section>

      <section className="px-8 sm:px-0 relative text-center mb-28 sm:w-fit m-auto">
        <Image src="/images/star.svg" width="224"height="215" alt="star icon" className="absolute right-0 sm:right-[-100px] top-[-80px] -z-10" />
        <h3 className="text-8xl font-title mt-24 leading-none ">Mantenha seu foco voltado <br /> para sua perfomance</h3>
        <p className="text-lg mt-1.5 max-w-3xl m-auto">Se você quer ter recursos recorrentes, conquistar sustentabilidade financeira e <b>VIVER DO ESPORTE</b> do jeito que sempre quis, entre agora para o Capte Mais clicando no botão abaixo</p>
        <a href="/cadastro" className="py-6 px-14 text-primary uppercase border border-primary hover:bg-primary hover:text-white mt-9 ease-in-out duration-200 block w-fit m-auto">criar minha conta</a>
      </section>
    </React.Fragment>
  )
}
