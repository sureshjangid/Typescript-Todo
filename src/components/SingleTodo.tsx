import React from 'react';
import { Todo } from '../modal';
import './style.css';
interface Props {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
	const [edit, setEdit] = React.useState<boolean>(false);
	const [editTodo, setEditTodo] = React.useState<string>(todo?.todo);

	const handleDone = (id: number) => {
		setTodos(todos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
	};
	const handleDelete = (id: number) => {
		setTodos(todos.filter(todo => todo.id !== id));
	};
	const handleEdit = (e: React.FormEvent, id: number) => {
		console.log(id,'idid');
		
		e.preventDefault();
		setTodos(todos.map(todo => (todo.id === id ? { ...todo, todo: editTodo } : todo)));
		setEdit(false);
	};
	return (
		<form className="todos_single" onSubmit={e => handleEdit(e, todo.id)}>
			{edit ? (
				<input className="todos_single--test" value={editTodo} onChange={e => setEditTodo(e.target.value)} />
			) : todo.isDone ? (
				<s className="todos_single--text">{todo?.todo}</s>
			) : (
				<span className="todos_single--text">{todo?.todo}</span>
			)}

			<div className="">
				<span
					className="icon"
					onClick={() => {
						if (!edit && !todo.isDone) {
							setEdit(!edit);
						}
					}}
				>
					✏️
				</span>
				<span className="icon" onClick={() => handleDelete(todo.id)}>
					🗑️
				</span>
				<span className="icon" onClick={() => handleDone(todo.id)}>
					✅
				</span>
			</div>
		</form>
	);
};

export default SingleTodo;
