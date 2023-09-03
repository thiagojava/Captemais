'use client'
import Input from '@/components/Input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { twMerge } from 'tailwind-merge'
import { cpf } from 'cpf-cnpj-validator'
import Image from 'next/image'
import { CPFMask } from '@/utils/cpfmask'

const apoiarFormSchema = z.object({
  arquivo: z
    .any(),
  nomeAtleta: z.string().nonempty('Nome do atleta é obrigatório!').min(3, 'Nome inválido!'),
  cpf: z.string().nonempty('CPF é obrigatório!').refine(cpf.isValid, 'CPF Inválido!'),
  email: z.string().nonempty('E-mail é obrigatório!').email('Formato de e-mail inválido!'),
  nomeProjeto: z.string().nonempty('Nome do projeto é obrigatório!').min(4, 'Nome do projeto precisa ter no minimo 4 letras!'),
  chavePix: z.string().nonempty('Chave pix é obrigatório!'),
  descricao: z.string().nonempty('Descricão é obrigatório.').min(5, 'Coloque uma descrição de no minímo de 5 caracteres!')
})

type ApoioFormData = z.infer<typeof apoiarFormSchema>

export default function Apoio() {
  const [image, setImage] = React.useState('/images/upload.png');
  const { register, handleSubmit, formState: { errors }} = useForm<ApoioFormData>({
    resolver: zodResolver(apoiarFormSchema)
  });

  function apoiar(data: ApoioFormData) {
    /// FUNCAO QUE CHAMA SUBMIT DO FORM DEPOIS DE VALIDADO TUDO CERTO!
    console.log(data)
  }

  return (
    <div className="grid grid-cols-2 min-h-[1300px]">
      <div className="bg-[url('/images/apoio-bg.png')] bg-center bg-no-repeat bg-cover py-16 px-24">
        <div className="flex items-center">
          <a href="/" className="p-5 bg-primary bg-[url('/images/arrow.svg')] bg-no-repeat bg-center"></a>
          <a href="/" className="text-secondary text-base underline ml-4">Retornar</a>
        </div>
        <h1 className="text-[90px] leading-none font-title text-white mt-[167px]">Só mais esse passo para iniciarmos sua campanha de financiamento</h1>
      </div>

      <section className="px-24 py-16">
        <h2 className='text-5xl font-title'>Insira seus dados de contato</h2>
        <p className="text-lg mt-2">Preencha corretamente os dados abaixo para que sua<br /> página de apoio seja iniciada.</p>

        <form onSubmit={handleSubmit(apoiar)} className="mt-11 flex flex-col">
          <div className="text-[#00000099] flex gap-5 items-center mb-8">
            <label htmlFor="arquivo" className="block border border-black w-[116px] h-[116px] cursor-pointer bg-center flex-shrink-0">
            <Image src={image} width={116} height={116} alt="minha imagem" /> 
              <input {...register('arquivo')} onChange={(e) => e.target.files && setImage(URL.createObjectURL(e.target.files[0]))} id="arquivo" type="file" />
            </label>
            Clique no quadrado ao lado para inserir uma foto da organização ou atleta beneficiado
          </div>

          <Input {...register('nomeAtleta')} label="Nome do(a) atleta *" placeholder="Preencha" type="text" id="nome-atleta" errorMessage={errors.nomeAtleta && errors.nomeAtleta.message} />
          <Input {...register('cpf')} mask={CPFMask} label="CPF *" type="text" placeholder="Preencha" id="cpf" errorMessage={errors.cpf && errors.cpf.message} />
          <Input {...register('email')} label="E-mail *" type="text" placeholder="Preencha" id="email" errorMessage={errors.email && errors.email.message} />
          <Input {...register('nomeProjeto')} label="Nome do projeto *" placeholder="Preencha" type="text" id="nome-do-projeto" errorMessage={errors.nomeProjeto && errors.nomeProjeto.message} />
          <Input {...register('chavePix')} label="Chave Pix *" placeholder="Preencha" type="text" id="chave-pix" errorMessage={errors.chavePix && errors.chavePix.message} />

          <div className="flex flex-col h-[200px]">
            <label htmlFor="descricao" className="flex flex-col text-[#00000099]">
              Descrição *
              <textarea {...register('descricao')} id="descricao" cols={30} rows={5} className={twMerge("border border-black rounded-md py-4 px-4 mt-2", errors.descricao?.message && 'border-red-500 focus:outline-red-500')} placeholder="Insira uma descrição direto ao ponto, com detalhes de qual finalidade e a meta do atleta"></textarea>
            </label>
            <span className="mt-2 text-red-500 text-sm">{errors.descricao && errors.descricao.message}</span>
          </div>

          <button className="py-6 px-14 bg-primary text-secondary uppercase hover:bg-secondary hover:text-primary ease-in-out duration-200 w-fit mt-9">Criar meu financiamento</button>
        </form>
      </section>
    </div>
  )
}
