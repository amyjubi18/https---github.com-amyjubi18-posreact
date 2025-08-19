import styled from "styled-components";
import { v } from "../../../styles/variables";
//import { useEffect, useRef, useState } from "react";
import {
    InputText,
  Btn1,
  ConvertirCapitalize,
  useProductosStore,
  ContainerSelector,
  Switch1,
  Selector,
  useSucursalesStore,
  ListaDesplegable,
} from "../../../index";
import { useForm } from "react-hook-form";
import { useEmpresaStore } from "../../../store/EmpresaStore";
import { useMutation } from "@tanstack/react-query";
import {Device} from "../../../styles/breakpoints";
import { useState } from "react";

export function RegistrarProductos({
  onClose,
  dataSelect,
  accion,
  setIsExploding,
})
{
    const {insertarProductos, editarProductos} = useProductosStore();
    const {dataempresa} = useEmpresaStore();
    const [stateInventarios, setStateInventarios] = useState(false);
    const [stateSucursalesLista, setStateSucursalesLista] = useState(false);
    const {sucursalesItemSelect, dataSucursales} =useSucursalesStore();


const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
const { isPending, mutate: doInsertar } = useMutation({
    mutationFn: insertar,
    mutationKey: "insertar productos",
    onError: (err) => console.log("El error", err.message),
    onSuccess: () => cerrarFormulario(),
});
const handlesub = (data) => {
    doInsertar(data);
};
const cerrarFormulario = () => {
        onClose();
        setIsExploding(true);
};
async function insertar(data) {
    if (accion === "Editar") {
        const p = {
          _id: dataSelect.id,
          _nombre: ConvertirCapitalize(data.producto),
          _id_empresa: dataempresa.id,
        };
        await editarProductos(p);
      } else {
        const p = {
          _nombre: ConvertirCapitalize(data.producto),
          _id_empresa: dataempresa.id,
        };
        await insertarProductos(p);
     }
    }
return (
    <Container>
      {isPending ? (
        <span>...🔼</span>
      ) : (
        <div className="sub-contenedor">
          <div className="headers">
            <section>
              <h1>
                {accion == "Editar"
                  ? "Editar productos"
                  : "REGISTRAR NUEVO PRODUCTO"}
              </h1>
            </section>

            <section>
              <span
                onClick={() => {
                  onClose();
                }}
              >
                x
              </span>
            </section>
          </div>

          <form className="formulario" onSubmit={handleSubmit(handlesub)}>

            <section className="seccion1">
                <article>
                <InputText icono={<v.iconoflechaderecha />}>
                  <input
                    className="form__field"
                    defaultValue={dataSelect.nombre}
                    type="text"
                    placeholder="Nombre"
                    {...register("nombre", {
                      required: true,
                    })}
                  />
                  <label className="form__label">Nombre</label>
                  {errors.descripcion?.type === "required" && (
                    <p>Campo requerido</p>
                  )}
                </InputText>

              </article>
              <article>
                <InputText icono={<v.iconoflechaderecha />}>
                  <input
                    className="form__field"
                    defaultValue={dataSelect.nombre}
                    step="0.01"
                    type="number"
                    placeholder="Precio Venta"
                    {...register("precio_venta", {
                      required: true,
                    })}
                  />
                  <label className="form__label">Precio Venta</label>
                  {errors.descripcion?.type === "required" && (
                    <p>Campo requerido</p>
                  )}
                </InputText>

              </article>
              <article>
                <InputText icono={<v.iconoflechaderecha />}>
                  <input
                    className="form__field"
                    defaultValue={dataSelect.nombre}
                    step="0.01"
                    type="number"
                    placeholder="Precio Compra"
                    {...register("precio_compra", {
                      required: true,
                    })}
                  />
                  <label className="form__label">Precio Compra</label>
                  {errors.descripcion?.type === "required" && (
                    <p>Campo requerido</p>
                  )}
                </InputText>

              </article>
              <article>
                <InputText icono={<v.iconoflechaderecha />}>
                  <input
                    className="form__field"
                    defaultValue={dataSelect.nombre}
                    step="1"
                    type="text"
                    placeholder="Código de Barra"
                    {...register("codigo_barra", {
                      required: true,
                    })}
                  />
                  <label className="form__label">Codigo de Barra</label>
                  {errors.descripcion?.type === "required" && (
                    <p>Campo requerido</p>
                  )}
                </InputText>

              </article>
              <article>
                <InputText icono={<v.iconoflechaderecha />}>
                  <input
                    className="form__field"
                    defaultValue={dataSelect.nombre}
                    step="1"
                    type="text"
                    placeholder="Código Interno"
                    {...register("codigo_interno", {
                      required: true,
                    })}
                  />
                  <label className="form__label">Codigo Interno</label>
                  {errors.descripcion?.type === "required" && (
                    <p>Campo requerido</p>
                  )}
                </InputText>

              </article>
              
            </section>
            <section className="seccion2">
              <ContainerSelector>
                <label>Controlar Stock:</label>
                <Switch1 
                state={stateInventarios} 
                setState={() => setStateInventarios(!stateInventarios)}/>
              </ContainerSelector>
              
              
              {stateInventarios && (
                <ContainerStock>
                      <ContainerSelector>
                        <label> Sucursal:</label>
                        <Selector
                        state={stateSucursalesLista}
                        funcion={() =>
                          setStateSucursalesLista(!stateSucursalesLista)
                        }
                        color="#1687cd"
                        texto1="🏬"
                        texto2={sucursalesItemSelect?.nombre}
                        />
                        <ListaDesplegable 
                           //refetch={refetch}
                      //funcion={selectSucursal}
                      state={stateSucursalesLista}
                      data={dataSucursales}
                      top="4rem"
                      setState={() =>
                        setStateSucursalesLista(!stateSucursalesLista)
                      }

                        />

                      </ContainerSelector>
                      <article>
                      <InputText icono={<v.iconoflechaderecha />}>
                        <input
                          className="form__field"
                          defaultValue={dataSelect.nombre}
                          /* step="0.01" */
                          type="number"
                          placeholder="Stock"
                          {...register("stock", {
                            required: true,
                          })}
                        />
                        <label className="form__label">Stock</label>
                        {errors.descripcion?.type === "required" && (
                          <p>Campo requerido</p>
                        )}
                      </InputText>

                    </article>
                     <article>
                      <InputText icono={<v.iconoflechaderecha />}>
                        <input
                          className="form__field"
                          defaultValue={dataSelect.nombre}
                          /* step="0.01" */
                          type="number"
                          placeholder="Stock Minimo"
                          {...register("stock_minimo", {
                            required: true,
                          })}
                        />
                        <label className="form__label">Stock Minimo</label>
                        {errors.descripcion?.type === "required" && (
                          <p>Campo requerido</p>
                        )}
                      </InputText>

                    </article>
                    </ContainerStock>)
                  }
              
            </section>

              

              <Btn1
              icono={<v.iconoguardar />}
              titulo="Guardar"
              bgcolor="#1687cd"
            />
            
          </form>
        </div>
      )}
    </Container>
  );
}
const Container = styled.div`
  transition: 0.5s;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(10, 9, 9, 0.5);
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .sub-contenedor {
    position: relative;
    width: 100%;
    max-width: 90%;
    background: ${({ theme }) => theme.bgtotal};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 13px 36px;
    z-index: 100;
    height: calc(100vh - 20px);
    overflow-y: auto;

    .headers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h1 {
        font-size: 20px;
        font-weight: 500;
      }
      span {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .formulario {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
      @media ${Device.tablet}{
        grid-template-columns: repeat(2,1fr);
      }
      
      .seccion1,
      .seccion2 {
        gap: 20px;
        display: flex;
        flex-direction: column;
      }
      .contentPadregenerar {
        position: relative;
      }
    }
  }
`;
const ContainerStock = styled.div`
  border: 1px solid rgba(8, 87, 160, 0.9);
  display: flex;
  border-radius: 15px;
  padding: 12px;
  flex-direction: column;
  background-color: rgba(46, 191, 240, 0.05);
`;
const ContainerBtngenerar = styled.div`
  position: absolute;
  right: 0;
  top: 10%;
`;
const ContainerMensajeStock = styled.div`
  text-align: center;
  color: #f9184c;
  background-color: rgba(249, 24, 61, 0.2);
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  font-weight: 600;
`; 