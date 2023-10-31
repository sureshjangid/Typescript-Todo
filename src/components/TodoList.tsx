import React from 'react';
import './style.css';
import { Todo } from '../modal';
import SingleTodo from './SingleTodo';

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ todos, setTodos }: Props) => {
	return (
		<div className="todos">
			{todos?.map((t, i) => {
				return (
				
						<SingleTodo todo={t} key={t.id} todos={todos} setTodos={setTodos} />
				
				);
			})}
		</div>
	);
};

export default TodoList;
