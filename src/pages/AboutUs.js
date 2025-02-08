import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import Backup from '../assets/images/backup.png'

const AboutUs = ({ apiPath }) => {
  const { data: movies } = useFetch(apiPath);
  const movieImages = movies?.map(
    (movie) => `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
  );

  const [bgImage, setBgImage] = useState(
    movieImages?.[0] || Backup
  );

  useEffect(() => {
    if (movieImages && movieImages.length > 0) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * movieImages.length);
        setBgImage(movieImages[randomIndex]);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [movieImages]);


  return (
    <div
      className="flex flex-col justify-center items-center text-center h-screen p-6 text-white transition-all duration-1000"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="bg-black bg-opacity-60 p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">About CineVerse</h1>
        <p className="text-lg max-w-2xl mb-6">
          Welcome to <span className="text-blue-400">CineVerse</span> – your
          ultimate destination for the latest, trending, and top-rated movies!
          We bring you a vast collection of films from around the world, keeping
          you updated with the hottest releases and timeless classics. Dive into
          the world of cinema with us and experience entertainment like never
          before!
        </p>
<p className="text-3xl font-medium text-grey-900 mt-6 ">
Developed by{" "}
  <span className="text-white bg-gradient-to-r from-gray-800 to-gray-900 animate-pulse px-4 py-2 rounded-full shadow-xl hover:bg-gradient-to-l transition-all duration-300 ease-in-out">
    Shivam Modanwal
  </span>
</p> 
      </div>
    </div>
  );
};

export default AboutUs;






// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="flex flex-col justify-center items-center text-center h-screen p-6 bg-gray-900 text-white">
//       <h1 className="text-4xl font-bold mb-4">About CineVerse</h1>
//       <p className="text-lg max-w-2xl mb-6">
//         Welcome to <span className="text-blue-400">CineVerse</span> – your ultimate destination for the latest, trending, and top-rated movies! We bring you a vast collection of films from around the world, keeping you updated with the hottest releases and timeless classics. Dive into the world of cinema with us and experience entertainment like never before!
//       </p>
//       <p className="text-lg font-semibold">Created by Shivam Modanwal</p>
//       <img
//         src="https://source.unsplash.com/featured/?cinema,movies"
//         alt="Cinema Experience"
//         className="rounded-2xl shadow-lg w-full max-w-3xl"
//       />
//     </div>
//   );
// };

// export default AboutUs;
