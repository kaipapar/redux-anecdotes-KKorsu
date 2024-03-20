import { useSelector, useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
    const handleChange = (event) => {
        console.log(event)
        filterChange(state, event)
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