import { ActionType } from '../action-types';

interface search_news {
    type: ActionType.SEARCH_NEWS;
}

interface search_news_error {
    type: ActionType.SEARCH_NEWS_ERROR;
    payload: string | null;
}

interface search_news_success {
    type: ActionType.SEARCH_NEWS_SUCCESS;
    payload: any;
}

export type Action = 
| search_news
| search_news_success
| search_news_error