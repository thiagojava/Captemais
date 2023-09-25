"use client";
import { useEffect } from "react";
import Image from "next/image";
import prismadb from "@/utils/prismadb";
import axios from "axios";

const AgredecimentoId = ({ response, response2 }: any) => {
  const gerarQRCode = async () => {
    const newData = {
      amount: response2?.valorIncentivo,
      city: "Campo Mourão",
      key: response?.chavePix,
      key_type: response?.tipoChave,
      name: response?.nomeAtleta,
    };
    const api = await axios.post(
      "https://www.gerarpix.com.br/emvqr-static",
      newData
    );
    console.log("api ", api);
  };

  return (
    <main className="h-screen bg-primary flex flex-col justify-center items-center">
      <div className="relative sm:mt-24 w-[200px] sm:w-[300px] sm:h-[300px] h-[200px]">
        <Image
          src="/images/star-outline.png"
          fill
          alt="imagem de estrelas"
          className="absolulte animate-wiggle"
        />
        <Image
          src="/images/trofeu.png"
          fill
          alt="imagem de trofeus"
          className="absolute top-0 animate-bounce"
        />
      </div>
      <h1 className="font-title text-7xl sm:text-[110px] text-white leading-none mt-7">
        Obrigado pelo apoio!!
      </h1>
      <p className="text-white text-center">
        Atletas como eu sonham em poder viver do esporte, saiba que{" "}
        <b>
          você é<br />
          uma peça essencial
        </b>
        para que isso possa se tornar realidade!
      </p>
      <button
        className="py-6 px-14 bg-secondary text-primary uppercase border border-primary hover:bg-white hover:text-black mt-9 ease-in-out duration-200"
        type="button"
        onClick={() => gerarQRCode()}
      >
        Finalizar pagamento
      </button>
    </main>
  );
};

export default AgredecimentoId;

export async function getServerSidePropss(context: any) {
  const { atletaid, cadastroid } = context.params;

  const response = await prismadb.campanha.findUnique({
    where: {
      id: atletaid,
    },
  });

  const response2 = await prismadb.cadastroApoio.findUnique({
    where: {
      id: cadastroid,
    },
  });

  return {
    props: {
      response,
      response2,
    },
  };
}
