import { call, put,all,takeLatest } from 'redux-saga/effects'
import { GetAllRestData } from './actions'

const getAllRest=() => 
         fetch('https://testingapi.smartdiner.co/after_login/restaurant/get_details',{
            method: 'GET',
            headers: {
              'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjM0MTkzOTMxLCJleHAiOjE2MzQyODAzMzF9.vfEkN49qGO5fAzNOwDcr7ed3VdN7O7vU_GEZo3i_BlU'
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
              'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjM0NDUxNTI5LCJleHAiOjE2MzQ1Mzc5Mjl9.j-j94xQogfe5ThE6HpY816lrJVcsH33j4BUCmX8ieD4'
            }
          })
          .then(res => res.json())
          .then(data => {             
              return data;
            })
     

function* restMenu(){
    try{
        const data = yield call(getRestMenu);
        console.log(data)
        yield put({type: GetAllRestData.GET_RESTMENU_SUCCESS,payload:data});     
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