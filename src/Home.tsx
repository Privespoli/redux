import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { agregarA, agregarB, reiniciar, agregars2 } from "./redux";
import type { RootState } from "./store";
import palabraReducer from "./redux"; //tentativamente para cambiar la variable

function Home() {
  const palabra = useSelector((state: RootState) => state.palabra.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home</h1>
       {palabra}
            <button
              onClick={() => {
                dispatch(agregarA());
              }}
            >
              AgregarA
            </button>
                  <button
              onClick={() => {
                dispatch(agregarB());
              }}
            >
              AgregarB
              </button>
              
              <button
              onClick={() => {
                dispatch(agregars2());
              }}
            >
              Agregars2
            </button>

            
                  <button
              onClick={() => {
                dispatch(reiniciar());
              }}
            >
              Reiniciar
            </button>
    </div>
  );
}

export default Home;