import { createSlice } from '@reduxjs/toolkit'

const initialState = 'Welcome!'
const notifSlice = createSlice({
    name: Notification,
    initialState,
    reducers: {
        setNotif(state, action){
            console.log('notification: ',action)
            return action.payload
        }
    }
})


export const {setNotif} = notifSlice.actions
export default notifSlice.reducer