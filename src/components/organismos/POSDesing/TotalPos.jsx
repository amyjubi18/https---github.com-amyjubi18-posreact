import styled from "styled-components";
import { Btn1 } from "../../../index";

export function TotalPos(){
    return (
        <Container>
            <section className="imagen">
                <img src="https://i.ibb.co/Xkj6P3wK/forma-de-corazon-negro.png" alt="forma-de-corazon-negro" border="0"/>
            </section>ç
            <section className="contentTotal">
                <section className="contentTituloTotal">
                    <Btn1 titulo="COBRAR"/>
                    <Btn1 titulo="..."/>
                </section>
                <span>$9.99</span>
            </section>
        </Container>
    )
}
const Container = styled.div`
`