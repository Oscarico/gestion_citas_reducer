

export const SelectorCitas = ({ state, dispatch }) => {

    const { listaDeCitas, seleccionarCita } = state;

  return (
    <>
      <div>
        <div className=" bg-rose-400 m-10 p-4 rounded-lg">
          <label
            htmlFor="citas"
            className=" block text-center font-semibold text-gray-800 mb-5"
          >
            Seleccione una cita:
          </label>
          <select 
            id="citas" 
            value={seleccionarCita ? seleccionarCita.id : ''} 
            onChange={(e) => dispatch({type: 'SELECT_CITA', id: Number(e.target.value)})}
            className=" block mx-auto px-3 py-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Seleccione...</option>
            {listaDeCitas.map((cita) => (
              <option key={cita.id} value={cita.id} disabled={!cita.available}>
                {cita.date}, {cita.time}, {cita.available ? "Disponible" : "No Disponible"}
              </option>
            ))}
          </select>
        </div>

        <div className=" bg-green-400 m-10 p-4 rounded-lg">
          <button className=" bg-slate-500 px-2 py-1 ml-4 text-white rounded" onClick={() => dispatch({type: 'RESERVAR_CITA', id: seleccionarCita.id})}>
            Reservar Cita
          </button>
          <button onClick={() => dispatch({type: 'RESET_FORM'})} className=" bg-red-600 ml-4 px-2 py-1 text-white rounded" >
            Resetear Formulario
          </button>
        </div>
      </div>
    </>
  );
};
