import produtos from './produtos.json'
import style from './card.module.scss'

type IProduto = typeof produtos[0]

export default function Card() {
    return (
        <div className={style.container}>
            {produtos.map((produto: IProduto) => (
                <div className={style.card} key={produto.id}>
                    <img className={style.img} src={produto.img} alt={produto.Carne} />
                    <h1>{produto.Carne}</h1>
                </div>
            ))}
        </div>
    )
}