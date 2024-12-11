import { SelectCategory } from '../../types/SelectCategory';
import { Todo } from '../../types/Todo';

export const filterTodos = (
  todos: Todo[],
  filters: { selectCaregory: SelectCategory; query: string },
): Todo[] => {
  const { selectCaregory, query } = filters;

  return todos
    .filter(todo => {
      if (selectCaregory === SelectCategory.completed) {
        return todo.completed;
      }

      if (selectCaregory === SelectCategory.active) {
        return !todo.completed;
      }

      return true;
    })
    .filter(todo => {
      const lowerQuery = query.toLowerCase();

      return todo.title.toLowerCase().includes(lowerQuery);
    });
};
