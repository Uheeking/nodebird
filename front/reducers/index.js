const initialState = {
    name: 'uheeking',
    age: 27,
    password: 'uheekings'
}
const changeNickname = {
    type : 'CHANGE_NICKNAME',
    data: 'uheeMichin'
}
const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'CHANGE_NICKNAME':
            return {
                ...state,
                name : action.data
            }
    }
}
export default rootReducer;