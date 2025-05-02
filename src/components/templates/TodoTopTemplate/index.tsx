/**
 * TodoTopTemplate
 *
 * @package templates
 */
import { InputForm } from '../../atoms/InputForm';
import { PageContainer } from '../../layouts/PageContainer';
import { NavSection } from '../../organisms/NavSection';
// import { TodoList } from '../../organisms/TodoList';
import style from './styles.module.css';

/**
 * @returns {JSX.Element}
 */
export const TodoTopTemplate = () => {
  return (
    <PageContainer>
      <NavSection />
      <h1 className={style.title}>Todo List</h1>
      <div className={style.contentContainer}>
        <InputForm
          className={'search_input'}
          placeholder={'Search Keyword'}
          // value={searchKeyWord}
          // onChange={handleSearchKeyWordInput}
        />
        {/* <TodoList
          showTodoList={showTodoList}
          handleDeleteTodoTask={handleDeleteTodoTask}
          goToDetailPage={goToDetailPage}
          goToEditPage={goToEditPage}
        /> */}
      </div>
    </PageContainer>
  );
};
