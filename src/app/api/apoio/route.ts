import prismadb from "@/utils/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const campanha = await prismadb.campanha.findMany();

    return NextResponse.json(campanha);
  } catch (error) {
    console.log('[STORES_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
export async function POST(
  req: Request,
) {
  try {
    const body = await req.json();

    const { 
      nomeAtleta, 
      cpf, 
      email,
      tipoChave, 
      chavePix, 
      cargoAtleta, 
      telefoneAtleta, 
      nomeProjeto, 
      numeroProcesso, 
      manifestacaoDesportiva, 
      dataPublicacaoDOU, 
      projetoProponente, 
      projetoCNPJ, 
      descricaoProjeto, 
      imageUrl 
    } = body;

    if (!nomeAtleta || !cpf || !email || !chavePix || !tipoChave || !nomeProjeto || !descricaoProjeto || !imageUrl || !cargoAtleta || !telefoneAtleta || !numeroProcesso || !manifestacaoDesportiva || !dataPublicacaoDOU || !projetoProponente || !projetoCNPJ) {
      return new NextResponse("Algum campo não preenchido is required", { status: 400 });
    }

    const store = await prismadb.campanha.create({
      data: {
        nomeAtleta, 
        cpf, 
        email,
        tipoChave, 
        chavePix, 
        cargoAtleta, 
        telefoneAtleta, 
        nomeProjeto, 
        numeroProcesso, 
        manifestacaoDesportiva, 
        dataPublicacaoDOU, 
        projetoProponente, 
        projetoCNPJ, 
        descricaoProjeto, 
        imageUrl
      }
    });
  
    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORES_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};