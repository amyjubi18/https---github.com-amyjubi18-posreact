import styled from "styled-components";
export function CategoriasTemplate(){
    return (<Container>
        <section className="area1">

        </section>
        <section className="area2">
            
        </section>
        <section className="main">

        </section>
    </Container>);

}
const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template:
    "area1" 100px
    "area2" 100px
    "main" auto;
    padding: 15px;
    .area1{

    }
    .area2{

    }
    .main{
        
    }
  `;