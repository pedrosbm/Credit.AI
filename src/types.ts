type Form = {
    titulosEmAberto?: number,
    valorSolicitado?: number,
    capitalSocial?: number,
    passivoCirculante?: number,
    ativoCirculante?: number
}

type Resp = {
    previsao?: []
}

export type { Form, Resp }