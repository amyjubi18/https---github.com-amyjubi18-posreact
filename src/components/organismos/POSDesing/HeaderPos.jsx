import styled from "styled-components";
import {v} from "../../../styles/variables";
import { Btn1, InputText2, Reloj } from "../../../index";
export function HeaderPos(){
     return(
        <Header>
                <section className="contentprincipal">
                    <Contentuser className="area1">
                        <div className="contentimg">
                            <img src="https://i.ibb.co/rRh1WjT3/2148580033.jpg"/>
                            <h1>img</h1>
                        </div>
                        <div className="textos">
                            <span className="usuario">Amy</span>
                            <span>🗳️Cajero</span>
                        </div>
                    </Contentuser>
                    <article className="contentlogo area2">
                        <img src={v.logo}/>
                        <span>Sistema POS</span>
                    </article>
                    <article className="contentfecha area3">
                        <Reloj />
                    </article>
                </section>
                <section className="contentbuscador">
                    <article className="area1">
                        <InputText2>
                        <input type="text" className="form__field" placeholder="Buscar..."/>
                        </InputText2>
                    </article>
                    <article className="area2">
                        <Btn1 titulo="Lector"/>
                        <Btn1 titulo="Teclado"/>
                    </article>
                </section>
            </Header>
);}
const Header = styled.header`
    grid-area: header;
    background-color: #ffadad;

`;
const Contentuser = styled.div`

`