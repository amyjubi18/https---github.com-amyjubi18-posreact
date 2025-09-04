import styled from "styled-components";
import {v} from "../../../styles/variables";
import { Btn1, InputText2, ListaDesplegable, Reloj, useProductosStore } from "../../../index";
import { Device } from "../../../styles/breakpoints";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
export function HeaderPos(){
    const [stateLector, setStateLector] = useState(true);
    const [stateTeclado, setStateTeclado] = useState(false);
    const [stateListaproductos, setStateListaproductos] = useState(false);
    const {setBuscador, dataProductos, selectProductos} = useProductosStore();
    const buscadorRef= useRef(null);
    function focusclick(){
        buscadorRef.current.focus();
        buscadorRef.current.value.trim() === ""?setStateListaproductos(false):setStateListaproductos(true)
    } 
    function buscar(e){
        setBuscador(e.target.value);
        let texto= e.target.value;
        if(texto.trim()==="" || stateLector){
            setStateListaproductos(false)
        }else{
            setStateListaproductos(true)
        }
    }
    useEffect(() =>{
        buscadorRef.current.focus();
    },[])
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
                        
                        <input ref={buscadorRef} onChange={buscar} type="text" className="form__field" placeholder="Buscar..." />
                        <ListaDesplegable funcion={selectProductos} setState={()=>setStateListaproductos(!stateListaproductos)} data={dataProductos} state={stateListaproductos} />
                        </InputText2>
                    </article>
                    <article className="area2">
                        <Btn1
                        funcion={()=>{
                            setStateLector(true);
                            setStateTeclado(false);
                            setStateListaproductos(false);
                            focusclick()
                        }} 
                        bgcolor={stateLector?"#032a6d":({theme})=> theme.bgtotal} 
                        color={stateLector?"#fff":({theme})=> theme.text} 
                        border="2px" 
                        titulo="Lector" 
                        icono={<Icon icon="material-symbols:barcode-reader-outline" width="24" height="24"   
                        />}/>
                        <Btn1 
                        funcion={()=>{
                            setStateLector(false);
                            setStateTeclado(true);
                            focusclick()
                        }} 
                        bgcolor={stateTeclado?"#032a6d":({theme})=> theme.bgtotal} 
                        color={stateTeclado?"#fff":({theme})=> theme.text} 
                        border="2px" 
                        titulo="Teclado" 
                        icono={<Icon icon="icon-park:enter-the-keyboard" width="24" height="24" />}/>
                    </article>
                </section>
            </Header>
);}
const Header = styled.header`
    grid-area: header;
    //background-color: #ffadad;
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 10px;
    @media ${Device.desktop}{
            border-bottom:  2px solid ${({theme})=> theme.color2};

    }
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