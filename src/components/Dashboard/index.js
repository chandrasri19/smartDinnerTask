import React  from 'react';
import { connect } from 'react-redux'
import { injectReducer, injectSaga } from "redux-inject-reducer-and-saga";
import reducer from "./reducer";
import saga from "./saga";
import { compose } from "redux";
import * as actions from './actions'
import * as selectors from './selectors'
import { createStructuredSelector } from "reselect";
import {NavLink,Link, Redirect} from "react-router-dom";



class Allusers extends React.Component { 

    componentDidMount() {
      console.log("did:")
      console.log(this.props.getFetchedData?.restaurantEmployee)
      this.props.restDetail();

    }
    
   render(){     
    return (
      <>
        <button className="buttonsize2" >
          <NavLink to='/order'>Orderdetail</NavLink></button>      
      </>  
      )
    }
     
   
}
const mapStateToProps = (state) =>{
    return createStructuredSelector({ getFetchedData: selectors.FetchedData()});
   
}
const mapDispatch = (dispatch) =>{
    return{ 
      restDetail:() => dispatch(actions.GetRestDetail()),   
    }
}

const withReducer = injectReducer({ key: "RestAllDetails", reducer: reducer });
const withSaga = injectSaga({ key: "Userdetails", saga: saga });
const withConnect = connect(mapStateToProps, mapDispatch);
export default compose(withReducer, withSaga, withConnect)(Allusers);