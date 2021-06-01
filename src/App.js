import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/pages/music";
import News from "./components/pages/news.jsx";
import Setings from "./components/pages/setings.jsx";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/Music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/seting" component={Setings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
