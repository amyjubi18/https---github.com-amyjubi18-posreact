import styled from "styled-components";
import {v} from "../../styles/variables";
import { Device } from "../../styles/breakpoints";

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
height: calc(100vh - 20px);
display: grid;
padding: 10px;
grid-template: "header" 220px
                "main" auto;
                @media ${Device.desktop}{
                    grid-template: "header header" 140px
                                    "main main"
                                    "footer footer";
                }
`;



const Main = styled.div`
    grid-area: main;
    background-color: #11b093;
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    overflow: hidden;
    gap: 10px;
        @media ${Device.desktop}{
        flex-direction: row;
    }
`;

