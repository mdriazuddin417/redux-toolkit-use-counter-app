import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostsViews from "./features/posts/PostsViews";

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <CounterView />
      <PostsViews />
    </div>
  );
}

export default App;
