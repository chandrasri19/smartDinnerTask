import React  from 'react';
import { connect } from 'react-redux'
import { injectReducer, injectSaga } from "redux-inject-reducer-and-saga";
import reducer from '../Dashboard/reducer';
import saga from "../Dashboard/saga";
import { compose } from "redux";
import * as actions from '../Dashboard/actions'
import * as selectors from '../Dashboard/selectors';
import { createStructuredSelector } from "reselect";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';



const { TabPane } = Tabs;
let keyvalue=null;

class MenuItemOrder extends React.Component { 

    componentDidMount() {
      console.log("did:")
      console.log(this.orderedid())
      this.props.menuDetail();
    }  
    constructor(props){
      super(props);
    this.state = {TabHead:[
      {tabname:"New Orders",key:1 },
      {tabname:"Preparing",key:2 },
      {tabname:"Out for Delivery",key:3},
      {tabname:"Completed",key:4}
     ]}
    } 
   render(){    
    function callback(key) {
      console.log(key);
    }
    return (      
      <Tabs onChange={callback} type="card">
        {this.state.TabHead.map(item=>{
            return (
              <TabPane tab={item.tabname} key={item.key}>
                 <div style={{justifyContent:"center",alignItems:"center"}}> Your order is {item.tabname}</div>
              </TabPane>
            )}
        )} 
     {this.orderedid()}
    </Tabs>
      )
    }

      orderedid = () => {
            return this.props.getFetchedData?.orders.map( orderedList => {
          return orderedList.stage_id
        })
      }

x
      // renderTab = () => {
      //   if(this.state.TabHead.length==0)return null;
      //   return this.state.TabHead.map((item)=>{
      //     keyvalue=item.key;
      //     return (
      //       <NavLink to={`/order/${item.tabname}`} key={item.key}>
      //       <TabPane tab={item.tabname} key={item.key}>
      //          Your Order is  {item.tabname}
      //       </TabPane>
      //       </NavLink>
      //       )
      //     })
      // }
   
}
const mapStateToProps = (state) =>{
    return createStructuredSelector({ getFetchedData: selectors.MenuFetchedData()});
   
}
const mapDispatch = (dispatch) =>{ 
    return{ 
      menuDetail:() => dispatch(actions.GetRestMenu()),   
    }
}

const withReducer = injectReducer({ key: "RestAllDetails", reducer: reducer });
const withSaga = injectSaga({ key: "RestAllDetails", saga: saga });
const withConnect = connect(mapStateToProps, mapDispatch);
export default compose(withReducer, withSaga, withConnect)(MenuItemOrder);
