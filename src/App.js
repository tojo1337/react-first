//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import {Index} from "./comp/App_home";
import {Home} from "./comp/Home";
import {About} from "./comp/About";
import {Counter} from "./comp/Counter";
import {TodoList} from "./comp/TodoList";
import {NoPage} from "./comp/NoPage";
import {Timer} from "./comp/Timer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="counter" element={<Counter />} />
          <Route path="todo-list" element={<TodoList />} />
          <Route path="timer" element={<Timer />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
