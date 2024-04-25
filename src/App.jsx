import { useState } from "react";
import data from "./data.js";
import Cards from "./components/Cards.jsx";

function App() {
    const [tours, setTours] = useState(data);

    function removeTourHandler(id) {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    function refreshHandler() {
        setTours(data);
    }

    if (tours.length === 0) {
        return (
            <div className="w-full h-screen flex flex-col justify-center items-center gap-y-4">
                <h4 className="font-bold text-2xl tracking-wide">
                    No Tours Left
                </h4>
                <button
                    type="button"
                    onClick={refreshHandler}
                    className="bg-gray-100 px-16 py-1.5 hover:bg-transparent transition-colors duration-300"
                >
                    Refresh
                </button>
            </div>
        );
    }

    return (
        <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto flex flex-col items-center gap-y-8 py-8">
            <h1 className="font-bold text-4xl xsm:text-5xl text-center tracking-wider border-dashed border-4 border-blue-800 rounded-3xl px-6 xsm:px-10 sm:px-14 py-5">
                Plan With Love
            </h1>
            <Cards tours={tours} removeTour={removeTourHandler}></Cards>
        </div>
    );
}

export default App;
