import { InitialState } from "./initial";
import { GetAllRestData } from "./actions";



function GetAllRest(state = InitialState, action) {
  switch (action.type) {
  
    case GetAllRestData.GET_ALLRESTDETAIL_SUCCESS:{
      console.log("reducer")
      return state.set("RestDetailSuccess",action.payload)      
    }
    case GetAllRestData.GET_RESTMENU_SUCCESSL :{
      console.log("reducer")
      return state.set("RestMenuItemSuccess",action.payload)      
    }
    default:
      return state;
  }
}

export default GetAllRest;
