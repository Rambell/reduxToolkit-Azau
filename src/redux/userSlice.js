import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    username: "",
    email: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{                              /* las diferentes acciones para modificar el estado*/
        addUser: (state, action) => {       /* accion y datos */
            const {name,username,email} = action.payload; /* esto llega de la accion y luego modifica */
            state.name = name;
            state.username = username;
            state.email = email
        },
        changeEmail: (state, action) => {
            state.email = action.payload; /* solo llega el email por eso no de destructura */
        }
    }
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;