import { getQuoteData, url } from "../api";

const initialState = {
  text: "Hello",
  author: "John",
  pending: false,
};

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIVING_QUOTE:
      return { ...state, pending: true };
    case NEW_QUOTE:
      return {
        ...state,
        text: action.payload.quotes[0].text,
        author: action.payload.quotes[0].author,
        pending: false,
      };
    default:
      return state;
  }
};

// SELECTORS

export const getText = (state) => state.text;
export const getAuthor = (state) => state.author;

// ACTION TYPES

export const NEW_QUOTE = "NEW_QUOTE";
export const RETRIVING_QUOTE = "RETRIVING_QUOTE";

// ACTION CREATORS

export const changeQuote = () => (dispatch) => {
  dispatch({ type: RETRIVING_QUOTE });
  getQuoteData(url).then((data) => {
    dispatch({ type: NEW_QUOTE, payload: data });
  });
};
