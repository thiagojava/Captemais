import prismadb from "@/utils/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { cadastroid:string } }
) {
  try {
    if ( !params.cadastroid) {
      return new NextResponse("ID faltando", { status: 400 });
    }

    const billboard = await prismadb.cadastroApoio.findUnique({
      where: {
        id: params.cadastroid
      }
    });
  
    return NextResponse.json(billboard);
  } catch (error) {
    console.log('[BILLBOARD_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};



export async function POST(req: Request) {
  try {
    const body = await req.json();
  
    const { 
      nome, 
      cpfOrCnpj, 
      endereco, 
      cidade, 
      UF, 
      CEP, 
      telefone, 
      email, 
      valorIncentivo, 
      cnpj, 
      nomeFantasia, 
      razaoSocial, 
      nomeDirigenteMax, 
      telefoneDirigente, 
      emailDirigente, 
      empresaPublicOrPrivate, 
      grupoEmpresarial, 
      areaResponsavel, 
      telefoneAreaResponsavel, 
      emailAreaResponsavel,
    } = body;
  
    if (!nome || !cpfOrCnpj || !endereco || !cidade || !UF || !CEP || !telefone || !email || !valorIncentivo) {
      return new NextResponse("Algum campo não preenchido é necessário", { status: 400 });
    }
  
    const store = await prismadb.cadastroApoio.create({
      data: {
        nome, 
        cpfOrCnpj, 
        endereco, 
        cidade, 
        UF, 
        CEP, 
        telefone, 
        email, 
        valorIncentivo, 
        cnpj, 
        nomeFantasia, 
        razaoSocial, 
        nomeDirigenteMax, 
        telefoneDirigente, 
        emailDirigente, 
        empresaPublicOrPrivate, 
        grupoEmpresarial, 
        areaResponsavel, 
        telefoneAreaResponsavel, 
        emailAreaResponsavel,
      }
    });
  
    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORES_POST]', error);
    return new NextResponse("Erro interno", { status: 500 });
  }
};
