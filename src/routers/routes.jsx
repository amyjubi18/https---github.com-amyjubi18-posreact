import { Route, Routes } from "react-router-dom";
import {Categorias, Configuraciones, Home, Login, ProtectedRoutes, UserAuth} from "../index";

export function MyRoutes(){
    const {user} =UserAuth();
    return(
        
        <Routes>
            <Route element={<ProtectedRoutes user={user} redirectTo="/login"/>}>
                <Route path="/" element={<Home />} />
                <Route path="/configuracion" element={<Configuraciones />} />
                <Route path="/configuracion/categorias" element={<Categorias />} />
            </Route>
            
            <Route path="/login" element={<Login />} />
        </Routes>
    )

}