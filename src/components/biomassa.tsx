import { faSpa } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function BotaoBiomassa(){
    return(
        <div className="flex justify-center items-center absolute p-2 h-14   w-14 rounded-full bg-slate-200 mt-[29rem] ml-[46rem] hover:scale-125 transition-all">    
            <FontAwesomeIcon color='#181818' height={48} icon={faSpa} />
        </div>
    )
}