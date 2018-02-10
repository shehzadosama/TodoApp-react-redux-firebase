import ItemsAction from '../actions/Items'

const INITIAL_STATE = {
    todos: [],
    // editState: false,
    // editVal: '',
    // editKey: ''
}


function getTodos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ItemsAction.GET_TODOS:
            // return Object.assign({}, state, {
            //   todos: state.todos.concat({
            //     text: action.val,
            //   })
            // });
            // let todos = [...state.todos];
            // todos.push(action.val)
            return {
                ...state,
                todos: action.val
            }

        default:
            return state;
    }
}

export default getTodos;