import Filtros from "components/filtros/Filtros";
import Header from "../components/Header/header";
import styles from './mercado.module.scss'
import { useState } from "react";
import Card from "components/Card/Card";

export default function Mercado() {
    const [filtro, setFiltro] = useState<number | null> (null);
    return (<>
        <Header/>
        <header className={styles.header}></header>
        <Filtros filtro={filtro} setFiltro={setFiltro}/>
        <Card/>
        </>
    )
}