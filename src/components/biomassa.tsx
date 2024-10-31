import { faSpa } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export function BotaoBiomassa(){
    return(
        <Link href="/mapa/?biomassa=true" className="flex justify-center items-center absolute p-2 h-20 w-20 rounded-full bg-slate-200 mt-[39rem] ml-[55rem] hover:scale-125 transition-all">    
            <FontAwesomeIcon color='#181818' height={48} icon={faSpa} />
        </Link>
    )
}