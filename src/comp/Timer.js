import {useState,useEffect} from "react";
export function Timer(){
	const [count,setCount] = useState(0);
	useEffect(()=>{
		document.title = "Click count : "+count;
	},[count]);
	function clickHandler(){
		setCount((count)=>count+1);
	}
	return(
		<div>
			<button onClick={clickHandler}>click count : {count}</button>
		</div>
	);
}