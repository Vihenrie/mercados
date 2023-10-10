import Buscador from '../Buscador/index';
import style from './Header.module.scss'

export default function Header() {
    return (
        <div className={style.header}>
            <img src="" alt="" />
            <Buscador/>
            <h1>Seja Bem vindo</h1>
        </div>
    )
}