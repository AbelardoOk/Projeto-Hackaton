import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Image className="absolute" src={'/amazonia.png'} alt="" width={480} height={480} />
      <Image className="absolute ml-[16.61rem] mt-[3.45rem]" src={'/caatinga.png'} alt="" width={480} height={480} />
      <Image className="absolute ml-28 mt-28" src={'/cerrado.png'} alt="" width={480} height={480} />
      <Image className="absolute mt-[10.53rem] ml-[11.9rem]" src={'/mataAtlantica.png'} alt="" width={480} height={480} />
      <Image className="absolute mt-[22.25rem] ml-[4.5rem]" src={'/pampa.png'} alt="" width={480} height={480} />
      <Image className="absolute mt-[11.65rem] ml-[1.55rem]" src={'/pantanal.png'} alt="" width={480} height={480} />
    </div>
  );
}
