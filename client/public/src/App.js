
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TasksList from './tasks/TasksList';
import AddTask from './tasks/AddTask';
import Layout from './common/Layout';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import todosSlice from './store/todosSlice';



const myStore = configureStore({ reducer: todosSlice })
function App() {
  return (

    <Provider store={myStore}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<h1>Home Page</h1>} />
              <Route path='/tasks' element={<TasksList />} />
              <Route path='/tasks/add' element={<AddTask />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </Provider>


  );
}

export default App;
