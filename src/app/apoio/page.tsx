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
        <h1 className="text-[90px] leading-none font-title text-white mt-[167px]">Só mais esse passo para iniciarmos sua campanha de financiamento</h1>
      </div>

      <section className="px-24 py-16">
        <h2 className='text-5xl font-title'>Insira seus dados de contato</h2>
        <p className="text-lg mt-2">Preencha corretamente os dados abaixo para que sua<br /> página de apoio seja iniciada.</p>

        <form action="" className="mt-11 flex flex-col">
          <div className="text-[#00000099] flex gap-5 items-center">
            <label htmlFor="arquivo" className="block border border-black w-[116px] h-[116px] cursor-pointer bg-[url('/images/plus.svg')] bg-no-repeat bg-center flex-shrink-0">
            <input id="arquivo" type="file" />
          </label>
          Clique no quadrado ao lado para inserir uma foto da organização ou atleta beneficiado
          </div>
          <Input label="Nome do(a) atleta *" placeholder="Preencha" type="text" id="nome-atleta" />
          <Input label="CPF" type="text" placeholder="Preencha" id="cpf" />
          <Input label="E-mail" type="text" placeholder="Preencha" id="email" />
          <Input label="Nome do projeto" placeholder="Preencha" type="text" id="nome-do-projeto" />
          <Input label="Chave Pix" placeholder="Preencha" type="text" id="chave-pix" />

          <label htmlFor="descricao" className="flex flex-col mt-7 text-[#00000099]">
            Descrição
            <textarea name="descrica" id="descricao" cols={30} rows={10} className="border border-black rounded-md py-4 px-4 mt-2" placeholder="Insira uma descrição direto ao ponto, com detalhes de qual finalidade e a meta do atleta"></textarea>
          </label>

          <button className="py-6 px-14 bg-primary text-secondary uppercase hover:bg-secondary hover:text-primary ease-in-out duration-200 w-fit mt-9">Criar meu financiamento</button>
        </form>
      </section>
    </div>
  )
}
