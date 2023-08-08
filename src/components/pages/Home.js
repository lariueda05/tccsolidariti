import styles from './Home.module.css'
import templatex from '../../img/templatex.png'
import templatesolidariti from '../../img/templatesolidariti.png'
import LinkButton from '../layout/LinkButton'
import React from 'react'

function Home(){
    return (
        <div className={styles.home_container}>
           <img alt='template' src={templatex}></img>
           <br/>
           <br/>
           <b> O Solidariti quer espalhar nossa mensagem de esperança e compaixão. Acreditamos que uma única ação pode fazer a diferença na comunidade e que a ação coletiva pode impactar o mundo.
           <br/>"Bondade é a linguagem que os surdos conseguem ouvir e os cegos conseguem ver." </b>
           <br/>
           <br/>
            <p>Abaixo está as instruções de como ajudar nosso mercado solidário:
            </p> 
            <section>
            <label><u>INSTRUÇÕES DE COMO DOAR, RECEBER PRODUTOS E SE TORNAR CONTRIBUINTE!</u></label>
            <label>1. DOAR: Caso queira doar um produto, clique em Quero Doar e escolha quais produtos você deseja, pois terão as categorias em que podem ser doados. Depois, clique em ajudantes para localizar o ponto e coleta mais próximo, leve até o local em pelo menos 1 semana..</label>
            <label>2. RECEBER: Caso queira receber algum produto, clique em Ajudantes para olhar o local doador mais próximo. Caso deseje olhe no campo Quero doar os produtos que podem estar disponíveis.</label>
            <label>3. QUERO SER AJUDANTE: Caso queira contribuir, clique em Quero ser ajudante e se registre para aceitar doações e buscas de produtos simultaneamente, te orientaremos depois, fique tranquilo. Tenha um espaço físico para receber as doações.</label>
            </section>
            <h1>Escolha sua opção:</h1>
            <LinkButton to="/Doar" text="Quero doar"></LinkButton>
            <LinkButton to="/Receber" text="Ajudantes"></LinkButton>
            <LinkButton to="Company" text="Quero ser ajudante"></LinkButton>
            <img src={templatesolidariti} alt="footer"></img>
            <br></br>
            <br></br>
           </div>
    )
}
export default Home