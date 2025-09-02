import styled from "styled-components";
import { Device } from "../../../styles/breakpoints";
import { Btn1 } from "../../../index";
export function FooterPos(){
return(
<Footer>
    <article className="content">
        <Btn1 titulo="Eliminar"/>
        <Btn1 titulo="Ver ventas del dia y Devoluciones"/>
    </article>

</Footer>   
)
}
const Footer = styled.section`
    grid-area: footer;
    background-color: #a3a3fc;
    display: none;
    @media ${Device.desktop}{
        display: flex;
    }
`;