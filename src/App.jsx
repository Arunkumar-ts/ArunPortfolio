import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import Home from "./component/Home";

function App() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isloading) {
    return (
      <center
        className="loader"
        style={{ backgroundColor: "rgba(255, 165, 0,0.1)" }}
      >
        <ThreeDot
          variant="pulsate"
          color="rgb(255,69,0)"
          size="medium"
          text=""
        />
      </center>
    );
  } else {
    return (
      <>
        <Home />
      </>
    );
  }
}

export default App;
