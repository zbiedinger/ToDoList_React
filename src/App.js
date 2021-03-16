import logo from './logo.svg';
import TodoList from './components/todoList';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Sidebar from './components/sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Sidebar />
      <div className="container mr-1">
      <TodoList />
      </div>
    </div>
  );
}

export default App;
