import { create } from "zustand";
import { BuscarCategoria, EditarCategoria, EliminarCategoria, InsertarCategorias, MostrarCategorias } from "../index";

export const useCategoriaStore= create((set,get)=>({
    buscador: "",
    setBuscador: (p) => {
        set({buscador: p})
    },
    datacategorias: [],
    categoriaItemSelect: [],
    parametros: {},
    mostrarCategorias: async (p) => {
        const response = await MostrarCategorias(p)
        set({parametros:p})
        set({datacategorias: response})
        set({categoriaItemSelect: response[0]})
        return response;
    
    },
    selectCategoria:(p)=>{
        set({categoriaItemSelect:p})
    
    },
    insertarCategorias: async(p,file)=>{
        await InsertarCategorias(p,file);
        const {mostrarCategorias} = get();
        const {parametros} = get();
        set(mostrarCategorias(parametros));
    },
    eliminarCategoria:async(p)=>{
        await EliminarCategoria(p)
        const {mostrarCategorias} = get();
        const {parametros} = get();
        set(mostrarCategorias(parametros));
    },
    editarCategoria:async(p,fileold,filenew)=>{
        await EditarCategoria(p,fileold,filenew)
        const {mostrarCategorias} = get();
        const {parametros} = get();
        set(mostrarCategorias(parametros));
    },
    buscarCategorias:async(p)=>{
        const response = await BuscarCategoria(p);
        set({datacategorias:response});
        return response;
    }

    
    
}))