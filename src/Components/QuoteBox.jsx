import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getText, getAuthor, changeQuote } from "../store/quotes.js";

const QuoteBox = () => {
  const text = useSelector(getText);
  const author = useSelector(getAuthor);

  const dispatch = useDispatch();

  const getNewQuote = () => {
    console.log("getting new quote");
    dispatch(changeQuote());
  };

  useEffect(() => {
    dispatch(changeQuote());
  }, []);

  return (
    <div id="quote-box">
      <h2 id="text">{text}</h2>
      <h4>
        <em id="author">{author}</em>
      </h4>
      <a href="#" id="tweet-quote">
        Twitter
      </a>
      <button id="new-quote" onClick={getNewQuote}>
        New Quote
      </button>
    </div>
  );
};

export default QuoteBox;
