import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/pages/music";
import News from "./components/pages/news.jsx";
import Setings from "./components/pages/setings.jsx";
import { Route, BrowserRouter } from "react-router-dom";
// import store from "./state/state";
function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav data={props.state.dialogsPage.dialogsData} />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs state={props.state.dialogsPage} store={props.store} />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                // newPostData={props.newPostData}
                state={props.state.postsPage}
                store={props.store}
              
              />
            )}
          />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/seting" render={() => <Setings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
