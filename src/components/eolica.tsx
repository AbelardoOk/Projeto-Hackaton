import { faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function BotaoEolica(){
    return(
        <div className="flex justify-center items-center absolute p-2 h-16 w-16 rounded-full bg-slate-200 mt-[21.5rem] ml-[57rem] hover:scale-125 transition-all">    
            <FontAwesomeIcon color='#181818' height={40} icon={faWind} />
        </div>
    )
}