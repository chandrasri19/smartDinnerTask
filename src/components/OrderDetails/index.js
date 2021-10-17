import React  from 'react';
import { connect } from 'react-redux'
import { injectReducer, injectSaga } from "redux-inject-reducer-and-saga";
import reducer from '../Dashboard/reducer';
import saga from "../Dashboard/saga";
import { compose } from "redux";
import * as actions from '../Dashboard/actions'
import * as selectors from '../Dashboard/selectors';
import { createStructuredSelector } from "reselect";
import 'antd/dist/antd.css';
import { select } from 'redux-saga/effects';
import './styles.css';




class MenuItemOrder extends React.Component { 

    componentDidMount() {
      this.props.menuDetail();      
    }  
    constructor(props){
      super(props);
    this.state = {TabHead:[
      {tabname:"New Orders",key:1,id:1},
      {tabname:"Preparing",key:2 ,id:2 },
      {tabname:"Out for Delivery",key:3,id:3 },
      {tabname:"Completed",key:4,id:4 }
     ],
     clickedvalue:"",
     clickedvalueId:"",
     showDetail:""    
    }
    
    } 
    handleId = (e) => {     
      console.log(e.target.id)
     this.setState({clickedvalue:e.target.id,clickedvalueId:e.target.name,showDetail:true})
   }
   Display=(arr)=>{
     if(arr.length>0){;
    return arr.map(item=>{
      return (               
       <tr key={item.id}>
       <td>{item.stage_id}</td>
       <td>{item.delivery_charge}</td>
       <td>{item.gst}</td>
       <td>{item.total_price}</td>
       </tr>
      )
     })
    }
   }
   orderStatus=(value)=>{
    if(value=="Preparing"){
     return this.Display(this.props.getPreparingData);
    }else if(value=="Completed"){
     return this.Display(this.props.getCompleted);
    }else if(value=="Out for Delivery"){
      return this.Display(this.props.getOutForDelivery);
     }else if(value=="New Orders"){
      return this.Display(this.props.getNewOrderData);
     }
   }
   render(){    
    return (      
     <>
      <div>
        {
           this.state.TabHead.map((item)=>{
            return (
             <button id={item.tabname} name={item.id} onClick={(e)=>this.handleId(e)}  key={item.key}>{item.tabname}</button>
             )
           })
        }
      </div>
        {this.state.showDetail&&          
            <>{
                this.orderStatus(this.state.clickedvalue)                 
              
        }</>
         || <div>Not Show </div>}
     
     </>
      );
    }
   
     
   
}
const mapStateToProps = (state) =>{
    return createStructuredSelector({ 
      // getFetchedData: selectors.MenuFetchedData(),
      getNewOrderData: selectors.NewOrder(),
      getPreparingData:selectors.Preparing(),
      getOutForDelivery:selectors.OutforDelivery(),
      getCompleted:selectors.Completed()
    });
   
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
