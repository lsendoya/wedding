import "./App.css";
import { useState, useEffect } from "react";
import Heartbeat from "./component/Heartbeat";
import WelcomeMessage from "./component/WelcomeMessage";
import Main from "./component/Main";

function App() {
  const [currentView, setCurrentView] = useState<
    "heartbeat" | "welcome" | "main"
  >("heartbeat");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentView("welcome");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setCurrentView("main");
  };

  return (
    <>
      {currentView === "heartbeat" && <Heartbeat />}
      {currentView === "welcome" && <WelcomeMessage onEnter={handleEnter} />}
      {currentView === "main" && <Main />}
    </>
  );
}

export default App;
