
import prismadb from "@/utils/prismadb";
import AgradecimentoClient from "../components/page";

interface AtletaId {
  params: {
    atletaid: string;
    cadastroid: string;
  };
}

const AgredecimentoId = async({params}: AtletaId) => {
  const { atletaid, cadastroid } = params;

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
  

  return (
   <AgradecimentoClient response={response} response2={response2} />
  );
};

export default AgredecimentoId;


