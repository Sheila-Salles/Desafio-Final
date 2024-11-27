import S from "../Doados/doados.module.scss" 
import ficticio from "../../assets/ficticio.png"


export default function Doados(){
    return(<section>
    
        <h2 className={S.titulo}>Livros Doados</h2>
        
        
    
    <section className={S.doados}>
        
        <div >
    
    <img src={ficticio} alt="Livro fictício" />
    <p>O protagonista</p>
    <p>Susanne Andrade</p>
    <p>Ficção</p>
    
    </div>
    
    <div >
    
    <img src={ficticio} alt="Livro fictício" />
    <p>O protagonista</p>
    <p>Susanne Andrade</p>
    <p>Ficção</p>
    
    </div>

    <div>
    
    <img src={ficticio} alt="Livro fictício" />
    <p>O protagonista</p>
    <p>Susanne Andrade</p>
    <p>Ficção</p>
    
    </div>

    <div >
    
    <img src={ficticio} alt="Livro fictício" />
    <p>O protagonista</p>
    <p>Susanne Andrade</p>
    <p>Ficção</p>
    
    </div>
    
    </section>
    </section>)     
}








