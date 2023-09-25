"use client";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {  toast } from 'react-toastify';

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import { cnpj, cpf } from "cpf-cnpj-validator";
import { CPFMask } from "@/utils/cpfmask";
import axios from "axios";
import ImageUpload from "@/components/ImageUpload";
import { CNPJMask } from "@/utils/cnpjmask";
import { useRouter } from "next/navigation";

const apoiarFormSchema = z.object({
  nomeAtleta: z
    .string()
    .nonempty("Nome do atleta é obrigatório!")
    .min(3, "Preencha o nome completo!"),
  cpf: z
    .string()
    .nonempty("CPF é obrigatório!")
    .refine(cpf.isValid, "CPF Inválido!"),
  email: z
    .string()
    .nonempty("E-mail é obrigatório!")
    .email("Formato de e-mail inválido!"),
  cargoAtleta: z
    .string()
    .nonempty("Cargo do atleta é obrigatório!")
    .min(3, "Preencha o Cargo do atleta completo!"),
  telefoneAtleta: z
    .string()
    .nonempty("Telefone do atleta é obrigatório!")
    .min(3, "Preencha o Telefone do atleta completo!"),
  chavePix: z.string().nonempty("Chave pix é obrigatório!"),
  tipoChave: z.string().nonempty("Tipo da chave é obrigatório"),
  descricao: z
    .string()
    .nonempty("Descricão é obrigatório.")
    .min(5, "Coloque uma descrição de no minímo de 5 caracteres!"),
  tituloProjeto: z
    .string()
    .nonempty("Título do projeto é obrigatório.")
    .min(2, "Coloque um Título do projeto de no minímo de 2 caracteres!"),
  nomeProjeto: z
    .string()
    .nonempty("Nome do projeto é obrigatório!")
    .min(4, "Nome do projeto precisa ter no minimo 4 letras!"),
  numeroProcesso: z
    .string()
    .nonempty("Número do processo é obrigatório.")
    .min(2, "Coloque um número do processo de no minímo de 2 caracteres!"),
  manifestacaoDesportiva: z
    .string()
    .nonempty("Manifestação Desportiva é obrigatório.")
    .min(
      2,
      "Coloque uma Manifestação Desportiva de no minímo de 2 caracteres!"
    ),
  dataPublicacaoDOU: z
    .string()
    .nonempty(
      "DATA DA PUBLICAÇÃO DA PORTARIA DE APROVAÇÃO NO DOU é obrigatório."
    )
    .min(
      2,
      "Coloque uma DATA DA PUBLICAÇÃO DA PORTARIA DE APROVAÇÃO NO DOU de no minímo de 2 caracteres!"
    ),
  projetoProponente: z
    .string()
    .nonempty("Proponente é obrigatório.")
    .min(2, "Coloque um Proponente de no minímo de 2 caracteres!"),
  projetoCNPJ: z
    .string()
    .nonempty("CNPJ do projeto é obrigatório.")
    .refine(cnpj.isValid, "CNPJ Inválido!"),
});

type ApoioFormData = z.infer<typeof apoiarFormSchema>;

