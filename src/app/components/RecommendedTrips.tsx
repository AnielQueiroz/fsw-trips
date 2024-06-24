import React, { useEffect, useState } from "react";
import TripItem from "@/components/TripItem";
import { Trip } from "@prisma/client";

const getTrips = async () => {
    const trips = await fetch("http://localhost:3000/hello").then((res) => res.json());
    return trips;
};

const RecommendedTrips = () => {
    const [trips, setTrips] = useState<Trip[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const trips = await getTrips();
                setTrips(trips);
            } catch (err) {
                console.log(err);
            }
        };

        fetchTrips();
    }, []);

    return (
        <div className="container mx-auto p-5">
            <div className="flex items-center">
                <div className="w-full h-[2px] bg-grayLighter"></div>
                <h2 className="px-3 font-medium text-grayPrimary whitespace-nowrap">Destinos recomendados</h2>
                <div className="w-full h-[2px] bg-grayLighter"></div>
            </div>

            <div className="flex flex-col items-center mt-5 gap-5">
                {trips.map((trip: Trip) => (
                    <TripItem key={trip.id} trip={trip} />
                ))}
            </div>
        </div>
    );
};

export default RecommendedTrips;