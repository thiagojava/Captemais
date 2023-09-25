import prismadb from "@/utils/prismadb";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { atletaid: string } }
  ) {
    try {
      if (!params.atletaid) {
        return new NextResponse("Billboard id is required", { status: 400 });
      }
  
      const billboard = await prismadb.campanha.findUnique({
        where: {
          id: params.atletaid
        }
      });
    
      return NextResponse.json(billboard);
    } catch (error) {
      console.log('[BILLBOARD_GET]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };
