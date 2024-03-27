import { createSlice } from '@reduxjs/toolkit'

const initialState = 'Welcome!'
const notifSlice = createSlice({
    name: Notification,
    initialState,
    reducers: {
        setNotif(state, action){
            console.log('notification: ',action)
            return action.payload
        },
        clearNotif(){
            return initialState
        }
    }
})


export const {setNotif, clearNotif} = notifSlice.actions
export default notifSlice.reducer