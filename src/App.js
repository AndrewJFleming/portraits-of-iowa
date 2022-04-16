import React, { useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home";
import TopNav from "./component/TopNav/TopNav";
import Auth from "./pages/Auth/Auth";

import { auth } from "./firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import CompletedProject from "./pages/CompletedProject/CompletedProject";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [deadline, setDeadline] = useState(new Date("2020-07-11"));
  const [isPassedDeadline, setIsPassedDeadline] = useState(
    new Date() > deadline
  );

  const regExp = /\(([^)]+)\)/;

  const errorHandling = (message) => {
    console.log(message);

    //Trim down Firebase error
    const trimmedError = regExp.exec(message);
    setError(trimmedError[1]);
    setTimeout(() => setError(""), 3000);
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    if (formType === "reg") {
      setIsLoading(true);
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        console.log(user);
      } catch (error) {
        errorHandling(error.message);
      }
      setIsLoading(false);
    } else {
      setIsLoading(true);
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        console.log(user);
      } catch (error) {
        errorHandling(error.message);
      }
      setIsLoading(false);
    }
  };

  return (
    <Router>
      <TopNav auth={auth} signOut={signOut} currentUser={user} />
      <Switch>
        <Route exact path="/">
          <Home
            user={user}
            deadline={deadline}
            isPassedDeadline={isPassedDeadline}
          />
        </Route>
        <Route path="/completed-project">
          {!isPassedDeadline ? <Redirect to="/" /> : <CompletedProject />}
        </Route>
        <Route path="/register">
          {user ? (
            <Redirect to="/" />
          ) : (
            <Auth
              error={error}
              isLoading={isLoading}
              title="Register"
              desc="Register below to upload images for the Portraits of Iowa project."
              buttonName="Register"
              emailRef={emailRef}
              passwordRef={passwordRef}
              handleSubmit={(event) => handleSubmit(event, "reg")}
            />
          )}
        </Route>
        <Route path="/login">
          {user ? (
            <Redirect to="/" />
          ) : (
            <Auth
              error={error}
              isLoading={isLoading}
              title="Login"
              desc="Login with your registered user credentials to upload images for the Portraits of Iowa project."
              buttonName="Login"
              emailRef={emailRef}
              passwordRef={passwordRef}
              handleSubmit={(event) => handleSubmit(event, "login")}
            />
          )}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
