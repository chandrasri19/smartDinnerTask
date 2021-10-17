import './App.css';
import Dashboard from './components/Dashboard';
import Orderdetail from './components/OrderDetails';
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


function Routes () { 
 return(
  <Router>
  <Switch>
    <Route exact path="/" component={Orderdetail} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
</Router>
)
}