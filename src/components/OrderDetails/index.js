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

class MenuItemOrder extends React.Component { 

    componentDidMount() {
      console.log("did:")
      console.log(this.props.getFetchedData)
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
      
      <div style={{marginTop:"25px",textAlign:"center",justifyContent:"center",}}>
        <Tabs onChange={callback} type="card">
          {this.renderTab()}  
        </Tabs>
      </div>     
      )
    }

      orderedid = () => {
            return this.props.getFetchedData?.orders.map( orderedList => {
          return orderedList.stage_id
        })
      }
      renderTab = () => {
        if(this.state.TabHead.length==0)return null;
        return this.state.TabHead.map((item)=>{
          return (
            <NavLink to={`/order/${item.tabname}`}>
            <TabPane tab={item.tabname} key={item.key}>
               Your Order is  {item.tabname}
            </TabPane>
            </NavLink>
            )
          })
      }
   
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
const withSaga = injectSaga({ key: "Userdetails", saga: saga });
const withConnect = connect(mapStateToProps, mapDispatch);
export default compose(withReducer, withSaga, withConnect)(MenuItemOrder);


// import { Tabs } from 'antd';

// const { TabPane } = Tabs;

// function callback(key) {
//   console.log(key);
// }

// ReactDOM.render(
//   <Tabs onChange={callback} type="card">
//     <TabPane tab="Tab 1" key="1">
//       Content of Tab Pane 1
//     </TabPane>
//     <TabPane tab="Tab 2" key="2">
//       Content of Tab Pane 2
//     </TabPane>
//     <TabPane tab="Tab 3" key="3">
//       Content of Tab Pane 3
//     </TabPane>
//   </Tabs>,
//   mountNode,
// );