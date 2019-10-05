import React from 'react';

  function QuestionCount(props) {
    return (
      <div className="questionCount">
        Question <span>{props.counter}</span> of <span>{props.total}</span>
      </div>
    );
  }

  QuestionCount.propTypes = {
    counter: PropTypes.number,
    total: PropTypes.number
  };
  export default QuestionCount;