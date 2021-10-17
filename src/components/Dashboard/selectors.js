import { createSelector } from "reselect";
const RestAllDetails = (state) => state.get("RestAllDetails");

export const FetchedData = () =>
  createSelector(RestAllDetails, (bstate) => bstate.get("RestDetailSuccess"));


  export const MenuFetchedData=()=>
     createSelector(RestAllDetails,(bstate)=> bstate.get("RestMenuItemSuccess"))

// export const MenuFetchedData = () =>
//   createSelector(RestAllDetails, (bstate) => bstate.get("RestMenuItemSuccess"));

 

export const  NewOrder=()=> createSelector(
  RestAllDetails, 
  (bstate) =>{
    let AllList=bstate.get("RestMenuItemSuccess").orders;
    let filteredArr=[];
        if(AllList){

      AllList.forEach(element => {
        if(element.stage_id==1){
          filteredArr.push(element)
        }
      });
    }
  
    return filteredArr;
  }
)
export const  Preparing=()=> createSelector(
  RestAllDetails, 
  (bstate) =>{
    let AllList=bstate.get("RestMenuItemSuccess").orders;
    let filteredArr=[];
    if(AllList){
      AllList.forEach(element => {
        if(element.stage_id==2||element.stage_id==3){
          filteredArr.push(element)
        }
      });
    }
    return filteredArr;
  }
)
export const  OutforDelivery=()=> createSelector(
  RestAllDetails, 
  (bstate) =>{
    let AllList=bstate.get("RestMenuItemSuccess").orders;
    let filteredArr=[];
    if(AllList){
      AllList.forEach(element => {
        if(element.stage_id==4||element.stage_id==5|| element.stage_id==6){
          filteredArr.push(element)
        }
      });
    }
    return filteredArr;
  }
)
export const  Completed=()=> createSelector(
  RestAllDetails, 
  (bstate) =>{
    let AllList=bstate.get("RestMenuItemSuccess").orders;
    let filteredArr=[];
    if(AllList){
      AllList.forEach(element => {
        if(element.stage_id==7 || element.stage_id==8 || element.stage_id==9){
          filteredArr.push(element)
        }
      });
    }
    return filteredArr;
  }
)