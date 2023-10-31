import { Dispatch, SetStateAction } from 'react';
import './style.css';
interface Props {
	todo: string;
	setTodo: Dispatch<SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}
const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {
	return (
		<form className="input" onSubmit={e => handleAdd(e)}>
			<input type="input" onChange={e => setTodo(e.target.value)} placeholder="Enter Tasks" className="input_box" />
			<button className="input_submit" type="submit">
				Go
			</button>
		</form>
	);
};

export default InputFeild;
