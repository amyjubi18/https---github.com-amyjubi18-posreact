import { create } from "zustand";
import { EliminarAlmacen, InsertarStockAlmacenes, MostrarStockAlmacenXSucursal } from "../index";

export const useAlmacenesStore = create((set) =>({
    dataalmacen:[],
    mostrarAlmacen: async (p) => {
       const response = await MostrarStockAlmacenXSucursal(p);
        set({dataalmacen:response});
        return response;
    },
    insertarStockAlmacenes: async (p) => {
        await InsertarStockAlmacenes(p);
        
    },
    eliminarAlmacen: async(p)=>{
        await EliminarAlmacen(p);
    }
}))