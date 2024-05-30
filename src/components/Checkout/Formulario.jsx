const Formulario = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <>
      <h2>Complete con sus datos para continuar</h2>
      <form className="form-checkout" onSubmit={handleSubmitForm}>
        <div className="box-input">
          <label>Nombre</label>
          <input type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeInput} />
        </div>

        <div className="box-input">
          <label>Telefono</label>
          <input
            type="text"
            name="telefono"
            value={datosForm.telefono}
            onChange={handleChangeInput}
          />
        </div>

        <div className="box-input">
          <label>Email</label>
          <input type="email" name="email" value={datosForm.email} onChange={handleChangeInput} />
        </div>

        <button type="submit" className="button-submit">
          Enviar Orden
        </button>
      </form>
    </>
  );
};
export default Formulario;
