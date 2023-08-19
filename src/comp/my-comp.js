import {useState} from "react";
export function Greet(){
	const [name,setName] = useState("");
	const names = [];
	function handleForm(e){
		e.preventDefault();
		const form = e.target;
		const data = new FormData(form);
		const formJson = Object.fromEntries(data.entries());
		names.push(formJson.name);
		setName(names);
	}
	return (
		<div className="hi">
			<form method="post" onSubmit={handleForm}>
				<label>Enter name : </label>
				<input name="name" />
				<div className="list">
					{name}
				</div>
			</form>
		</div>
	);
}