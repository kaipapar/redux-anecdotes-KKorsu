const createAnec = (content) => { return {
    type: 'NEW_ANECDOTE',
    payload: {content} // id and votes defined in anec reducer
}
}

const vote = (id) => { return {
    type: 'VOTE',
    payload: {id}
}
}

const filterChange = (filter) => { return {
        type: 'SET_FILTER',
        payload: {filter},
    }
}


export {createAnec, vote, filterChange}