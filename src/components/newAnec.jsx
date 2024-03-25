import { useDispatch } from "react-redux"

import { newAnec } from "../reducers/anecdoteReducer"

const NewAnec = () => {
    const dispatch = useDispatch()

    const addAnec = (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        dispatch(newAnec(content))
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