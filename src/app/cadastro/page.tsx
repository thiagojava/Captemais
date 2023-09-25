"use client";

import Input from "@/components/Input";
import { CNPJMask } from "@/utils/cnpjmask";
import { CPFMask } from "@/utils/cpfmask";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { cnpj, cpf } from "cpf-cnpj-validator";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const cadastroFormSchema = z.object({
  //Pessoais
  nome: z.string().nonempty("Nome é obrigatório!").min(3, "Nome muito curto!"),
  cpfOrCnpj: z
    .string()
    .nonempty("CPF/CNPJ é obrigatório!")
    .min(3, "CPF/CNPJ inválido!"),
  endereco: z
    .string()
    .nonempty("Endereço é obrigatório!")
    .min(3, "Endereço muito curto!"),
  cidade: z
    .string()
    .nonempty("Cidade é obrigatória!")
    .min(3, "Nome de cidade muito curto!"),
  UF: z
    .string()
    .nonempty("UF é obrigatório!")
    .length(2, "UF deve conter 2 caracteres!"),
  CEP: z.string().nonempty("CEP é obrigatório!").min(8, "CEP inválido!"),
  telefone: z
    .string()
    .nonempty("Telefone é obrigatório!")
    .min(10, "Telefone inválido!"),
  cpf: z
    .string()
    .nonempty("CPF é obrigatório!")
    .refine(cpf.isValid, "CPF Inválido!"),
  email: z
    .string()
    .nonempty("E-mail é obrigatório!")
    .email("Formato de e-mail inválido!"),

  valorIncentivo: z
    .string()
    .nonempty("Valor do incentivo é obrigatório!")
    .min(3, "Valor inválido!"),

  //Empresa
  cnpj: z.string().refine(cnpj.isValid, "CPF Inválido!").optional(),
  nomeFantasia: z.string().min(3, "Nome Fantasia inválido!").optional(),
  razaoSocial: z.string().min(3, "Razão social inválida!").optional(),
  nomeDirigenteMax: z
    .string()
    .min(3, "Nome do dirigente máximo inválido!")
    .optional(),
  telefoneDirigente: z
    .string()
    .min(10, "Telefone do dirigente inválido!")
    .optional(),
  emailDirigente: z.string().email("Formato de e-mail inválido!").optional(),
  empresaPublicOrPrivate: z
    .string()
    .min(3, "Tipo de empresa inválido!")
    .optional(),
  grupoEmpresarial: z
    .string()
    .min(3, "Nome do grupo empresarial inválido!")
    .optional(),
  areaResponsavel: z.string().min(3, "Área responsável inválida!").optional(),
  telefoneAreaResponsavel: z
    .string()
    .min(10, "Telefone da área responsável inválido!")
    .optional(),
  emailAreaResponsavel: z
    .string()
    .email("Formato de e-mail inválido!")
    .optional(),
});

type CadastroFormData = z.infer<typeof cadastroFormSchema>;

