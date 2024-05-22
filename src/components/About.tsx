import viteLogo from '../assets/Vitejs-logo.svg.png'
import flaskLogo from '../assets/Flask-logo.png'
import scikitlearnLogo from '../assets/scikitlearn.png'
import { useNavigate } from 'react-router-dom'

import './About.css'

const About = () => {
    const goTo = useNavigate()

    return (
        <main className='about'>
            <section className="presentation">
                <p>NovaTech Solutions apresenta...</p>

                <h1>Credit.<span>AI</span></h1>
            </section>

            <section className="technologies">
                <h2>Tecnologias utilizadas</h2>
                <div className='list'>
                    <div className='technology'>
                        <img src={viteLogo} alt="" />
                        <div>
                            <span>Web</span>
                            <p>Aplicação web desenvolvida com framework react Vite</p>
                        </div>
                    </div>

                    <div className='technology'>
                        <img src={flaskLogo} alt="" />
                        <div>
                            <span>Api</span>
                            <p>Api feita com biblioteca Flask do python.</p>
                        </div>
                    </div>

                    <div className='technology'>
                        <img src={scikitlearnLogo} alt="" />
                        <div>
                            <span>IA</span>
                            <p>Inteligência artificial desenvolida com assets da biblioteca Scikit Learn do python.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="checkout">
                <button onClick={() => goTo("/")}>Conferir</button>
            </section>
        </main>
    )
}

export default About