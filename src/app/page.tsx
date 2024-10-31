import Image from "next/image";
export default function Home() {
  return (
    <main>
      <button className="absolute rounded-lg font-bold px-8 py-2 bg-white text-[#181818] opacity-80 mt-[20rem] ml-[48rem] hover:opacity-100 hover:scale-125 transition-all">Amazônia</button>
      <button className="absolute rounded-lg font-bold px-8 py-2 bg-white text-[#181818] opacity-80 mt-[34rem] ml-[62.5rem] hover:opacity-100 transition-all hover:scale-125">Cerrado</button>
      <button className="absolute rounded-lg font-bold px-8 py-2 bg-[#181818] text-[#f7f7f7] opacity-80 mt-[20rem] ml-[77rem] hover:opacity-100 transition-all hover:scale-125">Caatinga</button>
      <button className="absolute rounded-lg font-bold px-8 py-2 bg-[#181818] text-[#f7f7f7] opacity-80 mt-[48rem] ml-[64rem] hover:opacity-100 transition-all hover:scale-125">Mata Atlântica</button>
      <button className="absolute rounded-lg font-bold px-8 py-2 bg-[#181818] text-[#f7f7f7] opacity-80 mt-[37rem] ml-[47rem] hover:opacity-100 transition-all hover:scale-125">Pantanal</button>
      <button className="absolute rounded-lg font-bold px-8 py-2 bg-[#181818] text-[#f7f7f7] opacity-80 mt-[54rem] ml-[52rem] hover:opacity-100 transition-all hover:scale-125">Pampa</button>

      <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-8">
        <h1 className="text-black font-bold text-4xl">Biomas do Brasil</h1>
        <Image className="h-[80vh] w-fit" src={"/mapaBiomas.png"} alt="" width={1080} height={1080} />
      </div>

    </main>

  );
}
