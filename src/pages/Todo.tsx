import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-7xl font-mono text-center uppercase">My TODO</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
