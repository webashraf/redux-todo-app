import { useState } from "react";
import { baseApi } from "../../redux/api/api";
import { removeTodo } from "../../redux/features/todoSlice";
import { Button } from "../ui/button";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: "high" | "low" | "medium";
};

const TodoCard = ({
  title,
  description,
  _id,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  // console.log(isCompleted)
  // const dispatch = useAppDispatch();
  const [completeTask, setCompleteTask] = useState("");

  const [updateTodo, { isLoading, isError, isSuccess }] =
    baseApi.useUpdateCompleteTaskMutation();

  const toggleState = () => {
    const taskData = {
      title,
      description,
      isCompleted: true,
      priority,
    };
    const property = {
      id: _id,
      taskData,
    };
    console.log(property);
    updateTodo(property);
  };

  // const handleTaskComplete = (e: FormEvent) => {
  //   e.prevantDefault();
  // };

  return (
    <div>
      <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-md">
        <input
          className="mr-2"
          onClick={() => toggleState()}
          type="checkbox"
          name="complete"
          id="complete"
        />
        <p className="font-bold flex-1">{title}</p>
        <p
          className={`${
            priority === "low"
              ? "text-red-500"
              : priority === "medium"
              ? "text-yellow-500"
              : "text-green-400"
          } flex-1 font-bold`}
        >
          {priority}
        </p>
        <div className="flex-1 ">
          {isCompleted ? (
            <p className="text-green-600 font-mono">Done</p>
          ) : (
            <p className="text-yellow-500 font-mono">Panding</p>
          )}
        </div>
        <p className="flex-[2]">{description}</p>
        <div className="space-x-10">
          <Button
            className="bg-red-500"
            onClick={() => dispatch(removeTodo(id))}
          >
            <svg
              className="size-5"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              ></path>
            </svg>
          </Button>
          <Button className="bg-purple-500">
            <svg
              className="size-5"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              ></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
