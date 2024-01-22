import { useState, useEffect } from "react";

const Onboarding = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [trips, setTrips] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // CORS error
  useEffect(() => {
    fetch("https://pfx-interview.s3.ap-southeast-2.amazonaws.com/trips.json")
      .then((response) => response.json())
      .then((data) => setTrips(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const hardcodedTrips = [
    {
      name: "Bali, Indonesia",
      image: "https://i.ibb.co/hcwLryT/bali-indonesia.jpg",
      rented_props_count: 100,
    },
    {
      name: "Tokyo, Japan",
      image: "https://i.ibb.co/vZt1WZS/tokyo-city.jpg",
      rented_props_count: 234363,
    },
    {
      name: "Sydney, Australia",
      image: "https://i.ibb.co/mhKDThR/sydney-city.jpg",
      rented_props_count: 9124,
    },
    {
      name: "New York, United States",
      image: "https://i.ibb.co/phPV00W/new-york-city.jpg",
      rented_props_count: 2541098,
    },
    {
      name: "Bali, Indonesia",
      image: "https://i.ibb.co/hcwLryT/bali-indonesia.jpg",
      rented_props_count: 100,
    },
    {
      name: "Tokyo, Japan",
      image: "https://i.ibb.co/vZt1WZS/tokyo-city.jpg",
      rented_props_count: 234363,
    },
    {
      name: "Sydney, Australia",
      image: "https://i.ibb.co/mhKDThR/sydney-city.jpg",
      rented_props_count: 9124,
    },
    {
      name: "New York, United States",
      image: "https://i.ibb.co/phPV00W/new-york-city.jpg",
      rented_props_count: 2541098,
    },
  ];

  return (
    <div className="relative w-full mt-8 flex flex-wrap">
      {hardcodedTrips.map((trip, index) => (
        <div key={index} className="w-1/3 md:w-1/4 p-1 h-fit">
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img
              src={trip.image}
              alt={trip.name}
              className="w-full h-auto min-h-[120px] object-cover rounded-md"
            />
          </div>
        </div>
      ))}

      <div className="pt-10 w-full z-10 flex flex-col items-center text-center bg-white shadow-[0px_-66px_41px_16px_#f7fafc] overflow-hidden p-4 mt-[-60px]">
        <h2 className="font-semibold text-2xl mt">New Place, New Home!</h2>
        <p className="text-base nav-gray">
          Are you ready to uproot and start over in a new area? Placoo will help
          you on your journey!
        </p>
        <div className="w-full mt-10">
          <button className="mb-4 violet-button rounded-full w-full py-3">
            Log in
          </button>
          <button className="white-button  rounded-full w-full py-3">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