const Apoio = () => {
  const [image, setImage] = useState<string[]>([]);
  console.log("image ", image);
  const [loading, setLoading] = useState(false);
  console.log("loading ", loading);
  const [tipoChave, setTipoChave] = useState("Telefone");
  console.log("tipoChave ", tipoChave);
    const router = useRouter();


  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ApoioFormData>({
    resolver: zodResolver(apoiarFormSchema),
  });

  const onImageChange = (value: string) => {
    setImage([value]);
  };

  const onImageRemove = () => {
    setImage([""]);
  };

  const Apoiar = async (data: ApoioFormData) => {
    const dataPublicacaoDOUDateTime = `${data?.dataPublicacaoDOU}T00:00:00.000Z`;

    console.log("data ", data);
    const dataFormatted = {
      nomeAtleta: data?.nomeAtleta,
      cpf: data?.cpf,
      email: data?.email,
      chavePix: data?.chavePix,
      imageUrl: image[0],
      cargoAtleta: data?.cargoAtleta,
      telefoneAtleta: data?.telefoneAtleta,
      tipoChave:data?.tipoChave,

      nomeProjeto: data?.nomeProjeto,
      tituloProjeto: data?.tituloProjeto,
      descricaoProjeto: data?.descricao,
      numeroProcesso: data?.numeroProcesso,
      manifestacaoDesportiva: data?.manifestacaoDesportiva,
      dataPublicacaoDOU: dataPublicacaoDOUDateTime,
      projetoProponente: data?.projetoProponente,
      projetoCNPJ: data?.projetoCNPJ,
    };
    console.log("dataFormatted ", dataFormatted);
    try {
      setLoading(true);
      const response = await axios.post("api/apoio", dataFormatted);
      console.log("response ", response);
      toast.success("Requisição bem-sucedida!");
      router.push(`/atleta/${response?.data?.id}`)
    } catch (error) {
      console.log(error);
      toast.error('Erro ao enviar os dados. Tente novamente!');
    }
  };

  const getInputType = (tipo: any) => {
    switch (tipo) {
      case "Telefone":
        return "tel";
      case "email":
        return "email";
      case "CPF":
        return "text";
      case "CNPJ":
        return "text";
      default:
        return "text";
    }
  };
  function Spinner() {
    return (
      <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    );
}

  
  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-primary z-50">
        <Spinner />
      </div>
    );
  }
  

  return (
    <main className="flex flex-col sm:grid sm:grid-cols-2 ">

      
      <div className="bg-[url('/images/apoio-bg.png')] bg-center bg-no-repeat bg-cover">
        <div className="px-8 py-10 sm:w-[640px] sm:py-16 sm:px-24 sm:float-right">
          <div className="flex items-center">
            <a
              href="/"
              className="p-5 bg-primary bg-[url('/images/arrow.svg')] bg-no-repeat bg-center"
            ></a>
            <a href="/" className="text-secondary text-base underline ml-4">
              Retornar
            </a>
          </div>
          <h1 className="text-6xl sm:text-[90px] mt-8 sm:text-8xl leading-none font-title text-white sm:mt-[167px]">
            Só mais esse passo para iniciarmos sua campanha de financiamento
          </h1>
        </div>
      </div>

      <section>
        <div className="sm:w-[640px] px-8 py-8 sm:px-24 sm:py-16">
          <h2 className="text-5xl font-title">Insira seus dados de contato</h2>
          <p className="text-lg mt-2">
            Preencha corretamente os dados abaixo para que sua
            <br /> página de apoio seja iniciada.
          </p>

          <form onSubmit={handleSubmit(Apoiar)} className="mt-11 flex flex-col">
            <h3 className="mb-4 text-2xl text-blue-700 font-semibold border-b border-blue-300 pb-2">
              DADOS PESSOAIS
            </h3>
            <div className="mb-4">
              <ImageUpload
                onChange={onImageChange}
                onRemove={onImageRemove}
                value={image}
              />
            </div>
            <Input
              {...register("nomeAtleta")}
              label="Nome completo do(a) atleta *"
              placeholder="Preencha"
              type="text"
              id="nome-atleta"
              errorMessage={errors.nomeAtleta && errors.nomeAtleta.message}
              disabled={loading}
            />
            <Input
              {...register("cpf")}
              mask={CPFMask}
              label="CPF *"
              type="text"
              placeholder="Preencha"
              id="cpf"
              errorMessage={errors.cpf && errors.cpf.message}
              disabled={loading}
            />
            <Input
              {...register("email")}
              label="E-mail *"
              type="text"
              placeholder="Preencha"
              id="email"
              errorMessage={errors.email && errors.email.message}
              disabled={loading}
            />

            <Input
              {...register("cargoAtleta")}
              label="Cargo do(a) atleta *"
              placeholder="Preencha"
              type="text"
              id="cargo-atleta"
              errorMessage={errors.cargoAtleta && errors.cargoAtleta.message}
              disabled={loading}
            />
            <Input
              {...register("telefoneAtleta")}
              label="Telefone do(a) atleta *"
              placeholder="Preencha"
              type="text"
              id="telefone-atleta"
              errorMessage={
                errors.telefoneAtleta && errors.telefoneAtleta.message
              }
              disabled={loading}
            />

            <h3 className="mb-4 text-2xl text-blue-700 font-semibold border-b border-blue-300 pb-2">
              PIX
            </h3>
            <label>
              <Controller
                name="tipoChave"
                control={control}
                defaultValue="Telefone"
                render={({ field }) => (
                  <select
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setTipoChave(e.target.value);
                    }}
                    className="mt-1 block w-full border-gray-300 shadow-sm rounded-md p-2 mb-3"
                  >
                    <option value="Telefone">Telefone</option>
                    <option value="email">Email</option>
                    <option value="CPF">CPF</option>
                    <option value="CNPJ">CNPJ</option>
                  </select>
                )}
              />
            </label>
            <Input
              {...register("chavePix")}
              label="Chave Pix *"
              placeholder="Preencha"
              type={getInputType(tipoChave)}
              id="chave-pix"
              errorMessage={errors.chavePix && errors.chavePix.message}
              disabled={loading}
            />  
           
            <h3 className="my-4 text-2xl text-blue-700 font-semibold border-b border-blue-300 pb-2">
              DADOS DO PROJETO
            </h3>
            <Input
              {...register("nomeProjeto")}
              label="Nome do projeto *"
              placeholder="Preencha"
              type="text"
              id="nome-do-projeto"
              errorMessage={errors.nomeProjeto && errors.nomeProjeto.message}
              disabled={loading}
            />
            <Input
              {...register("tituloProjeto")}
              label="Título do projeto *"
              placeholder="Preencha"
              type="text"
              id="titulo-do-projeto"
              errorMessage={
                errors.tituloProjeto && errors.tituloProjeto.message
              }
              disabled={loading}
            />
            <Input
              {...register("numeroProcesso")}
              label="Número do Processo *"
              placeholder="Preencha"
              type="text"
              id="numero-processo"
              errorMessage={
                errors.numeroProcesso && errors.numeroProcesso.message
              }
              disabled={loading}
            />
            <Input
              {...register("manifestacaoDesportiva")}
              label="Manifestação Desportiva *"
              placeholder="Preencha"
              type="text"
              id="manifestacao-desportiva"
              errorMessage={
                errors.manifestacaoDesportiva &&
                errors.manifestacaoDesportiva.message
              }
              disabled={loading}
            />
            <Input
              {...register("dataPublicacaoDOU")}
              label="Data da publicação da portaria de aprovação no DOU: *"
              placeholder="Preencha"
              type="date"
              id="data-publicacao-dou"
              errorMessage={
                errors.dataPublicacaoDOU && errors.dataPublicacaoDOU.message
              }
              disabled={loading}
            />
            <Input
              {...register("projetoProponente")}
              label="Proponente: *"
              placeholder="Preencha"
              type="text"
              id="projeto-proponente"
              errorMessage={
                errors.projetoProponente && errors.projetoProponente.message
              }
              disabled={loading}
            />
            <Input
              {...register("projetoCNPJ")}
              mask={CNPJMask}
              label="CNPJ: *"
              placeholder="Preencha"
              type="text"
              id="projeto-cnpj"
              errorMessage={errors.projetoCNPJ && errors.projetoCNPJ.message}
              disabled={loading}
            />
            <div className="flex flex-col h-[200px]">
              <label
                htmlFor="descricao"
                className="flex flex-col text-[#00000099]"

              >
                Descrição *
                <textarea
                  {...register("descricao")}
                  id="descricao"
                  cols={30}
                  rows={5}
                  disabled={loading}
                  className={twMerge(
                    "border border-black rounded-md py-4 px-4 mt-2",
                    errors.descricao?.message &&
                      "border-red-500 focus:outline-red-500"
                  )}
                  placeholder="Insira uma descrição direto ao ponto, com detalhes de qual finalidade e a meta do atleta"
                ></textarea>
              </label>
              <span className="mt-2 text-red-500 text-sm">
                {errors.descricao && errors.descricao.message}
              </span>
            </div>
            <button
              type="submit"
              className="py-6 px-14 bg-primary text-secondary uppercase hover:bg-secondary hover:text-primary ease-in-out duration-200 text-center sm:w-fit mt-9"
            >
              Criar meu financiamento
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};
export default Apoio;
