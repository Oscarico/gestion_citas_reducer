import { useEffect, useReducer } from "react";
import { CalendarioCitas } from "./components/calendarioCitas";
import { SelectorCitas } from "./components/SelectorCitas";
import { citasReducer, initialState } from "./reducers/citasReducer";


function App() {

  const [state, dispatch] = useReducer(citasReducer, initialState);

  useEffect(() => {
    localStorage.setItem('listaDeCitas', JSON.stringify(state.listaDeCitas));
  }, [state.listaDeCitas]);

  return (
    <>
      <header className="bg-yellow-200">
        <h1 className="text-3xl font-bold text-center py-4">
          Gestión de Citas Médicas
        </h1>
      </header>
      <main className="grow">
        <div className="bg-orange-300 flex justify-center items-center">
          <CalendarioCitas state={state} dispatch={dispatch} />
        </div>
        <div className="bg-orange-300 flex justify-center items-center">
          <SelectorCitas state={state} dispatch={dispatch} />
        </div>
      </main>
      <footer className="bg-slate-400 flex justify-center items-center w-full py-8 mt-auto">
        <p>Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
