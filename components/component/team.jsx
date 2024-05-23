import Link from "next/link";
import Image from "next/image";
import filali from "../../public/filali.jpg";
import aziz from "../../public/aziz.png";
import kawtar from "../../public/kawtar.jpeg";
import tridane from "../../public/tridane.jpeg";
import {
  HoverCardTrigger,
  HoverCardContent,
  HoverCard,
} from "@/components/ui/hover-card";

export default function team() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 mx-auto ">
      <div className="flex flex-col items-center  gap-8 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Conférenciers principaux
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="group relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <div className="aspect-square w-full">
                  <Image
                    alt=""
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                    height={400}
                    src={filali}
                    style={{
                      aspectRatio: "400/400",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h4 className="text-xl font-semibold text-white">
                    Sanae Fillali
                  </h4>

                  <div className="mt-4 flex items-center gap-4">
                    <Link className="text-white hover:text-gray-300" href="#">
                      <TwitterIcon className="h-6 w-6" />
                    </Link>
                    <Link className="text-white hover:text-gray-300" href="#">
                      <LinkedinIcon className="h-6 w-6" />
                    </Link>
                    <Link className="text-white hover:text-gray-300" href="#">
                      <GithubIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Jared Palmer"
                    className="h-16 w-16 rounded-full object-cover"
                    height={64}
                    src={filali}
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width={64}
                  />
                  <div>
                    <h4 className="text-lg font-semibold">Sanae Fillali</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      Professeur au département de Mathématiques et informatique
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  Professeur au département de Mathématiques et informatique à
                  la faculté des sciences Ben M'Sik à l'Université Hassan II de
                  Casablanca, Maroc
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="group relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <div className="aspect-square w-full">
                  <Image
                    alt="Shu Ding"
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                    height={400}
                    src={tridane}
                    style={{
                      aspectRatio: "400/400",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h4 className="text-xl font-semibold text-white">
                    Abdessamad Tridane
                  </h4>

                  <div className="mt-4 flex items-center gap-4">
                    <Link className="text-white hover:text-gray-300" href="#">
                      <TwitterIcon className="h-6 w-6" />
                    </Link>
                    <Link className="text-white hover:text-gray-300" href="#">
                      <LinkedinIcon className="h-6 w-6" />
                    </Link>
                    <Link className="text-white hover:text-gray-300" href="#">
                      <GithubIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    alt=""
                    className="h-16 w-16 rounded-full object-cover"
                    height={64}
                    src={tridane}
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width={64}
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      Abdessamad Tridane
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      Professeur au département de Mathématiques
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  Professeur au département de Mathématiques à l'Université des
                  Émirats arabes unis | Émirats arabes unis
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="group relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <div className="aspect-square w-full">
                  <Image
                    alt="Shadcn"
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                    height={400}
                    src={aziz}
                    style={{
                      aspectRatio: "400/400",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h4 className="text-xl font-semibold text-white">
                    M.A Aziz Alaoui
                  </h4>

                  <div className="mt-4 flex items-center gap-4">
                    <Link className="text-white hover:text-gray-300" href="#">
                      <TwitterIcon className="h-6 w-6" />
                    </Link>
                    <Link className="text-white hover:text-gray-300" href="#">
                      <LinkedinIcon className="h-6 w-6" />
                    </Link>
                    <Link className="text-white hover:text-gray-300" href="#">
                      <GithubIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Shadcn"
                    className="h-16 w-16 rounded-full object-cover"
                    height={64}
                    src={aziz}
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width={64}
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      Professeur de Mathématiques
                    </h4>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  Professeur de Mathématiques et Vice-Président de l'université
                  du Havre Normandie | France
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="group relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <div className="aspect-square w-full">
                  <Image
                    alt="Max Leiter"
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                    height={400}
                    src={kawtar}
                    style={{
                      aspectRatio: "400/400",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h4 className="text-xl font-semibold text-white">
                    Kawtar Benghazi Akhlaki
                  </h4>

                  <div className="mt-4 flex items-center gap-4">
                    <Link className="text-white hover:text-gray-300" href="#">
                      <TwitterIcon className="h-6 w-6" />
                    </Link>
                    <Link className="text-white hover:text-gray-300" href="#">
                      <LinkedinIcon className="h-6 w-6" />
                    </Link>
                    <Link className="text-white hover:text-gray-300" href="#">
                      <GithubIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Max Leiter"
                    className="h-16 w-16 rounded-full object-cover"
                    height={64}
                    src={kawtar}
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width={64}
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      Kawtar Benghazi Akhlaki
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      Head of Engineering
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  Professeur associé au département de langages et systèmes
                  informatiques de l'Université de Grenade | Espagne.is
                  passionate about building scalable and efficient systems.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
