import styled from "styled-components"
import {Btn1, Footer, InputText2, Title, useAuthStore} from '../../index'
import { Linea } from "../atomos/Linea";
import {v} from '../../styles/variables';
import { Device } from "../../styles/breakpoints";
//import { useEmpresaStore } from "../../store/EmpresaStore";
export  function LoginTemplate() {
    const {loginGoogle} = useAuthStore();
    
    return (
      <Container>
            <div className="card">
                <ContentLogo>
                    <img src={v.logo} alt="" />
                    <span>Sistema POS</span>
                </ContentLogo>
            <Title $paddingbottom="20px">Ingresar</Title>
            <form>
                <InputText2>
                    <input className="form__field" type="text" placeholder="Correo Electronico"/>
                </InputText2>
                <InputText2>
                    <input className="form__field" type="password" placeholder="Contraseña"/>
                </InputText2>
        
                <Btn1 titulo='INGRESAR' bgcolor="#1cb0f6" color="255,255,255" width="100%"/>
            </form>
            
            <Linea>
                <span>0</span>
            </Linea>

            <Btn1 funcion={loginGoogle} titulo='Google' bgcolor='#fff' icono={<v.iconogoogle/>} width='100%'/>
           
            </div>
            <Footer />  
        
      </Container>
    );
  
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 0 10px;
    color:${({theme})=>theme.text};
    
        .card{
            display: flex;
            flex-direction: column;
            //align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            margin: 20px;
            @media ${Device.tablet}{
                width:400px;
                
            }
        }
    
  `;
  const ContentLogo = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    span{
        font-weight: 700;
    }
    img{
        width: 10%;
    }

  `;