import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomendedVideos from "./RecomendedVideos";
function App() {
  return (
    <div className="app">
      {/* <h1>Hai yaswanth</h1> */}

      {/*Header   ->  <Header />*/}
      <Header />
      {/*Sidebar   ->  <Sidebar />*/}
      <div className="app_page">
        <Sidebar />
        <RecomendedVideos />
      </div>
      {/*Recomended   ->  <Recomended />*/}
    </div>
  );
}

export default App;
