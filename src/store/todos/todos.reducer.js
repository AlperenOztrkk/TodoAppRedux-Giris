import { ADD_TODO, REMOVE_TODO } from "./todos.types";

const initialState = [
  'Alperen',
]

const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			// [ 'ayşe', 'melih']
			// addTodo('alperen')
			// ['alperen', 'ayşe', 'melih',]];
			return [...state, action.text];
		case REMOVE_TODO:
			// removeTodo('Alperen')'
			// ['ayşe', 'melih',]
			// indefOf('Alperen') === 0
			// splice(0, 1);
			// ['ayşe', 'melih']
			const newState = [...state];
			const indexOf = newState.indexOf(action.text);
			newState.splice(indexOf, 1);

			return newState;
		default:
			return state;
	}
};

export default todosReducer;
