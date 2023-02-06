import { Header } from "./Header";
import { Dashboard } from "./components/Dashboard";
import { TasksContext, TasksProvider } from "./TasksContext";

function App() {
  return (
    <TasksProvider>
      <Header />
      <Dashboard />
    </TasksProvider>
  );
}

export default App;
