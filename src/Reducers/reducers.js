import { FETCH_RECOMMEND_START, FETCH_RECOMMEND_SUCCESS, FETCH_RECOMMEND_FAILURE } from '../Actions/actions';

const initialState ={
    recommend:[],
    isFetching: false,
    error:''
}

function reducer(state = initialState, action) {
    console.log('reducer', action.payload);
    switch(action.type){
        case FETCH_RECOMMEND_START:
            return{
                ...state, 
                isFetching: true,
                error: '',
                recommend:[]
            };
        case FETCH_RECOMMEND_SUCCESS:
            console.log(action.payload);
            return{
                ...state,
                isFetching: false,
                error:'',
                recommend: action.payload
            }
        case FETCH_RECOMMEND_FAILURE:
            return{
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

export default reducer;