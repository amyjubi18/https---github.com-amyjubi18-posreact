import { useState } from "react";
import styled from "styled-components";
import { Sidebar, SwitchHamburguesa, useEmpresaStore, useUsuariosStore, Spinner1 
     } from "../index";
import { Device } from "../styles/breakpoints";
import { useQuery } from "@tanstack/react-query";

export function Layout({children}){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const {datausuarios,mostrarusuarios} = useUsuariosStore();
    const { mostrarempresa} = useEmpresaStore();
    const {isLoading,error} = useQuery({
        queryKey:["mostrar usuarios",],queryFn:mostrarusuarios, refetchOnWindowFocus:false
    });
    useQuery({
        queryKey:["mostrar empresa",datausuarios?.id],
        queryFn:()=>mostrarempresa({ _id_usuario:datausuarios?.id}),
        enabled:!!datausuarios,refetchOnWindowFocus:false
    });

    if(isLoading){
         return (<Spinner1 />);
        }
        if(error){
            return (<span>error...</span>)
        }   
    return(
        <Container className={sidebarOpen?'active':''}>
            
            <section className='contentSidebar'>
            <Sidebar state={sidebarOpen} setState={ () => setSidebarOpen(!sidebarOpen)}
            />
            </section>
            <section className='contentMenuhambur'>
           <SwitchHamburguesa/>
            </section>
            <Containerbody>
                {children}
            </Containerbody>
            
          </Container>
    )
}
const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    transition: 0.1s ease-in-out;
    color:${({theme})=>theme.text};
 
    .contentSidebar{
      display: none;
    }
    .contentMenuhambur{
      position: absolute;
    }

    @media ${Device.tablet} {
      grid-template-columns: 88px 1fr;
      &.active{
        grid-template-columns:260px 1fr;
      }
      .contentSidebar{
        display: initial;
      }
      .contentMenuhambur{
        display: none;
      }
      
      

    }
  `
const Containerbody = styled.section`
grid-column: 1;
      width: 100%;
      @media ${Device.tablet} {
        grid-column: 2;
      }
`;