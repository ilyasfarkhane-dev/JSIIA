import Image from "next/image";
import Rachik from "../../public/Rachik.jpeg";

const people = [
  {
    name: "Mostafa RACHIK",
    role: "Coordonateur",
    description:
      "Rachik is an experienced coordinator with expertise in project management and team leadership.",
    imageUrl: Rachik,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Mostafa RACHIK",
    role: "Coordonateur",
    description:
      "Rachik is an experienced coordinator with expertise in project management and team leadership.",
    imageUrl: Rachik,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Mostafa RACHIK",
    role: "Coordonateur",
    description:
      "Rachik is an experienced coordinator with expertise in project management and team leadership.",
    imageUrl: Rachik,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

const professionals = [
  { title: "Pr.", name: "M. RACHIK" },
  { title: "Pr.", name: "J. BOUYAGHROUMNI" },
  { title: "Pr.", name: "S. BIDAH" },
  { title: "Pr.", name: "K. ADNAOUI" },
  { title: "Pr.", name: "H. LABRIJI" },
  { title: "Pr.", name: "A. EL ADRAOUI" },
  { title: "Pr.", name: "H. FERJOUCHIA" },
  { title: "Pr.", name: "A. NAMIR" },
  { title: "Dr.", name: "I. KHALOUFI" },
  { title: "Dr.", name: "M. KARIM" },
  { title: "Dr.", name: "Y. BENFATAH" },
  { title: "Dr.", name: "M. LAFIF" },
  { title: "Dr.", name: "A. KOUIDERE" },
  { title: "Dr.", name: "O. AIT LMLOUDDEN" },
  { title: "Dr.", name: "A. ESSOUNAINI" },
  { title: "Phd.", name: "I. DEHAJ" },
  { title: "Phd.", name: "M. REDOUANE" },
  { title: "Phd.", name: "M. KADI" },
  { title: "Phd.", name: "A. KHADDAR" },
];
const professionals2 = [
  { title: "Pr. A. EL ADRAOUI", name: "(FSBM, Casablanca)" },
  { title: "Pr. K. HATTAF", name: "(CRMEF Casablanca)" },
  { title: " Pr. A. LABZAI", name: "(CRMEF Essaouira)" },
  { title: "Pr. M. IZID", name: "(FSBM, Casablanca)" },
  { title: "Pr. H. BOUTAYEB", name: "(FSBM, Casablanca)" },
  { title: "Pr. T. AHAJJAM", name: "(FSBM, Casablanca)" },
  { title: "Pr. I. ELBERRAI", name: "(FSBM, Casablanca)" },
  { title: "Pr. O. ZAKARY", name: "(FSBM, Casablanca)" },
];
export default function Example() {
  return (
    <div className="bg-white py-32 mt-12">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Comité de pilotage
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                className="mx-auto h-56 w-56 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              <p className="text-sm leading-6 text-gray-600">
                {person.description}
              </p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={person.twitterUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-[80px]">
          Comité d'organisation
        </h2>
        <h4 className="text-xl font-bold tracking-tight text-gray-700 sm:text-4xl my-[80px] mt-8">
          Faculté des sciences Ben M'Sik
        </h4>
        <div className="bg-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {professionals.map((professional, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-lg font-medium text-gray-800">
                    {professional.title} {professional.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h4 className="text-xl font-bold tracking-tight text-gray-700 sm:text-4xl my-[80px] mt-8">
          Comité scientifique
        </h4>
        <div className="bg-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {professionals2.map((professional, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-lg font-medium text-gray-800">
                    {professional.title}
                  </p>
                  <p className="text-lg font-medium text-gray-800">
                    {professional.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
