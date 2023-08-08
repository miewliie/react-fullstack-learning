
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Posts from './pages/Posts';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <div className='navbar'>
          <Link to="/" >Home</Link>
          <Link to="/createpost" >Create A Post</Link>
        </div>
        <Routes>
          <Route path='/' exact Component={Home}  />
          <Route path='/createpost' exact Component={CreatePost}  />
          <Route path='/post/:id' exact Component={Posts}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
