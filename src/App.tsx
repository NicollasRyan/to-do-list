import { Header } from "./Header";
import { Dashboard } from "./components/Dashboard";
import { TasksProvider } from "./TasksContext";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <TasksProvider>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </TasksProvider>
  );
}

export default App;
