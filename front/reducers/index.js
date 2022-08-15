import { HYDRATE } from 'next-redux-wrapper';
import user from './user'
import post from './post'
import { combineReducers } from 'redux';

const initialState = {
  user: {
    
  },
  post: {
    
  },
  //   name: "uheeking",
  //   age: 27,
  //   password: "uheekings",
};

// async action creator(비동기)
// action creator
// const changeNickname = (data) => {
//   type: "CHANGE_NICKNAME", data;
// };
// store.dispatch(changeNickname("mighty tak"));
// (이전상태, 액션) => 다음 상태
const rootReducer = combineReducers({
    index : (state = {},action ) =>{
  switch (action.type) {
    case HYDRATE:
        console.log('HYDRATE', action);
        return {...state, ...action.payload }
      default:
        return state;
  }
},
user,
post
    // case "CHANGE_NICKNAME":
    //   return {
    //     ...state,
    //     name: action.data,
    //   };
});
export default rootReducer;
