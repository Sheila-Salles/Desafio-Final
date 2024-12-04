import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/Twitter.png'
import S from '../Footer/footer.module.scss'





export default function Footer(){
    return(
        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""><img src={facebook} alt="icone do facebook" /></a>
                    <a href=""><img src={twitter} alt="icone do twitter" /></a>
                    <a href=""><img src={youtube} alt="icone do youtube" /></a>
                    <a href=""><img src={linkedin} alt="icone do linkedin" /></a>
                    <a href=""><img src={instagram} alt="icone do instagram" /></a>
                </nav>
            </section>
            <section className={S.boxTexto}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}