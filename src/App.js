import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";

const cams = [
  { url: "http://kamery.topr.pl/moko/moko_01.jpg", name: "Morskie_Oko_Rysy" },
  {
    url: "http://kamery.topr.pl/moko_TPN/moko_02.jpg",
    name: "Morskie_Oko_Mnich",
  },
  { url: "http://kamery.topr.pl/stawy2/stawy2.jpg", name: undefined },
  {
    url: "http://kamery.topr.pl/stawy1/stawy1.jpg",
    name: "Dolina_5_Stawow_kamera1",
  },
  {
    url: "http://kamery.topr.pl/hala/hala.jpg",
    name: "Hala Gąsienicowa - widok na Granaty",
  },
  {
    url: "http://kamery.topr.pl/gasienicowa/gasie.jpg",
    name: "Kasprowy_Świnica",
  },
  {
    url: "http://kamery.topr.pl/goryczkowa/gorycz.jpg",
    name: "Kasprowy_Goryczkowa",
  },
  {
    url: "http://kamery.topr.pl/czwierchy/czwierchy.jpg",
    name: "Kościelisko - widok na Czerwone Wierchy",
  },
  {
    url: "http://kamery.topr.pl/chocholowska/chocholow.jpg",
    name: "Chocholowska",
  },
  {
    url: "http://kamery.topr.pl/chocholowska2/chochol2.JPG",
    name: "Chocholowska",
  },
];

function App() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((value) => (value >= cams.length - 1 ? 0 : value + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{ width: "100vw", height: "100vh", position: "relative" }}
      className="App"
    >
      {cams.map((cam, idx) => (
        <div
          key={cam.url}
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: activeSlide === idx ? 1 : 0,
          }}
        >
          <img
            style={{
              width: "100vw",
              height: "100vh",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            alt={cam.name}
            src={`${cam.url}?v=${(new Date()).getTime()}`}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
