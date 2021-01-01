import { createContext, useReducer } from "react";
import axios from "axios";
//Reducer

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            console.log(state)
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }

        case 'DELETE':
            return {
                ...state,
                transactions: state.transactions.filter(trans => trans._id !== action.payload)
            }
        case 'ADD':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state
    }
}









const initialState = {
    transactions: [],
    error: null,
    loading: true
};
//Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //Actions

    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error,
            })
        }
    }
    async function deleteTransaction(id) {
        await axios.delete(`/api/v1/${id}`)
        try {
            dispatch({
                type: 'DELETE',
                payload: id,
            })

        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: error.response.data.error,
            })
        }
    }
    async function addTransaction(trans) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/v1/', trans, config)
            dispatch({
                type: 'ADD',
                payload: trans,
            })

        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error,
            })
        }
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            loading: state.loading,
            error: state.error,
            getTransactions,

            deleteTransaction,
            addTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}