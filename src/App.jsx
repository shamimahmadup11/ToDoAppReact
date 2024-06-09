
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ToDoApp from './Components/TodoApp';
import './App.css';
import ImageSlider from './Components/ImageSlider';
import Form from './Components/Form';
import Showhide from './Components/Showhide';
import DragDrop from './Components/DragDrop';
import UseReducer from './Components/UseReducer';
import { ContextProvider } from './Context/UseContext';
import Navbar from './Components/Navbar';
import FirebaseAuthPage from './Components/FirebaseAuthPage';
import Blog from './Components/Blog';
import Home from './Components/Home';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /> <Showhide /> </>
    },
    {
      path: "/dragdrop",
      element: <> <Navbar /> <DragDrop /> </>
    },
    {
      path: "/todo",
      element: <> <Navbar /> <ToDoApp /> </>
    },
    {
      path: "/form",
      element: <> <Navbar /> <Form /> </>
    },
    {
      path: "/imgslider",
      element: <> <Navbar /> <ImageSlider /> </>
    },
    {
      path: "/useReducer",
      element: <> <Navbar /> <UseReducer /> </>
    },{
      path: "/firebase",
      element: <> <Navbar /> <FirebaseAuthPage /> </>
    },
    {
      path: "/blog",
      element: <> <Navbar /> <Blog /> </>
    },{
      path: "/home",
      element: <>  <Home   /> </>
    }

  ]);

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
