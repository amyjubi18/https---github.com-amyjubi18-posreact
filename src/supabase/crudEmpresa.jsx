import Swal from "sweetalert2";
import { supabase } from "../index";
const tabla = "empresa";
export async function InsertarEmpresa(p) {
    const { data, error } = await supabase
        .from(tabla)
        .insert(p)
        .select()
        .maybeSingle();
    if (error) {
        // Registrar el error para depuración
        //console.error('Error al insertar empresa:', error.message);
        // Opcionalmente mostrar una alerta al usuario
       /*  Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message    
        }); */
        // Devolver un objeto que indique el fallo
        return;
    }
    return data;
}