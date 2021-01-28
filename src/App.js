import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import AddItem from './containers/AddItem/AddItem';
import Cart from './containers/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/home' component={Home} />
      <Route path='/additem' component={AddItem} />
      <Route path='/cart' component={Cart} />
    </div>
  );
}

export default App;
