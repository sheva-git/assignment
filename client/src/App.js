
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Layout from './common/Layout';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import sliceSlice from './store/allSlice';
import GetAllTodos from './todos/todosAPI';
import GetAllUsers from './users/usersAPI';
import GetAllPosts from './posts/postsAPI';

const myStore = configureStore({
   reducer: {sliceSlice} 
  })

function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/todos/todosAPI' element={<GetAllTodos />} />
              <Route path='/users/usersAPI' element={<GetAllUsers/>}/>
              <Route path='/posts/postsAPI' element={<GetAllPosts/>}/>
            </Route>
          </Routes>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
