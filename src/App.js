import { Routes, Route, Outlet} from 'react-router-dom';

import Home from './routes/home/home.component';


const Navigation = () => {
  return (
    <div>
      <div>
        <h1>Menu Item</h1>
      </div>
      <Outlet/>
    </div>
  )
};

const Shop = () => {
  return <h1>User now in shop</h1>
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
      </Route>
    </Routes>
  );
};

export default App;
