import {useEffect,useRef,useState} from "react";
export function Ref(){
	const [val,setVal] = useState(0);
	const refVal = useRef(0);
	useEffect(()=>{
		setTimeout(()=>{
			setVal(refVal.current);
			refVal.current = refVal.current+1;
		},1000)
	});
	return(
		<div>Count : {val}</div>
	);
}