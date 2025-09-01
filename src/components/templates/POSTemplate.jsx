import styled from "styled-components";
import { Device } from "../../styles/breakpoints";
import {v} from "../../styles/variables";
import { Btn1, InputText2, Reloj, HeaderPos } from "../../index";
export function POSTemplate(){
    return(
        <Container>
            <HeaderPos />
            <Main>
                <AreaDetalleventa>
                    <Itemventa>
                        <article className="contentdescripcion">
                            <span className="descripcion">Mona china - $9.99</span>
                            <span>📍Stock: 34 UND :</span>
                        </article>
                        <article>
                            <span className="detalle">
                                🔸<strong>Cant:</strong> 1 UND <strong>Importe:</strong> $9.99
                            </span>
                        </article>
                    </Itemventa>
                </AreaDetalleventa>
                
            </Main>
            <Footer>

            </Footer>
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
const Itemventa = styled.section`

    `;
const AreaDetalleventa = styled.section`
    
`;
const Contentuser = styled.div`

`

const Main = styled.div`
    grid-area: main;
    background-color: #11b093;
`;
const Footer = styled.div`
    grid-area: footer;
    background-color: #a3a3fc;
    display: none;
    @media ${Device.desktop}{
        display: flex;
    }
`;
