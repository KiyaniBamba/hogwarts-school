import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Question from './Questions.js'; 
import QuestionCount from './QuestionsCount'; 
import AnswerOption from './Answers.js';

function Quiz(props) {

    function renderAnswerOptions(key) {
        return (
          <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
          />
        );
      }

      return (
        <ReactCSSTransitionGroup
          className="container"
          component="div"
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
        >
          <div key={props.questionId}>
            <QuestionCount
              counter={props.questionId}
              total={props.questionTotal}
            />
            <Question content={props.question} />
            <ul className="answerOptions">
              {props.answerOptions.map(renderAnswerOptions)}
            </ul>
          </div>
        </ReactCSSTransitionGroup>
      );
  }
  Quiz.propTypes = {
    answer: PropTypes.string,
    answerOptions: PropTypes.array,
    counter: PropTypes.number,
    question: PropTypes.string,
    questionId: PropTypes.number,
    questionTotal: PropTypes.number,
    onAnswerSelected: PropTypes.func
  };
  export default Quiz;