import React from 'react'
import Navbar from '../navbar/Navbar'
import Styles from './Home.module.css'
import IMG01 from '../../img/tesla.jpg'
import Footer from '../footer/Footer'
import ReactTypingEffect from 'react-typing-effect';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={Styles.card}>
        <h1 className={Styles.title}>
          As fantásticas invenções de Nikola Tesla.
        </h1>
        <p className={Styles.text}>
          Esta API é dedicada a Nikola Tesla e aos Cientistas e
          Engenheiros que se mantêm à frente, com mente aberta
          à tecnologia de Tesla.
        </p>
        <div className={Styles.cardImgLeft}>
          <img src={IMG01} alt="Nikola Tesla" className={Styles.img} />
        </div>

        <div className={Styles.card2}>
          <h1 className={Styles.title2}>
            <ReactTypingEffect
              text="⚡Resumo bibliográfico Original⚡"
              speed="100"
              eraseSpeed="100"
              eraseDelay="1000"
              typingDelay="1000"
            />

          </h1>
          <p className={Styles.card2Content} >
            Embora grande grande parte da família europeia
            tenha se dirigido para o oeste nos últimos três ou
            quatros séculos,colonizando vastos campos da América,
            outra parte, porém menor, tem realizado trabalho no
            velho mundo, protegendo a retaguarda a fim de
            rechaçar o "impronunciável"  turco e recuperar
            gradativamente,
            as boas terra que preservam a
            maldição da lei maometana.
            Foi nessa interessante região de fronteira,
            e desse valente povo oriental, que nasceu,
            no ano 1857, Nikola Tesla, e o fato de hoje
            estar na America e ser um dos nossos principais
            eletricistas é uma surpreendente evidência da
            extraordinária atração exercida exercida entre
            semelhante com relação a suas pesquisas na área
            elétrica e um país  onde a eletricidade encontra
            sua mais ampla aplicação.
            O local de nascimento do sr. Tesla foi Smiljan,
            Lika, onde seu pai era um eloquente clérigo da
            Igreja grega, na qual, a propósito,
            sua família ainda tem proeminente representação,
            Sua  mãe desfrutava de grande fama em todo o
            país por sua habilidade e originalidade
            em bordados e, sem dúvida, transmitiu sua ingenuidade
            á Nikola, embora naturalmente ele enveredou
            por outra direção mais masculina.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home