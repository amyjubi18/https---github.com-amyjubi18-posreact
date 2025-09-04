import { Route, Routes } from "react-router-dom";
import {
    Categorias, 
    Configuraciones, 
    Home, 
    Login, 
    ProtectedRoutes, 
    Productos,
    POS,
    Layout
} from "../index";

export function MyRoutes(){
    
    return(
        
        <Routes>
            <Route path="/login" element={
                <ProtectedRoutes accessBy="non-authenticated">
                    <Login />
                </ProtectedRoutes>
            }/>
         
            <Route 
            path="/" 
            element={
                <ProtectedRoutes accessBy="authenticated" >
                    <Layout>
                        <Home />
                    </Layout>
                </ProtectedRoutes>
            }
            />
            <Route 
            path="/configuracion" 
            element={
                <ProtectedRoutes accessBy="authenticated" >
                    <Layout>
                        <Configuraciones />
                    </Layout>
                </ProtectedRoutes>
            }
            />
            <Route 
            path="/configuracion/categorias" 
            element={
                <ProtectedRoutes accessBy="authenticated" >
                    <Layout>
                        <Categorias />
                    </Layout>
                </ProtectedRoutes>
            }
            />
            <Route 
            path="/configuracion/productos" 
            element={
                <ProtectedRoutes accessBy="authenticated" >
                    <Layout>
                        <Productos />
                    </Layout>
                </ProtectedRoutes>
            }
            />
            <Route 
            path="/pos" 
            element={
                <ProtectedRoutes accessBy="authenticated" >
                    <Layout>
                        <POS />
                    </Layout>
                </ProtectedRoutes>
            }
            />
               
                {/* <Route path="/" element={<Home />} />
                <Route path="/configuracion" element={<Configuraciones />} />
                <Route path="/configuracion/categorias" element={<Categorias />} />
                <Route path="/configuracion/productos" element={<Productos />} />
                <Route path="/pos" element={<POS />} /> */}
            
            
        </Routes>
    )

}