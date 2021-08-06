import './App.css';
import Comp from './Component/Comp';
import GithubApi from './Component/GithubApi'

function App() {
  return (
    <div>
     {/* Fetch data using API, axios, async and react hoooks. */}
    <Comp />
    {/* Fetch data using Github API using Javascript/ React. */}
    <GithubApi />
    </div>
  );
}

export default App;
