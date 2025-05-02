/**
 * TodoTopTemplate
 *
 * @package templates
 */
import style from './styles.module.css';
import { Link } from 'react-router';

/**
 * @returns {JSX.Element}
 */
export const TodoTopTemplate = () => {
  return (
    <>
      <div className={style.container}>
        <section className={style.navContainer}>
          <nav>
            <ul className={style.ul}>
              <li className={style.li}>
                <Link to={'/'}>Top</Link>
              </li>
              <li className={style.li}>
                <Link to={'/create'}>Create</Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
};
