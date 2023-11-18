import css from './Section.module.css'

export const Section = ({ title, children }) => (
  <section className={css.feedback}>
    <h2 className={css.feedback__title}> {title}</h2>
    {children}
  </section>
);