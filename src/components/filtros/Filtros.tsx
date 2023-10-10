import  styles  from './filtros.module.scss'
import filtros from './filtros.json'


interface Props{
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

type  IOpcao = typeof filtros[0]

export default function Filtros({filtro, setFiltro}: Props) {
    function selecionarFiltro(opcao: IOpcao) {
        return setFiltro(opcao.id);
    }
    return(
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                 <button
                 className={ `
                 ${styles.filtros__filtro}
                 ${filtro === opcao.id ? styles["filtros__filtro--ativo"] : ""}
                 `}
                 key={opcao.id}
                 onClick={() => selecionarFiltro(opcao)}
                 
                 >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}