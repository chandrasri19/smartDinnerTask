import { createSelector } from "reselect";
const RestAllDetails = (state) => state.get("RestAllDetails");

export const FetchedData = () =>
  createSelector(RestAllDetails, (bstate) => bstate.get("RestDetailSuccess"));


  export const MenuFetchedData=()=>
     createSelector(RestAllDetails,(bstate)=> bstate.get("RestMenuItemSuccess"))

// export const MenuFetchedData = () =>
//   createSelector(RestAllDetails, (bstate) => bstate.get("RestMenuItemSuccess"));

 

