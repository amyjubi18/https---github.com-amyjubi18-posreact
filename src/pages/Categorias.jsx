import { useQuery } from "@tanstack/react-query";
import { CategoriasTemplate, Spinner1, useCategoriaStore, useEmpresaStore } from "../index";

export function Categorias(){
    const {mostrarCategorias, buscarCategorias, buscador} = useCategoriaStore()
    const {dataempresa} = useEmpresaStore()
    const {isLoading, error} = useQuery({queryKey:["mostrar categorias", dataempresa?.id],queryFn:()=>mostrarCategorias({id_empresa:dataempresa?.id}),enabled:!!dataempresa?.id,refetchOnWindowFocus:false})

    //buscar categorias
    const {} = useQuery({queryKey:["buscar categorias", buscador],queryFn:()=>buscarCategorias({id_empresa:dataempresa?.id,nombre:buscador}),enabled:!!dataempresa?.id,refetchOnWindowFocus:false})
    if(isLoading){
        return (<Spinner1/>)
    }if(error){
        return (<span>Error...</span>)
    }
    return (<CategoriasTemplate />);
}