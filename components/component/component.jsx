import React, { useState } from "react";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";

const Tabs = ({ tabs, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            className={`px-4 py-2 rounded-full ${
              index === activeTab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </motion.button>
        ))}
      </div>
      <div className="flex justify-center">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`px-4 py-2 ${index === activeTab ? "block" : "hidden"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage
const App = () => {
  const tabs = [
    {
      title: "Description",
      content: (
        <div className=" mt-4 max-w-[600px] text-justify">
          Les Journées des Sciences de l'Ingénieur et de l'Intelligence
          Artificielle (JSIIA) sont un événement exceptionnel réunissant des
          experts, des chercheurs, des professionnels et des passionnés du
          domaine de l'ingénierie et de l'intelligence artificielle. Cet
          événement offre une plateforme dynamique pour l'échange d'idées, la
          présentation de recherches innovantes et la discussion sur les
          avancées les plus récentes dans ces domaines en constante évolution.
          Lors de ces journées, les participants auront l'opportunité d'assister
          à des conférences données par des experts renommés, d'assister à des
          ateliers interactifs et de participer à des sessions de discussion sur
          des sujets variés liés à l'ingénierie et à l'intelligence
          artificielle. Les présentations couvriront un large éventail de
          thèmes, notamment la robotique, l'apprentissage automatique, la vision
          par ordinateur, les systèmes intelligents, les réseaux neuronaux, la
          cybersécurité, et bien d'autres encore. Les JSIIA offrent également
          une excellente opportunité de réseautage, permettant aux participants
          d'établir des contacts avec d'autres professionnels du secteur, de
          discuter des dernières tendances et de découvrir de nouvelles
          collaborations potentielles. Que vous soyez un chercheur, un étudiant,
          un ingénieur ou un entrepreneur, les Journées des Sciences de
          l'Ingénieur et de l'Intelligence Artificielle sont un événement
          incontournable pour rester à la pointe de l'innovation et de la
          technologie.
        </div>
      ),
    },
    {
      title: "Sujets",
      content: (
        <div class=" mt-4 max-w-[600px] text-justify">
          <ul>
            <li className="flex flex-row justify-start">
              <CheckIcon /> Robotics and Automation
            </li>
            <li className="flex flex-row justify-start">
              <CheckIcon /> Machine Learning and Artificial Intelligence
            </li>
            <li className="flex flex-row justify-start">
              <CheckIcon /> Intelligent Systems and Internet of Things (IoT)
            </li>
            <li className="flex flex-row justify-start">
              <CheckIcon /> Computer Vision and Image Processing
            </li>
            <li className="flex flex-row justify-start">
              <CheckIcon /> Data Engineering and Predictive Analytics
            </li>
            <li className="flex flex-row justify-start">
              <CheckIcon /> Control Systems and Artificial Intelligence
            </li>
            <li className="flex flex-row justify-start">
              <CheckIcon /> Cybersecurity and Data Protection
            </li>
            <li className="flex flex-row justify-start">
              <CheckIcon /> Biological Modeling and Disease Prediction
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Modèle",
      content: (
        <div className=" mt-4 max-w-[600px] text-justify">
          Pour vous aider à préparer votre soumission, veuillez télécharger
          notre modèle de document de conférence ci-dessous. Ce modèle fournit
          des directives et une structure pour la préparation de votre
          proposition, assurant ainsi une uniformité et une cohérence dans les
          soumissions. Veuillez consulter attentivement les instructions
          incluses dans le modèle avant de soumettre votre proposition.
        </div>
      ),
    },
  ];

  return (
    <div className="p-8">
      <Tabs tabs={tabs} initialTab={0} />
    </div>
  );
};

export default App;
