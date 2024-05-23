import React from "react";
import Rachik from "../../public/conf-bg.jpg";
import Image from "next/image";
import "./Card.css";

const cardsData = [
  {
    icon: "fa-user",
    title: "User",
    description: "This is the user card description.",
  },
  {
    icon: "fa-cog",
    title: "Settings",
    description: "This is the settings card description.",
  },
  {
    icon: "fa-bell",
    title: "Notifications",
    description: "This is the notifications card description.",
  },
];

const Page = () => {
  return (
    <>
      <header className="relative w-full h-64 mt-[150px]">
        <Image
          src={Rachik}
          alt="Background"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
          <h1 className="text-white text-4xl font-bold">JSIIA 2024</h1>
          <p className="text-white text-lg mt-4 font-bold">
            Journées des sciences de l’ingénieur et d’intelligence artificielle
          </p>
        </div>
      </header>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sujets
          </h2>
          <p className="mt-8 text-lg text-gray-600">
            Les JSIIA ne se limitent pas aux sujets présentés ci-dessous. Nous
            accueillons également les contributions et les discussions sur
            d’autres domaines pertinents liés à l’ingénierie et à l’intélligence
            artificielle et à d’autres sujets connexes. Nous encourageons les
            participants à partager leurs recherches et leurs idées dans un
            esprit de collaboration et d’innovation.
          </p>
          <div className="flex flex-wrap justify-center">
            {cardsData.map((card, index) => (
              <div key={index} className="w-64 h-40 m-8 card-container">
                <div className="w-full h-full card relative">
                  <div className="absolute w-full h-full card-front bg-blue-500 text-white flex flex-col items-center justify-center rounded-lg shadow-lg">
                    <i className={`fa ${card.icon} text-3xl mb-2`}></i>
                    <div className="text-lg">{card.title}</div>
                  </div>
                  <div className="absolute w-full h-full card-back bg-green-500 text-white flex flex-col items-center justify-center rounded-lg shadow-lg">
                    <div className="text-lg px-4 text-center">
                      {card.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
