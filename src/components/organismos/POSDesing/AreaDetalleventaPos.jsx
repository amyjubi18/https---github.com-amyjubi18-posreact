import styled from "styled-components";
export function AreaDetalleventaPos(){
    return(
         <AreaDetalleventa>
                    <Itemventa>
                        <article className="contentdescripcion">
                            <span className="descripcion">Mona china - $9.99</span>
                            <span>📍Stock: 34 UND :</span>
                        </article>
                        <article>
                            <span className="detalle">
                                🔸<strong>Cant:</strong> 1 UND <strong>Importe:</strong> $9.99
                            </span>
                        </article>
                    </Itemventa>
                </AreaDetalleventa>
    );
}

const Itemventa = styled.section`

    `;
const AreaDetalleventa = styled.section`
    
`;