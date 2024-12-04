import S from '../Doados/doados.module.scss'
import livros from '../../assets/livros.png'


export default function Doados(){
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxcard}>
                <article>
                    <img src={livros} alt="imagem de um livro que se chama o protagonista" />

                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>

                </article>
                <article>
                    <img src={livros} alt="imagem de um livro que se chama o protagonista" />
                    
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                    
                </article>
            </section>
        </section>
    )
}