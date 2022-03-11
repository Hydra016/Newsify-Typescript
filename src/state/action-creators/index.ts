import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux';

export const searchNews = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_NEWS
        })

        try {
            const response = await axios.get('https://newsapi.org/v2/everything?q=riga&apiKey=39f0ca53660c4ccf83f483a17165b25d')
            const news = response.data.articles

            dispatch({
                type: ActionType.SEARCH_NEWS_SUCCESS,
                payload: news
            })
        } catch(err: any) {
            dispatch({
                type: ActionType.SEARCH_NEWS_ERROR,
                payload: err.message
            })
        }
    }
}
