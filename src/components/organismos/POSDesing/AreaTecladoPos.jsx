import styled from "styled-components";
import { Btn1, TotalPos } from "../../../index";
export function AreaTecladoPos(){
    return(
    <Container>
        <section className="areatipopago">
            <article className="box">
                <Btn1 titulo="EFECTIVO"/>
                 <Btn1 titulo="DIVISA"/>
                <Btn1 titulo="TARJETA"/>
                <Btn1 titulo="PAGO MOVIL"/>
                 <Btn1 titulo="MIXTO"/>
            </article>
        </section>
        <section className="totales">
            <div className="subtotal">
                <span>Sub total: <strong>$9.99</strong></span>
                <span>IVA (16%): <strong>$0.00</strong></span>
                <span>Sub Total: <strong>$9.99</strong></span>
            </div>
            <TotalPos />

        </section>
    </Container>
    )
}
const Container = styled.div``