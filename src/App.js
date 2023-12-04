import CreateUser from "./components/CreateUser";
import DataFetch from "./features/DataFetch";
import "./utils/App.css";

const App = () => {
  return (
    <main>
      {/* _____Header Part_____ */}
      <header>
        <h1>User's List</h1>
        <CreateUser />
      </header>

      {/* _____Getting a list of users_____ */}
      <DataFetch />
    </main>
  );
};

export default App;
