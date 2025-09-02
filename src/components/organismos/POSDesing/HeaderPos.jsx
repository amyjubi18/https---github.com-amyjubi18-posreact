import styled from "styled-components";
import {v} from "../../../styles/variables";
import { Btn1, InputText2, Reloj } from "../../../index";
import { Device } from "../../../styles/breakpoints";
export function HeaderPos(){
     return(
        <Header>
                <section className="contentprincipal">
                    <Contentuser className="area1">
                        <div className="contentimg">
                            <img src="https://i.ibb.co/rRh1WjT3/2148580033.jpg"/>
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
    display: flex;
    height: 100%;
    border-bottom:  2px solid ${({theme})=> theme.color2};
    flex-direction: column;
    gap: 10px;
    .contentprincipal{
        width: 100%;
        display: grid;
        grid-template: "area1 area2"
                        "area3 area3";
                        .area1{
                            grid-area: area1;
                        }
                        .area2{
                            grid-area: area2;
                        }
                        .area3{
                            grid-area: area3;
                        }
                    

        @media ${Device.desktop}{
            display: flex;
            justify-content: space-between;
        }
        .contentlogo{
            display: flex;
            align-items: center;
            font-weight: 700;
            img{
                width: 30px;
                object-fit: contain;
            }
        }
        
    }
    .contentbuscador{
        display: grid;

        grid-template: "area2 area2"
                        "area1 area1";
        gap: 10px;
        height: 100%;
        align-items: center;
        .area1{
            grid-area: area1;
        }
        .area2{
            grid-area: area2;
            display: flex;
            gap: 10px;;
        }
        @media ${Device.desktop}{
            display: flex;
            gap: 10px;
            .area1{
                width: 40vw;
            }
        }

    }

`;
const Contentuser = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    
        .contentimg{
            display: flex;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
                object-fit: cover;
            }
        }
        .textos{
            display: flex;
            flex-direction: column;
            .usuario{
                font-weight: 700;
            }        }
`