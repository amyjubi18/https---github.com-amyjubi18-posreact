import { useQuery } from "@tanstack/react-query";
import { 
    ProductosTemplate, Spinner1, useCategoriaStore, useEmpresaStore, useProductosStore,
    useSucursalesStore
 } from "../index";
export function Productos(){
    const {mostrarCategorias} = useCategoriaStore();
    const {mostrarSucursales} = useSucursalesStore();
    const {mostrarProductos, buscarProductos, buscador} = useProductosStore();
    const {dataempresa} = useEmpresaStore();
    const {isLoading, error, refetch} = useQuery({
        queryKey: ["mostrar productos", dataempresa?.id],
        queryFn: () => mostrarProductos({id_empresa: dataempresa?.id,refetchs:refetch}),
        enabled: !!dataempresa?.id,
        refetchOnWindowFocus: false,
    });
    //buscar productos
     useQuery({
        queryKey: ["buscar productos", buscador],
        queryFn: () => 
            buscarProductos({id_empresa: dataempresa?.id, buscador: buscador}),
        enabled: !!dataempresa,
        refetchOnWindowFocus: false,
        });
    //mostrar sucursales
        useQuery({
        queryKey: ["mostrar sucursales", dataempresa?.id],
        queryFn: () => mostrarSucursales({id_empresa: dataempresa?.id}),
        enabled: !!dataempresa?.id,
        refetchOnWindowFocus: false,
    });
    //mostrar categorias
    useQuery({
        queryKey: ["mostrar categorias", dataempresa?.id],
        queryFn: () => mostrarCategorias({id_empresa: dataempresa?.id}),
        enabled: !!dataempresa?.id,
        refetchOnWindowFocus: false,
    });


        if(isLoading){
            return <Spinner1 />;
        }if(error){
            return <span>error...</span>
        }
        return <ProductosTemplate/>


}