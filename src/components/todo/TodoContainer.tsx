import { useAppSelector } from "../../redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const state = useAppSelector((state) => state.todos.todos);

  return (
    <div>
      <div className="flex justify-between mb-3">
        <AddTodoModal />

        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full rounded-xl p-2 space-y-5">
        <div className="space-y-3 bg-white rounded-md p-5">
          {state.map((item) => (
            <TodoCard title={item.title} description={item.description} />
          ))}
        </div>
        {/* <div className="bg-white p-3 rounded-xl text-center text-2xl font-mono">
          <h2>There is no task panding</h2>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
