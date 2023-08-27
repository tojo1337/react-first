import { Outlet, Link } from "react-router-dom";
export function Index(){
	return(
		<div>
			<nav class="navigator">
				<ul>
		          <li>
		            <Link to="/">Home</Link>
		          </li>
		          <li>
		            <Link to="/about">About</Link>
		          </li>
		          <li>
		            <Link to="/counter">Counter</Link>
		          </li>
		          <li>
		            <Link to="/todo-list">Todo list</Link>
		          </li>
		          <li>
		          	<Link to="/timer">Timer</Link>
		          </li>
		        </ul>
			</nav>
			<div class="outlet">
		        <Outlet />
			</div>
		</div>
	)
}