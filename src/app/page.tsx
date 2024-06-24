"use client";

import TripeSearch from "./components/TripSearch";
import QuickSearch from "./components/QuickSearch";
import RecommendedTrips from "./components/RecommendedTrips";

export default function Home() {

  return (
    <div>
      <TripeSearch />
      <QuickSearch />
      <RecommendedTrips />
    </div>
  );
}