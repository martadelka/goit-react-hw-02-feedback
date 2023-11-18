import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.statistics__container}>    
    <h3 className={css.statistics__head}>Statistics</h3>
    <ul className={css.statistics__list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  </div>
);