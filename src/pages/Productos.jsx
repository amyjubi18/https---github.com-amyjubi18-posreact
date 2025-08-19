import { useQuery } from "@tanstack/react-query";
import { 
    ProductosTemplate, Spinner1, useEmpresaStore, useProductosStore,
    useSucursalesStore
 } from "../index";
export function Productos(){
    const {mostrarSucursales} = useSucursalesStore();
    const {mostrarProductos, buscarProductos, buscador} = useProductosStore();
    const {dataempresa} = useEmpresaStore();
    const {isLoading, error} = useQuery({
        queryKey: ["mostrar productos", dataempresa?.id],
        queryFn: () => mostrarProductos({id_empresa: dataempresa?.id}),
        enabled: !!dataempresa?.id,
        refetchOnWindowFocus: false,
    });
    //buscar productos
    const {} = useQuery({
        queryKey: ["buscar productos", buscador],
        queryFn: () => 
            buscarProductos({id_empresa: dataempresa?.id, buscador}),
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


        if(isLoading){
            return <Spinner1 />;
        }if(error){
            return <span>error...</span>
        }
        return <ProductosTemplate/>


}