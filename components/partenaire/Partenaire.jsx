import React from "react";
import lwizara from "../../public/logo-wizara.png";
import Rachik from "../../public/Rachik.jpeg";
import fsbm from "../../public/fsbm.jpg";
import bgd from "../../public/bgD.jpg";
import snrst from "../../public/snrst.jpg";
import univ from "../../public/universite.jpg";
import Image from "next/image";

const Partenaire = () => {
  return (
    <div className="flex flex-row mb-24 justify-center">
      <Image
        src={lwizara}
        alt=""
        className="h-[80px] w-[90px] me-12 transform hover:scale-105 transition-transform duration-300"
      />
      <Image
        src={fsbm}
        alt=""
        className="h-[80px] w-[90px] me-12 transform hover:scale-105 transition-transform duration-300"
      />
      <Image
        src={snrst}
        alt=""
        className="h-[80px] w-[90px] me-12 transform hover:scale-105 transition-transform duration-300"
      />
      <Image
        src={bgd}
        alt=""
        className="h-[80px] w-[100px] me-12 transform hover:scale-105 transition-transform duration-300"
      />
      <Image
        src={fsbm}
        alt=""
        className="h-[80px] w-[90px] me-12 transform hover:scale-105 transition-transform duration-300"
      />
      <Image
        src={univ}
        alt=""
        className="h-[80px] w-[90px] transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default Partenaire;
