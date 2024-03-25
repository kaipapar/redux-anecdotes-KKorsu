import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/actionReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        console.log(event)
        dispatch(filterChange(event))
    }
    const style = {
        marginBottom: 10
    }
    return (
        <div style={style}>
            filter <input onChange={({target}) => handleChange(target.value)}/>
        </div>
    )
}
export default Filter