import styled from "styled-components";
import {DotLoader} from "react-spinners";
export function Spinner1(){
    return(
        <Container>
            <DotLoader color={"#00b4eb"}  size={100} />
        </Container>);

}
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`