import { ActionType } from "../action-types";
import { Action } from "../actions";

interface newsState {
  loading: boolean;
  data: any;
  error: string | null;
}

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const newsReducer = (
  state: newsState = initialState,
  action: Action
): newsState => {
  switch (action.type) {
    case ActionType.SEARCH_NEWS:
      return { loading: true, data: [], error: null };
    case ActionType.SEARCH_NEWS_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case ActionType.SEARCH_NEWS_ERROR:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
