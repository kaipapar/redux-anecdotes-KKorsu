

const filterReducer = (state, filter) => {
    const byFilterField = x => {
        console.log(typeof x.name)
        return x.name.includes(filter);
      }
      
    return filter !== '' ? state.anecs.filter(byFilterField) : state.anecs
}

export default filterReducer