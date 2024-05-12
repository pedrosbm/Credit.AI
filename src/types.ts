type Form = {
    valorSolicitado?: number,
    titulosEmAberto?: number,
    capitalSocial?: number,
    passivoCirculante?: number,
    ativoCirculante?: number
}

type Resp = {
    previsao?: []
}

export type { Form, Resp }