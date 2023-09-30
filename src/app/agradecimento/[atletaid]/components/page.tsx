"use client";
import React, { useEffect, useState } from "react";
import QRCode from 'qrcode.react';  // Se estiver usando React
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {PixBrCode} from "emvqrcode-tools"

interface IDocDefinition {
    content: (string | { text: string; bold?: boolean; margin?: [number, number] })[];
    styles: any;
 }

const AgradecimentoClient = ({ response, response2 }: any) => {
  console.log("response2 ", response2);
  console.log("response ", response);
  const [brCodeString, setBrCodeString] = useState('');

  const run = async () => {
    const brCode = new PixBrCode({
        pixKey: response?.chavePix,
        additionalInfo: "PIX",
        merchantName: response?.nomeAtleta,
        merchantCity: "Curitiba",
        postalCode: "81450220",
        transactionAmount: response2?.valorIncentivo,
        referenceLabel: "foo123bar"
    });

    const generatedString = brCode.get();
    setBrCodeString(generatedString);
    console.log("Generated BR Code:", generatedString);
  }

  useEffect(() => {
    run();
  }, [response, response2]);


  const generatePDF = (incentivador: any, beneficiado: any) => {

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    
    const docDefinition: IDocDefinition = {
      content: [
        `PROCESSO Nº: ${incentivador?.numeroProcesso}`,
        `RECIBO Nº: ${beneficiado?.recibo}`,
        `Manifestação Desportiva: ${incentivador?.manifestacaoDesportiva}`,
        'RECEBI(EMOS) A IMPORTÂNCIA, ABAIXO ESPECIFICADA, PARA PARTICIPAÇÃO NO PROCESSO SUPRACITADO, CONFORME ESTABELECIDO NA LEI Nº 11.438/2006 E NO DECRETO Nº 6.180/2007.',
  
        { text: 'DADOS DA PARTICIPAÇÃO:', bold: true },
        '01- TIPO DA OPERAÇÃO',
        { text: 'Artigo 3º da Lei 11.438/2006 [ X ] – DOAÇÃO [ ] - PATROCÍNIO', margin: [0,5] },
        `02 - VALOR DO INCENTIVO R$${beneficiado?.valorIncentivo}`,
        `03. BANCO: ${incentivador.banco}`,
        `04. Número DA AGÊNCIA: ${incentivador?.numeroAgencia}`,
        `05. N.º CONTA CORRENTE: ${incentivador?.numeroContaCorrente}`,
        `06. DATA DO RECEBIMENTO DO INCENTIVO: ${formatDate(beneficiado?.createdAt)}`,
        '07. MENCIONAR A FORMA DE INCENTIVO: [ X ] - BENS [ ] - SERVIÇOS',
  
        { text: 'DADOS DO beneficiado', bold: true },
        `10. NOME/RAZÃO SOCIAL: ${beneficiado.nome || '______'}`,
        `11. NOME FANTASIA: ${beneficiado.nomeFantasia || '______'}`,
        `12. CNPJ / CPF: ${beneficiado.cpfOrCnpj || '______'}`,
        `13. ENDEREÇO: ${beneficiado.endereco || '______'}`,
        `14. CIDADE: ${beneficiado.cidade || '______'}`,
        `15. UF: ${beneficiado.uf || '______'}`,
        `16. CEP: ${beneficiado.cep || '______'}`,
        `17. TELEFONE/FAX: ${beneficiado.telefone || '______'}`,
        `18. EMPRESA: ${beneficiado.empresaPublicOrPrivate || '______'}`,
        `19. FAZ PARTE DE ALGUM GRUPO EMPRESARIAL? ${beneficiado.grupoEmpresarial || '______'}`,
        `20. NOME DO DIRIGENTE MÁXIMO DA EMPRESA beneficiado(a): ${beneficiado.nomeDirigenteMax || '______'}`,
        `21. TELEFONE DO DIRIGENTE: ${beneficiado.telefoneDirigente || '______'}`,
        `22. E-MAIL DO DIRIGENTE: ${beneficiado.emailDirigente || '______'}`,
        `23. ÁREA RESPONSÁVEL POR PATRÓCINIOS / DOAÇÕES: ${beneficiado.areaResponsavel || '______'}`,
        `24. TELEFONE DA ÁREA: ${beneficiado.telefoneAreaResponsavel || '______'}`,
        `25. E-MAIL DA ÁREA: ${beneficiado.emailAreaResponsavel || '______'}`,
        { text: 'DADOS DO PROJETO INCENTIVADOR', bold: true },
        `26. TÍTULO: ${incentivador.nomeProjeto || '______'}`,
        `27. DATA DA PUBLICAÇÃO DA PORTARIA DE APROVAÇÃO NO DOU: ${formatDate(incentivador.dataPublicacaoDOU) || '______'} `,
        `28. PROPONENTE: ${incentivador.projetoProponente || '______'}`,
        `29. CNPJ: ${incentivador.projetoCNPJ || '______'}`,
  
        { text: 'DADOS DO DECLARANTE', bold: true },
        `30. NOME: ${incentivador.nomeAtleta || '______'}`,
        `31. CPF: ${incentivador.cpf || '______'}`,
        `32. CARGO: ${incentivador.cargoAtleta || '______'}`,
        `33. TELEFONE: ${incentivador.telefoneAtleta || '______'}`,
      ],
      styles: {
        bold: {
            fontSize: 14,
            bold: true,
            margin: [0, 10]
        }
    }
    };
  
    pdfMake.createPdf(docDefinition).open();
  }
  
  
      
  

  return (
    <main className="h-screen bg-primary flex flex-col justify-center items-center">
     
     
      <div className="text-center space-y-4">
      <h2 className="text-white text-2xl font-semibold">Pague com o PIX</h2>
      {brCodeString && (
        <div className="p-4 bg-white rounded-lg shadow-md">
          <QRCode
            value={brCodeString}
            size={256}
            renderAs="svg"
            fgColor="#333333"
            bgColor="#ffffff"
          />
        </div>
      )}
    </div>
    
      <h1 className="font-title text-7xl sm:text-[110px] text-white leading-none mt-7">
        Obrigado pelo apoio!!
      </h1>
      <p className="text-white text-center">
        Atletas como eu sonham em poder viver do esporte, saiba que{" "}
          você é<br />
          uma peça essencial para que isso possa se tornar realidade!
      </p>
      <button
        className="py-6 px-14 bg-secondary text-primary uppercase border border-primary hover:bg-white hover:text-black mt-9 ease-in-out duration-200"
        type="button"
        onClick={() => generatePDF(response, response2)}
      >
        Baixar PDF de pagamento
      </button>
    </main>
  );
};

export default AgradecimentoClient;
