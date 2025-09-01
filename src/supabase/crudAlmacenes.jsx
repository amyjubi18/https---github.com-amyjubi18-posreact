import Swal from "sweetalert2";
import { supabase } from "../index";
const tabla = "almacenes";
export async function InsertarStockAlmacenes(p) {
  const { error,data } = await supabase
  .from(tabla)
  .insert(p)
  ;
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
    return;
  }
   console.log(data)
  return data;
}
export async function MostrarStockAlmacenXSucursal(p) {
const {data} = await supabase
.from(tabla)
.select()
.eq('id_producto',p.id_producto)
.eq('id_sucursal',p.id_sucursal)
.maybeSingle();
return data;
}
export async function EliminarAlmacen(p){
  const {error} = await supabase
  .from(tabla)
  .delete()
  .eq('id',p.id);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
    return;
  }
}