import { Header } from "./Header";
import { Dashboard } from "./components/Dashboard";
import { TasksContext } from "./TasksContext";

function App() {
  return (
    <TasksContext.Provider value={[]}>
      <Header />

      <Dashboard />
    </TasksContext.Provider>
  );
}

export default App;
