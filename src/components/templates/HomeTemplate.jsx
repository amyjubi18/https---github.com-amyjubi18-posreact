import styled from "styled-components"
import { useAuthStore } from "../../store/AuthStore";
import { UserAuth } from "../../context/AuthContent";
import { v } from "../../styles/variables";
export function HomeTemplate() {
  const {cerrarSesion, loginGoogle} = useAuthStore();
  //const {user} = UserAuth();
  return (
  <Container>
    <button onClick={cerrarSesion}>Cerrar</button>
    <button onClick={loginGoogle}><v.iconogoogle/> Iniciar sesión con Google</button>
    
  </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`