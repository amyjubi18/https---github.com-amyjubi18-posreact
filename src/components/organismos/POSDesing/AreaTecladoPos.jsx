import styled from "styled-components";
import { Btn1, TotalPos } from "../../../index";
import { Device } from "../../../styles/breakpoints";
import { Icon } from "@iconify/react/dist/iconify.js";

export function AreaTecladoPos(){
    return(
    <Container>
        <section className="areatipopago">
            <article className="box">
                <Btn1 titulo="EFECTIVO" border="2px" heigth="70px" width="100%" icono={<Icon icon="streamline-ultimate-color:cash-payment-bills-1" width="24" height="24" />} bgcolor="#56a24dd6"/>
                 <Btn1 titulo="DIVISA" border="2px" heigth="70px" width="100%" icono={<Icon icon="streamline-ultimate-color:cash-payment-coin-dollar" width="24" height="24" />} bgcolor="#f5e109eb"/>
            </article>
            <article className="box">
                <Btn1 titulo="TARJETA" border="2px" heigth="70px"  width="100%" icono={<Icon icon="fluent-emoji-flat:credit-card" width="24" height="24" />} bgcolor="#59c0f8f0"/>
                <Btn1 titulo="PAGO MOVIL" border="2px" heigth="70px "  width="100%" icono={<Icon icon="noto:mobile-phone" width="24" height="24" />} bgcolor="#f24040fc"/>
            </article>
            <article className="box">
                 <Btn1 titulo="MIXTO" border="2px" heigth="70px"  width="100%" icono={<Icon icon="ix:mix" width="24" height="24" />} color="#032a6d" bgcolor="#8a4da2d5"/>
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
const Container = styled.div`
     border:  2px solid ${({theme})=> theme.color2};
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     position: absolute;
     bottom: 10px;
     width: calc(100% - 5px);
     border-radius: 15px;
     @media ${Device.desktop}{
        position: relative;
        width: auto;
        bottom: initial;
     }
     .areatipopago{
        display: none;
         @media ${Device.desktop}{
            display: initial;
         }
         .box{
            display: flex;
            gap: 20px;
            margin: 10px;
         
         }
     }
     .totales{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        .subtotal{
            display: none;
            flex-direction: column;
            justify-content: end;
            text-align: end;
            gap: 10px;
            font-weight: 500;
            @media ${Device.desktop}{
                display: flex;
            }
        }
     }
`