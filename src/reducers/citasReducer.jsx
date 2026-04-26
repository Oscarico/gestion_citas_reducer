import { citas_db } from "../data/citas_db"

const localStorageCitas = () => {
    const citas = localStorage.getItem('listaDeCitas');
    try {
        return citas ? JSON.parse(citas) : citas_db;
    } catch (e) {
        return citas_db;
    }
}

// estado inicial del reducer
export const initialState = {
    listaDeCitas: localStorageCitas(),
    seleccionarCita: '',
}

// reducer para manejar las acciones relacionadas con las citas
export const citasReducer = (state, action) => {

    if (action.type === 'SELECT_CITA') {
        const seleccionarCita = state.listaDeCitas.find(cita => cita.id === action.id);
        return {
            ...state,
            seleccionarCita
        }
    }

    if (action.type === 'ACTUALIZAR_CITA') {
        const listaDeCitas = state.listaDeCitas.map(cita => cita.id === action.id ? {...cita, available: action.available} : cita);
        return {
            ...state,
            listaDeCitas
        }
    }

    if (action.type === 'RESERVAR_CITA') {
        const listaDeCitas = state.listaDeCitas.map(cita => cita.id === action.id ? {...cita, available: false} : cita);
        return {
            ...state,
            listaDeCitas
        }
    }

    if (action.type === 'CANCELAR_CITA') {
        const listaDeCitas = state.listaDeCitas.map(cita => cita.id === action.id ? {...cita, available: true} : cita);
        return {
            ...state,
            listaDeCitas
        }
    }

    if (action.type === 'RESET_FORM') {
        return {
            ...state,
            listaDeCitas: citas_db,
            seleccionarCita: ''
        }
    }
}
