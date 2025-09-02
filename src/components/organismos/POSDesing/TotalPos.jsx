import styled from "styled-components";
import { Btn1 } from "../../../index";
import { Device } from "../../../styles/breakpoints";

export function TotalPos(){
    return (
        <Container>
            <section className="imagen">
                <img src="https://i.ibb.co/Xkj6P3wK/forma-de-corazon-negro.png" alt="forma-de-corazon-negro" border="0"/>
            </section>
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
border-radius: 15px;
display: flex;
justify-content: space-between;
text-align: center;
font-weight: 700;
font-size: 40px;
background-color: #3f7cf5;
padding: 10px;
color: #000000;
position: relative;
overflow: hidden;
&::after{
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background-color:#75a3ff;
    border-radius: 50%;
    top: -20px;
    left: -15px;

}
&::before{
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: ${({theme})=> theme.bgtotal};
    border-radius: 50%;
    top: 5px;
    right: 5px;
}
.imagen{
    z-index: 1;
    width: 55px;
    bottom: 30px;
    position: relative;
    @media ${Device.desktop}{
        bottom: initial;
    }
    img{
        width: 100%;
    }
}
.contentTotal{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    .contentTituloTotal{
        display: flex;
        margin-top: 30px;
        gap: 10px;
        @media ${Device.desktop}{
        display: none;
        }
    }
}

`