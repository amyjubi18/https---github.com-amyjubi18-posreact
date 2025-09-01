import { Route, Routes } from "react-router-dom";
import {
    Categorias, 
    Configuraciones, 
    Home, 
    Login, 
    ProtectedRoutes, 
    Spinner1, 
    useEmpresaStore, 
    UserAuth, 
    useUsuariosStore, 
    Productos,
    POS
} from "../index";
import { useQuery } from "@tanstack/react-query";

export function MyRoutes(){
    const {user} =UserAuth();
    const {datausuarios,mostrarusuarios} = useUsuariosStore();
    const {dataempresa, mostrarempresa} = useEmpresaStore();
    const {isLoading,error} = useQuery({
        queryKey:["mostrar usuarios",],queryFn:mostrarusuarios, refetchOnWindowFocus:false
    });
    const {data:dtempresa} = useQuery({
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
        
        <Routes>
            <Route element={<ProtectedRoutes user={user} redirectTo="/login"/>}>
                <Route path="/" element={<Home />} />
                <Route path="/configuracion" element={<Configuraciones />} />
                <Route path="/configuracion/categorias" element={<Categorias />} />
                <Route path="/configuracion/productos" element={<Productos />} />
                <Route path="/pos" element={<POS />} />
            </Route>
            
            <Route path="/login" element={<Login />} />
        </Routes>
    )

}