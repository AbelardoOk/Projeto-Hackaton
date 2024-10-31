import Image from "next/image";
import { BotaoHidreletrica } from "@/components/hidreletrica";
import { BotaoEolica } from "@/components/eolica";
import { BotaoBiomassa } from "@/components/biomassa";
import { Card } from "@/components/card";
import { CardEolica } from "@/components/cardEolica";
import { CardBiomassa } from "@/components/cardBiomassa";

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
  };

export default function Home({ searchParams }: SearchParamProps) {  
    const eolica = searchParams?.eolica === 'true';
    const biomassa = searchParams?.biomassa === 'true';
    const hidreletrica = searchParams?.hidreletrica === 'true';
    const carvao = searchParams?.carvao === 'true';

    return (
      <main className="bg-[#f7f7f7]">

        <BotaoHidreletrica />
        <BotaoEolica />
        <BotaoBiomassa />

        <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-8">
            <h1 className="text-black font-bold text-4xl">Biomas do Brasil</h1>
            <Image className="h-[80vh] w-fit" src={"/mapaEnergia.png"} alt="" width={1080} height={1080} />
        </div>

        {eolica && <CardEolica />}
        {biomassa && <CardBiomassa />}
        {hidreletrica && <Card />}
        {carvao && <CardCarvao />}
      </main>
    );
  }