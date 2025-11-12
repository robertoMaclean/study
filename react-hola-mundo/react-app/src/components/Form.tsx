import { FormEvent } from "react";

type Props = {};

function Form() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Enviando...");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input type="text" id="name" className="form-constrol" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input type="text" id="lastnamea" className="form-constrol" />
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Form;
