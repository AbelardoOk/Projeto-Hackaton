import Link from "next/link";
import Image from "next/image";

export function CardCarvao(){
    return(
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="flex flex-row border w-[60vw] h-[60vh] shadow-lg rounded-xl bg-white overflow-auto">
            <Image className="w-[40%]" src={"/carvao.jpg"} height={1472} width={2000} alt="" />
            <div className="font-sans text-black ">
                <h1 className="flex justify-center items-center "  >Carvao</h1>
                <p className="text-black text-sm m-4 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed neque dolores asperiores vitae ipsum, enim labore, eligendi velit quae iure aut laborum suscipit nihil recusandae nostrum. Eaque, numquam laudantium.</p>
                <div className="flex justify-center mt-4">
                    {/* Navigates back to the base URL - closing the modal */}
                    <Link
                    href="/mapa"
                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                    Fechar
                    </Link> 
                </div>
            </div>
        </div>
        </div>
  );
}