import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { Form, Resp } from './types';
import 'normalize.css'
import './App.css'

const App = () => {
    const [formulario, setFormulario] = useState<Form>({});
    const [resp, serResp] = useState<Resp>({})

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        await fetch('http://localhost:8080/prever', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ features: Object.values(formulario) })
        }).then((data) => {
            return data.json()
        }).then((json) => {
            serResp(json)
        }).catch((error) => {
            console.error("Erro ao fazer a requisição - " + error)
        })
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormulario({ ...formulario, [name]: value })
    };


    const copy = (event: any) => {
        event.preventDefault()

        navigator.clipboard.writeText(event.target.value)
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Credit.<span>AI</span></h1>

                <div className='inputBox'>
                    <label htmlFor="">Valor Solicitado: </label>
                    <input type="number" name="valorSolicitado" required value={formulario.valorSolicitado} onChange={handleChange} />
                </div>

                <div className='inputBox'>
                    <label htmlFor="">Titulos em aberto: </label>
                    <input type="number" name="titulosEmAberto" required value={formulario.titulosEmAberto} onChange={handleChange} />
                </div>

                <div className='inputBox'>
                    <label htmlFor="">Capital Social: </label>
                    <input type="number" name="capitalSocial" required value={formulario.capitalSocial} onChange={handleChange} />
                </div>

                <div className='inputBox'>
                    <label htmlFor="">Passivo Circulante: </label>
                    <input type="number" name="passivoCirculante" required value={formulario.passivoCirculante} onChange={handleChange} />
                </div>

                <div className='inputBox'>
                    <label htmlFor="">Ativo Circulante: </label>
                    <input type="number" name="ativoCirculante" required value={formulario.ativoCirculante} onChange={handleChange} />
                </div>

                <h2>Resultado</h2>

                <input disabled placeholder='Crédito' value={resp.previsao} className='result' />

                <input className='submit' type="submit" />
            </form>
            
            <hr />

            <footer>
                <div>
                    <h1>Credit.<span>AI</span></h1>
                    <p>by <span>NovaTech Solutions© 2024</span></p>
                </div>
            </footer>
        </section>
    );
}

export default App