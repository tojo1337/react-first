import {useState,useEffect} from "react";
export function Timer(){
	const [count,setCount] = useState(0);
	useEffect(()=>{
		setTimeout(()=>{
			setCount((count)=>count+1);
		},1000);
	},[]);
	return(
		<div>
			<p>The count is : {count}</p>
		</div>
	);
}