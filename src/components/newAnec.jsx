import { useDispatch } from "react-redux"

import { newAnec } from "../reducers/anecdoteReducer"
import {setNotif, clearNotif} from '../reducers/notificationReducer'


const NewAnec = () => {
    const dispatch = useDispatch()

    const addAnec = (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        dispatch(newAnec(content))
        dispatch(setNotif(`You created: ${content}`))
        setTimeout(() => dispatch(clearNotif()),5000)  
    }
    return (
        <div>
        <h2>create new</h2>
        <form onSubmit={addAnec}>
            <input name="anec"/>
            <button type="submit">create</button>
        </form>
        </div>
    )
}

export default NewAnec