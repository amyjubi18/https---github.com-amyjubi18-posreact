import React, { useState } from "react";
import { v } from "../../../styles/variables";
import styled from "styled-components";
import { Btn1 } from "../../../index";
export const Paginacion = ({ table }) => {


  return (
    <Container >
   
      <Btn1 disabled={!table.getCanPreviousPage()} funcion={() => table.setPageIndex(0)} bgcolor="#56b2f4" icono={<v.iconotodos />} />

      <Btn1  disabled={!table.getCanPreviousPage()} funcion={() => table.previousPage()} bgcolor="#56b2f4" icono={<v.iconoflechaizquierda />} />


    
      <span>{table.getState().pagination.pageIndex + 1}</span>
      <p> de {table.getPageCount()} </p>

      <Btn1  disabled={!table.getCanNextPage()} funcion={() => table.nextPage()} bgcolor="#56b2f4" icono={<v.iconoflechaderecha />} />
      
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

 
`;