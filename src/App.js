import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'; 
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import {signOut} from 'firebase/auth';
import {auth} from './firebase-config';
function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () => {
     signOut(auth).then(() => {
       localStorage.clear();
       setIsAuth(false);
       window.location.pathname = '/login';
     })
  }

  return (
    <div className="App">
       <Router>
         <nav className='navbar navbar-expand-lg justify-content-center navbar-light bg-dark text-center py-4 fs-4'>
            <Link to='/' className='nav-link text-white mx-2 fs-4'>Home</Link>
            
            {!isAuth ? <Link to='/login' className='nav-link text-white mx-2 fs-4'>Login</Link> : 
            (
              <>
               <Link to='/createpost' className='nav-link text-white mx-2 fs-4'>Create Story</Link>
               <button className='btn btn-success fs-4' onClick={signUserOut}>Log out</button>
              </>
            )}
         </nav>

         <div className='container mt-5'>
           <Routes>
              <Route path='/' element={<Home isAuth={isAuth}/>}/>
              <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>}/>
              <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
           </Routes>
         </div>
       </Router>
    </div>
  );
}

export default App;
