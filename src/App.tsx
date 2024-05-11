import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { Form, Resp } from './types';

const App = () => {
    const [formulario, setFormulario] = useState<Form>({});
    const [previsao, setPrevisao] = useState<Resp>({})

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        await fetch('http://localhost:8080/prever', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ features: Object.values(formulario) })
        }).then((data) => {
            return data.json()
        }).then((json) => {
            setPrevisao(json)
        }).catch((error) => {
            console.error("Erro ao fazer a requisição - " + error)
        })
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormulario({ ...formulario, [name]: value })
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Credit.<strong>AI</strong></h1>

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

                <input className='submit' type="submit"/>

                <p>NovaTech Solutions© 2024</p>
            </form>
        </section>
    );
}

export default App