import { useQuery } from "@tanstack/react-query";
import { POSTemplate } from "../index";
    
export function POS(){
        const {dataempresa} = usee();
        useQuery({
        queryKey: ["buscar productos", buscador],
        queryFn: () => 
            buscarProductos({id_empresa: dataempresa?.id, buscador: buscador}),
        enabled: !!dataempresa,
        refetchOnWindowFocus: false,
        });
    
    return(
        <POSTemplate/>
    );
}