export default function Apoio() {
  const[loading,setLoading] = useState(false)
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroFormSchema),
  });
  const cpfOrCpnj = watch("cpfOrCnpj", "CPF");

  const cadastrar = async (data: CadastroFormData) => {
  console.log("data ", data);
    /// FUNCAO DE CADASTRO DEPOIS DE TUDO VALIDADO
    try {
      setLoading(true);
      const response = await axios.post("api/cadastro", data);
      console.log("response ", response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    console.log(data);
  }

  return (
    <main className="flex flex-col sm:grid sm:grid-cols-2">
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
          <h1 className="text-6xl sm:text-[90px] mt-8 leading-none font-title text-white sm:mt-[167px]">
            Apoie um atleta de forma simples e direta
          </h1>
        </div>
      </div>

      <section>
        <div className="sm:w-[640px] px-8 py-8 sm:px-24 sm:py-16">
          <h2 className="text-5xl font-title">Insira seus dados básicos</h2>
          <p className="text-lg mt-2">
            Preencha corretamente os dados abaixo para que seu apoio seja
            cadastrado em nossa plataforma
          </p>

          <form
            onSubmit={handleSubmit(cadastrar)}
            className="mt-11 flex flex-col"
          >
            <h3 className="mb-4 text-2xl text-blue-700 font-semibold border-b border-blue-300 pb-2">
              DADOS PESSOAIS
            </h3>
            <label className="block text-gray-700 font-medium">
              CPF ou CNPJ :*
              <Controller
                name="cpfOrCnpj"
                control={control}
                defaultValue="CPF"
                render={({ field }) => (
                  <select
                    {...field}
                    className="mt-1 block w-full border-gray-300 shadow-sm rounded-md p-2 mb-3"
                  > 
                    <option value="CPF">CPF</option>
                    <option value="CNPJ">CNPJ</option>
                  </select>
                )}
              />
            </label>
            <Input
              {...register("nome")}
              label="Nome Completo :*"
              placeholder="Preencha"
              type="text"
              id="nome"
              errorMessage={errors.nome && errors.nome.message}
            />

            <Input
              {...register("cpf")}
              mask={CPFMask}
              label="CPF *"
              type="text"
              placeholder="Preencha"
              id="cpf"
              errorMessage={errors.cpf && errors.cpf.message}
            />
             <Input
              {...register("email")}
              label="Email :*"
              placeholder="Preencha"
              type="text"
              id="email"
              errorMessage={errors.email && errors.email.message}
            />
            <Input
              {...register("endereco")}
              label="Endereço :*"
              placeholder="Preencha"
              type="text"
              id="endereco"
              errorMessage={errors.endereco && errors.endereco.message}
            />
            <Input
              {...register("cidade")}
              label="Cidade :*"
              placeholder="Preencha"
              type="text"
              id="cidade"
              errorMessage={errors.cidade && errors.cidade.message}
            />
            <Input
              {...register("UF")}
              label="UF :*"
              placeholder="Preencha"
              type="text"
              id="UF"
              errorMessage={errors.UF && errors.UF.message}
            />
            <Input
              {...register("CEP")}
              label="CEP :*"
              placeholder="Preencha"
              type="text"
              id="CEP"
              errorMessage={errors.CEP && errors.CEP.message}
            />
            <Input
              {...register("telefone")}
              label="Telefone :*"
              placeholder="Preencha"
              type="text"
              id="telefone"
              errorMessage={errors.telefone && errors.telefone.message}
            />
            <Input
              {...register("valorIncentivo")}
              label="Valor do incentivo R$ :*"
              placeholder="Preencha"
              type="text"
              id="valorIncentivo"
              errorMessage={
                errors.valorIncentivo && errors.valorIncentivo.message
              }
            />

            {cpfOrCpnj === "CNPJ" && (
              <>
                <h3 className="mb-4 text-2xl text-blue-700 font-semibold border-b border-blue-300 pb-2">
                  DADOS DA EMPRESA
                </h3>
                <Input
                  {...register("cnpj")}
                  mask={CNPJMask}
                  label="CNPJ *"
                  type="text"
                  placeholder="Preencha"
                  id="cnpj"
                  errorMessage={errors.cpf && errors.cpf.message}
                />
                <Input
                  {...register("razaoSocial")}
                  label="Razão social :*"
                  placeholder="Preencha"
                  type="text"
                  id="razaoSocial"
                  errorMessage={
                    errors.razaoSocial && errors.razaoSocial.message
                  }
                />
                <Input
                  {...register("nomeFantasia")}
                  label="Nome Fantasia :*"
                  placeholder="Preencha"
                  type="text"
                  id="nomeFantasia"
                  errorMessage={
                    errors.nomeFantasia && errors.nomeFantasia.message
                  }
                />
                <Input
                  {...register("nomeDirigenteMax")}
                  label="Nome do dirigente máximo da empresa incentivadora :*"
                  placeholder="Preencha"
                  type="text"
                  id="nomeDirigenteMax"
                  errorMessage={
                    errors.nomeDirigenteMax && errors.nomeDirigenteMax.message
                  }
                />
                <Input
                  {...register("telefoneDirigente")}
                  label="Telefone do dirigente máximo da empresa incentivadora :*"
                  placeholder="Preencha"
                  type="text"
                  id="telefoneDirigente"
                  errorMessage={
                    errors.telefoneDirigente && errors.telefoneDirigente.message
                  }
                />

                <Input
                  {...register("emailDirigente")}
                  label="Email do dirigente máximo da empresa incentivadora :*"
                  placeholder="Preencha"
                  type="text"
                  id="emailDirigente"
                  errorMessage={
                    errors.emailDirigente && errors.emailDirigente.message
                  }
                />

                <label className="block text-gray-700 font-medium">
                  Empresa Pública ou Privada? :*
                  <Controller
                    name="empresaPublicOrPrivate"
                    control={control}
                    defaultValue="Pública"
                    render={({ field }) => (
                      <select
                        {...field}
                        className="mt-1 block w-full border-gray-300 shadow-sm rounded-md p-3 mb-3"
                      >
                        <option value="Pública">Pública</option>
                        <option value="Privada">Privada</option>
                      </select>
                    )}
                  />
                </label>
                <Input
                  {...register("grupoEmpresarial")}
                  label="Faz parte de algum Grupo Empresarial? Qual?  :*"
                  placeholder="Preencha"
                  type="text"
                  id="grupoEmpresarial"
                  errorMessage={
                    errors.grupoEmpresarial && errors.grupoEmpresarial.message
                  }
                />
                <Input
                  {...register("areaResponsavel")}
                  label="Área Responsável por patrocínios/doações :*"
                  placeholder="Preencha"
                  type="text"
                  id="areaResponsavel"
                  errorMessage={
                    errors.areaResponsavel && errors.areaResponsavel.message
                  }
                />
                <Input
                  {...register("telefoneAreaResponsavel")}
                  label="Telefone da Área Responsável :*"
                  placeholder="Preencha"
                  type="text"
                  id="telefoneAreaResponsavel"
                  errorMessage={
                    errors.telefoneAreaResponsavel &&
                    errors.telefoneAreaResponsavel.message
                  }
                />
                <Input
                  {...register("emailAreaResponsavel")}
                  label="Email da Área Responsável :*"
                  placeholder="Preencha"
                  type="text"
                  id="emailAreaResponsavel"
                  errorMessage={
                    errors.emailAreaResponsavel &&
                    errors.emailAreaResponsavel.message
                  }
                />
              </>
            )}

            <button className="py-6 px-14 bg-primary text-secondary uppercase hover:bg-secondary hover:text-primary ease-in-out duration-200 sm:w-fit mt-9">
              Avançar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
