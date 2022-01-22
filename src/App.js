import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "btn">
          <form action = "http://localhost:8080/topstories" method = "GET">
            <div><button>Top Stories</button></div>
          </form>

          <form action = "http://localhost:8080/newstories" method = "GET">
            <div><button>New Stories</button></div>
          </form>

          <form action = "http://localhost:8080/beststories" method = "GET">
            <div><button>Best Stories</button></div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
