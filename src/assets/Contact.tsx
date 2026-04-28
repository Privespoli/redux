import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { agregarA, agregarB, reiniciar } from "./redux";
import type { RootState } from "./store";


function Contact() {
  const palabra = useSelector((state: RootState) => state.palabra.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Contact</h1>
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
          dispatch(reiniciar());
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}

export default Contact;
