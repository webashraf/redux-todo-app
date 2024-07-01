import { useState } from "react";
import { baseApi } from "../../redux/api/api";
import { useAppSelector } from "../../redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const state = useAppSelector((state) => state.todos.todos);

  const [priority, setPriority] = useState("")

  const { data: allTasks } = baseApi.useGetTodosQuery(priority);

  //! fdskfjs
  //? dsfsdf
  //* fdsafds
  //~ fsdafdf
  //& fsdfdsf
  //^ sdffdsf

  return (
    <div>
      <div className="flex justify-between mb-3">
        <AddTodoModal />

        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full rounded-xl p-2 space-y-5">
        <div className="space-y-3 bg-white rounded-md p-5">
          {allTasks?.data.map((item) => (
            <TodoCard {...item} />
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
