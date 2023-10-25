import './App.css';
import Recipes from './components/Recipes/Recipes';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
function App() {
  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}> 
    <Route path="Home" element={<Home />} />
      <Route path="recipes" element={<Recipes />} />
    </Route>))

  return (
    <AnimatePresence >
  <RouterProvider router={appRouter} />
  </AnimatePresence>);
}

export default App;
