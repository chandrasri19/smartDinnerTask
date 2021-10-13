import { call, put,all,takeLatest } from 'redux-saga/effects'
import {GetAllRestData} from './actions'

const getAllRest=() => 
         fetch('https://testingapi.smartdiner.co/after_login/restaurant/get_details',{
            method: 'GET',
            headers: {
              'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjMzOTI5NzMxLCJleHAiOjE2MzQwMTYxMzF9.QiPUa7kdK4l0BWBMSiswi0NQEuiiHlOKTzqZjCrhCTE'
            }
          })
          .then(res => res.json())
          .then(data => { 
              console.log(data)
              return parseInt(data);
            })
     

function* sagaUsers(){
    try{
        const restDetails = yield call(getAllRest);
        yield put({type: GetAllRestData.GET_ALLRESTDETAIL_SUCCESS,payload:restDetails});     
    }catch(e){
        yield put({type: 'GET_USERS_FAILED'});
        console.log("saga failed RestDetailed get")   

    }
}

const getRestMenu=() => 
         fetch('https://testingapi.smartdiner.co/after_login/restaurant/2/get_orders',{
            method: 'GET',
            headers: {
              'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjMzOTI5NzMxLCJleHAiOjE2MzQwMTYxMzF9.QiPUa7kdK4l0BWBMSiswi0NQEuiiHlOKTzqZjCrhCTE'
            }
          })
          .then(res => res.json())
          .then(data => { 
              console.log(data)
              return parseInt(data);
            })
     

function* restMenu(){
    try{
        const menuItem = yield call(getRestMenu);
        yield put({type: GetAllRestData.GET_RESTMENU_SUCCESS,payload:menuItem});     
    }catch(e){
        yield put({type: 'GET_MENUITEM_FAILED'});
        console.log("saga failed RestMenuItem get")   

    }
}


function* rootSagas() {
    yield all([
    takeLatest(GetAllRestData.ALL_REST_DETAIL, sagaUsers),
    takeLatest(GetAllRestData.ALL_REST_MENU_ITEM, restMenu),
    ]);
}

export default rootSagas;