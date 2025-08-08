import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { MostrarUsuarios, InsertarEmpresa, InsertarAdmin, MostrarTipoDocumentos, MostrarRolesXnombre } from "../index";


const AuthContext = createContext();
export const AuthContextProvider = ({children}) =>{
    //
    const [user, setUser] = useState(null);
    const [sessionStatus, setSessionStatus] = useState(0);
    //useEffect hace cambio dos veces
    useEffect(()=>{
        if(sessionStatus==0 || user){
            return;
        }
        setSessionStatus(1)})

        const {data} =supabase.auth.onAuthStateChange(async(event,session)=>{
            if(session==null){
                setUser(null)
            }else{
            
                
                setUser(session?.user)
                //pruebo?

                console.log("session", session.user)
                insertarDatos(session?.user.id,session?.user.email);
            }
            //console.log(event,session);
           
        return ()=>{
            data.subscription;
        }
    },[]);

    const insertarDatos = async (id_auth, correo) => {
        const response = await MostrarUsuarios({id_auth:id_auth}); 
        if (response) {
            console.log('El usuario ya existe:', response);
        } else {
            console.log('El usuario no existe', response);
            const responseEmpresa = await InsertarEmpresa({id_auth:id_auth});

           const responseTipoDoc =  await MostrarTipoDocumentos({id_empresa:responseEmpresa?.id});
                console.log('respuesta tipodoc', responseTipoDoc);

                const responseRol = await MostrarRolesXnombre({nombre:"superadmin"});
                
               const pUser   = {
                    id_tipodocumento:responseTipoDoc?.id,
                    id_rol:responseRol?.id,
                    correo:correo,
                    fecharegistro: new Date(),
                    id_auth:id_auth,
                };  
                await InsertarAdmin(pUser);
            //crea todo eso en las tablas
        }
    };
    //


    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
};
export const UserAuth = () => {
    return useContext(AuthContext);

}