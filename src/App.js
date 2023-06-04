// import
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import "./main.css";
import "./reset.css"

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main">
        <Navbar />
        {/* <Profile /> */}
        <Dialogs />
      </main>
    </div>
  );
}

export default App;
