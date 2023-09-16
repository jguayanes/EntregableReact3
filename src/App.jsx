import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";
import { getRandom } from "./utils/getRandomDimension";

function App() {
  const [location, setLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;
    const url = `https://rickandmortyapi.com/api/location/${newLocation}`;
    axios
      .get(url)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getRandomDimension = getRandom(126);
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension}`;
    axios
      .get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="bg-black min-h-screen text-white grid gap-2">
      <nav className="bg-[url(/fondo1.png)] grid gap-3">
        <div className="relative grid justify-center">
          <img className="relative animate-pulse" src="/aurora.png" alt="" />
          <img
            className="absolute top-6 md:left-[420px] animate-bounce"
            src="/nombre1.png"
            alt=""
          />
        </div>
        <LocationForm handleSubmit={handleSubmit} />
        <LocationInfo location={location} />
      </nav>
      <header className="bg-[url(/fondo2.png)]">
        <ResidentList
          residents={location?.residents ?? []}
          location={location}
        />
      </header>
    </main>
  );
}

export default App;
