
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/" >Home</Link>
        <Link to="/createpost" >Create A Post</Link>
        <Routes>
          <Route path='/' exact Component={Home}  />
          <Route path='/createpost' exact Component={CreatePost}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
