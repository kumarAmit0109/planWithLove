import { useState } from "react";

function Card({ tour, removeTour }) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore
        ? tour.info
        : `${tour.info.substring(0, 200)}...`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="max-w-[400px] h-fit p-5 shadow-cardShadow rounded-xl">
            <img
                src={tour.image}
                className="w-full aspect-square object-cover"
            />
            <p className="font-bold text-xl text-green-600 pt-3 pb-1.5">
                ₹ {tour.price}
            </p>
            <h4 className="font-bold text-2xl py-1.5">{tour.name}</h4>
            <div>
                <span>{description}</span>
                <button
                    type="button"
                    onClick={readmoreHandler}
                    className="text-sky-500"
                >
                    {readmore ? "Show Less" : "Read More"}
                </button>
            </div>
            <button
                type="button"
                onClick={() => removeTour(tour.id)}
                className="w-full font-semibold text-lg text-black bg-red-100 border border-orange-600 rounded-lg hover:text-white hover:bg-orange-600 transition-colors duration-300 py-1.5 mt-8"
            >
                Not Interested
            </button>
        </div>
    );
}

export default Card;
