import { useDispatch } from "react-redux"

import { createAnec } from "../reducers/anecdoteReducer"
import anecService from '../services/anecdotes'

const NewAnec = () => {
    const dispatch = useDispatch()

    const addAnec = async (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        dispatch(createAnec(content)) 
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