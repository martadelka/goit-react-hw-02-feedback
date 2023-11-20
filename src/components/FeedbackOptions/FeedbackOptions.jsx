import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.feedback__container}> 
    {Object.keys(options).map(option => (
    <button
      key={option}
      type="button"
      name={option}
      onClick={() => onLeaveFeedback(option)}
      className={css.feedback__btn}
    >
      {option}
    </button>
  ))}
  </div>
);
