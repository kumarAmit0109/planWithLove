import Card from "./Card.jsx";

function Cards({ tours, removeTour }) {
    return (
        <div className="flex justify-center flex-wrap gap-10">
            {tours.map((tour) => {
                return (
                    <Card
                        key={tour.id}
                        tour={tour}
                        removeTour={removeTour}
                    ></Card>
                );
            })}
        </div>
    );
}

export default Cards;
