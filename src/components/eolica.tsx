import { faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function BotaoEolica(){
    return(
        <div className="flex justify-center items-center absolute p-2 h-20 w-20 rounded-full bg-slate-200 mt-[29rem] ml-[71rem] hover:scale-125 transition-all">    
            <FontAwesomeIcon color='#181818' height={48} icon={faWind} />
        </div>
    )
}