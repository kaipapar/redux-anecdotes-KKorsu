import { useDispatch } from "react-redux"

import { newAnec } from "../reducers/anecdoteReducer"
import {setNotif, clearNotif} from '../reducers/notificationReducer'
import anecService from '../services/anecdotes'

const NewAnec = () => {
    const dispatch = useDispatch()

    const addAnec = async (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        const anec = await anecService.createNew(content)
        dispatch(newAnec(anec))
        dispatch(setNotif(`You created: ${anec}`))
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