import axios from 'axios';

export const FETCH_RECOMMEND_START ='FETCH_RECOMMEND_START';
export const FETCH_RECOMMEND_SUCCESS ='FETCH_RECOMMEND_SUCCESS';
export const FETCH_RECOMMEND_FAILURE='FETCH_RECOMMEND_FAILURE';

export const getUsers = () => {
    return dispatch => {
        dispatch({
            type: FETCH_RECOMMEND_START
        });

        axios
        .get('http://strainapi.evanbusse.com/bdWuDvk/searchdata/effects')
        .then(res => {
            dispatch({
                type: FETCH_RECOMMEND_SUCCESS, payload: res.data
            })
        })
        .catch(err=>{
            console.log(err);
            dispatch({
                    type: FETCH_RECOMMEND_FAILURE, payload: err
                })
            });
    }
}