import styled from "styled-components"
import Banner from "./Banner"
import Atividades from "./Atividades"
import Depoimentos from "./Depoimentos"
import Formulario from "./Pesquisa"

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export default function PaginaInicial() {
    return (
        <>
            <Banner />
            <Container>
                <Formulario />
                <Atividades />
                <Depoimentos />
            </Container >
        </>
    )
}