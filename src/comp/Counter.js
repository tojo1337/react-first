import React from "react";
import {useState} from "react";
export function Counter(){
	const oddDisplay = "Odd number : ";
	const evenDisplay = "Even number : ";
	const [cur,setCur] = useState(1);
	const [data,setData] = useState("Click the button to increment number");
	function buttonHandler(e){
		if(cur%2===0){
			setData(evenDisplay+cur);
		}else {
			setData(oddDisplay+cur);
		}
		setCur(cur+1);
	}
	return(
		<div className="greet">
			<h1>{data}</h1>
			<button onClick={buttonHandler}>click me</button>
		</div>
	)
}