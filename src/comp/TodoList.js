import {useState} from "react";
export function TodoList(){
	const [data,setData] = useState([]);
	function formHandler(e){
		e.preventDefault();
		const target = e.target;
		const formData = new FormData(target);
		const formJson = Object.fromEntries(formData.entries());
		const arrVal = formJson.data;
		const preArr = [...data];
		preArr.push(arrVal);
		setData(preArr);
	}
	function ListRender(props){
		const li = [...props.data];
		const retVal = li.map(data=><li>{data}</li>);
		return(
			<ul>
				{retVal}
			</ul>
		);
	}
	return (
		<div class="todolist">
			<div class="list-form">
				<h1>Implemented the list element</h1>
				<form method="post" onSubmit={formHandler}>
					<label htmlFor="data">Enter data here : </label>
					<input name="data" />
				</form>
			</div>
			<div class="list-elements">
				<ListRender data={data} />
			</div>
		</div>
	);
}