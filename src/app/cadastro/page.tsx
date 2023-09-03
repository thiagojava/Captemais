'use client'

import Input from '@/components/Input'
import { CPFMask } from '@/utils/cpfmask'
import { zodResolver } from '@hookform/resolvers/zod'
import { cpf } from 'cpf-cnpj-validator'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const cadastroFormSchema = z.object({
  nome: z.string().nonempty('Nome é obrigatório!').min(3, 'Nome inválido!'),
  cpf: z.string().nonempty('CPF é obrigatório!').refine(cpf.isValid, 'CPF Inválido!'),
  email: z.string().nonempty('E-mail é obrigatório!').email('Formato de e-mail inválido!'),
})

type CadastroFormData = z.infer<typeof cadastroFormSchema>

export default function Apoio() {

  const { register, handleSubmit, formState: { errors }} = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroFormSchema)
  });


  function cadastrar(data: CadastroFormData) {
    /// FUNCAO DE CADASTRO DEPOIS DE TUDO VALIDADO
    console.log(data)
  }

  return (
    <div className="grid grid-cols-2 min-h-[1300px]">
      <div className="bg-[url('/images/apoio-bg.png')] bg-no-repeat bg-cover py-16 px-24">
        <div className="flex items-center">
          <a href="/" className="p-5 bg-primary bg-[url('/images/arrow.svg')] bg-no-repeat bg-center"></a>
          <a href="/" className="text-secondary text-base underline ml-4">Retornar</a>
        </div>
        <h1 className="text-[90px] leading-none font-title text-white mt-[167px]">Apoie um atleta de forma simples e direta</h1>
      </div>

      <section className="px-24 py-16">
        <h2 className='text-5xl font-title'>Insira seus dados básicos</h2>
        <p className="text-lg mt-2">Preencha corretamente os dados abaixo para que seu apoio seja cadastrado em nossa plataforma</p>

        <form onSubmit={handleSubmit(cadastrar)} className="mt-11 flex flex-col">
          <Input {...register('nome')} label="Nome" placeholder="Preencha" type="text" id="nome" errorMessage={errors.nome && errors.nome.message} />
          <Input {...register('cpf')} mask={CPFMask} label="CPF" type="text" placeholder="Preencha" id="cpf" errorMessage={errors.cpf && errors.cpf.message}/>
          <Input {...register('email')} label="E-mail" type="text" placeholder="Preencha" id="email" errorMessage={errors.email && errors.email.message}/>
          <button className="py-6 px-14 bg-primary text-secondary uppercase hover:bg-secondary hover:text-primary ease-in-out duration-200 w-fit mt-9">Avançar</button>
        </form>
      </section>
    </div>
  )
}
