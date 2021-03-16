import logo from './logo.svg';
import TodoList from './components/todoList';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <TodoList />
    </div>
  );
}

export default App;
