import logo from './logo.svg';
import './App.css';
import TodoTemplate from './Component/TodoTemplate';
import TodoInsert from "./Component/TodoInsert";

const App = () => {
    return (
        <TodoTemplate>
            <TodoInsert/>
        </TodoTemplate>
        )
}

export default App;
