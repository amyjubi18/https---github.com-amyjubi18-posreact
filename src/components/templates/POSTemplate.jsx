import styled from "styled-components";
import {v} from "../../styles/variables";
import {  HeaderPos, AreaDetalleventaPos, AreaTecladoPos, FooterPos } from "../../index";
export function POSTemplate(){
    return(
        <Container>
            <HeaderPos />
            <Main>
               <AreaDetalleventaPos />
                <AreaTecladoPos />
            </Main>
            <FooterPos />
        </Container>
    )
}
const Container = styled.div`
height: 100vh;
display: grid;
grid-template: "header"
                "main";
                @media ${Device.desktop}{
                    grid-template: "header header"
                                    "main main"
                                    "footer footer";
                }
`;



const Main = styled.div`
    grid-area: main;
    background-color: #11b093;
`;

