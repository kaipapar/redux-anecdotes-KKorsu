import { useDispatch } from "react-redux"

import { createAnec } from "../reducers/actionReducer"

const NewAnec = () => {
    const dispatch = useDispatch()

    const addAnec = (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
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