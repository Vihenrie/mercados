import style from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'

export default function Buscador() {
    return(
        <div className={style.buscador}>
            <input className={style.buscador__input}  type="text" placeholder='Busque o produto' />
            <CgSearch
        size={20}
        color = '#000000'
        />
        </div>
    )
}