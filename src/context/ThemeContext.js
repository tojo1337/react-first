import {useContext,useState,createContext} from "react";
const ThemeContext = createContext();
export function ThemeCont(){
	const [thm,setThm] = useState("light");
	function toggle(){
		setThm(thm => (thm === "light" ? "dark" : "light"));
	}
	return(
		<ThemeContext.Provider value={{thm,toggle}}>
			<MainComp />
		</ThemeContext.Provider>
	);
}
export function MainComp(){
	const {thm,toggle} = useContext(ThemeContext);
	return(
		<div>
			<p>This is the current state : {thm}</p>
			<button onClick={toggle}>click me</button>
		</div>
	);
}