import keymirror from "fbjs/lib/keyMirror";

export const GetAllRestData = keymirror({
  GET_ALLRESTDETAIL_SUCCESS: null,
  ALL_REST_DETAIL: null,
  ALL_REST_MENU_ITEM:null,
  GET_RESTMENU_SUCCESS:null,
  GET_MENUITEM_FAILED:null,
  GET_USERS_FAILED:null,
});

export function GetRestDetail(allRestData) {
  console.log("action")
  return { type: GetAllRestData.ALL_REST_DETAIL, payload: { allRestData } };
}
export function GetRestMenu(menuItem) {
  return { type: GetAllRestData.ALL_REST_MENU_ITEM, payload: { menuItem } };
}