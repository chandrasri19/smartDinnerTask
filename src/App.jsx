import './App.css';
import Dashboard from './components/Dashboard';
import Orderdetail from './components/OrderDetails/index';
import { Provider } from "react-redux";
import store from './Store/index';
import {
  BrowserRouter as Router,  Route, Switch,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;


function Routes (props) { 
 return(
  <Switch>
      <Route render={props => (
        <Dashboard {...props} />
        )}
        path="/"
      />,
      <Route render={props => (
        <Orderdetail {...props} />
        )}
        path="/order/:name"
      />
  </ Switch>  
 )
}