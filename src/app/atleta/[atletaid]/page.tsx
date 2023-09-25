import React from "react";
import Image from "next/image";

import prismadb from "@/utils/prismadb";

type AtletaProps = {
  params: {
    atletaid: string;
  };
};

const Atleta = async ({ params }: AtletaProps) => {
  const { atletaid } = params;
  console.log("atletaid ", atletaid);

  const response = await prismadb.campanha.findUnique({
    where: {
      id: params.atletaid,
    },
  });
  console.log("respaaonse ", response);
  const srcNavigation = `/cadastro/${response?.id}`
  return (
    <main className="container max-w-7xl m-auto">
      <section>
        <header className="flex flex-col sm:flex-row items-center sm:justify-around bg-primary mt-[40px] sm:h-[136px] relative pt-10 sm:pt-0 px-4 sm:px-0">
          <Image
            src="/images/estrela-branca.svg"
            width="168"
            height="163"
            alt="estrela branca"
            className="absolute hidden sm:block left-[-70px]"
          />
          <div className="flex items-center">
            <Image
              src={response?.imageUrl || ""}
              width="102"
              height="102"
              alt="imagem do atleta"
              className="rounded-full"
            />
            <div className="ml-7">
              <h1 className="font-title text-5xl text-white">
                {response?.nomeAtleta}
              </h1>
              <span className="text-[20px] text-secondary">
                {response?.email}
              </span>
            </div>
          </div>
          <a
            href={srcNavigation}
            className="py-6 px-14 bg-secondary text-primary uppercase hover:bg-white hover:text-black ease-in-out duration-200 my-8"
          >
            apoiar atleta
          </a>
        </header>

        <article className="mt-16 px-8 sm:px-0 sm:mt-[60px]">
          <h2 className="font-title text-5xl sm:text-[64px] mb-4 sm:mb-0">
            {response?.nomeProjeto}
          </h2>
          <div className="text-lg">
            <p>{response?.descricaoProjeto}</p>
          </div>
          <a
            href={srcNavigation}
            className="block text-center sm-w-fit py-6 px-14 bg-secondary text-primary uppercase hover:bg-primary hover:text-secondary ease-in-out duration-200 my-8"
          >
            apoiar atleta
          </a>
        </article>
      </section>
    </main>
  );
};
export default Atleta;
