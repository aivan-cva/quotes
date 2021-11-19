import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getText, getAuthor, changeQuote } from "../store/quotes.js";
import "../Styles/QuoteBox.scss";

const QuoteBox = () => {
  const text = useSelector(getText);
  const author = useSelector(getAuthor);

  const dispatch = useDispatch();

  const getNewQuote = () => {
    dispatch(changeQuote());
  };

  useEffect(() => {
    dispatch(changeQuote());
  }, []);

  return (
    <div id="quote-box">
      <h2 id="text">
        <i class="fas fa-quote-left"></i>
        {text}
      </h2>
      <h4>
        <em id="author">{author}</em>
      </h4>
      <div className="buttons">
        <a
          href={`https://twitter.com/intent/tweet?text=${text} -"${author}"`}
          id="tweet-quote"
        >
          <i class="fab fa-twitter-square"></i>
        </a>

        <button id="new-quote" onClick={getNewQuote}>
          <i class="fas fa-sync"></i>
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
