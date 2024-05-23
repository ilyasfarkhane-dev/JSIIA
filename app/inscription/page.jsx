"use client";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
  {
    name: "Présentiel",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "150 MAD", annually: "150 MAD" },
    description: "The essentials to provide your best work for clients.",
    features: [
      "Certificat de participation",
      "Matériel de conférence",
      "Accès aux expositions",
      "Déjeuner et pauses thé/café",
      "Documents de la conférence",
      "Bloc-notes | Stylo",
      "Badge| Dépliant | Programme",
    ],
    mostPopular: false,
  },
  {
    name: "Présentiel",
    id: "tier-startup",
    href: "#",
    price: { monthly: "250 MAD", annually: "250 MAD" },
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "Certificat de Communication",
      "Certificat de participation",
      "Matériel de conférence",
      "Accès aux expositions",
      "Déjeuner et pauses thé/café",
      "Documents de la conférence",
      "Cartable| Rapport des actes",
      "Bloc-notes | Stylo",
      "Badge| Dépliant | Programme",
    ],
    mostPopular: true,
  },
  {
    name: "A distance",
    id: "tier-enterprise",
    href: "#",
    price: { monthly: "250 MAD", annually: "250 MAD" },
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Certificat de Communication",
      "Certificat de participation",

      "Documents de la conférence",
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-12 mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Inscription
            </p>
          </div>

          <div className="isolate mx-auto mt-[80px] grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "ring-2 ring-indigo-600"
                    : "ring-1 ring-gray-200",
                  "rounded-3xl p-8 xl:p-10"
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                      "text-lg font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? <p className=""> </p> : null}
                </div>

                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price[frequency.value]}
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                      : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                    "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                >
                  Inscription
                </a>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-indigo-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Réservez votre place maintenant
            </h2>
            <p className="text-lg font-bold tracking-tight mt-8 text-gray-500 sm:text-lg">
              JSIIA 2024 – Faculté des sciences Ben M’Sik, Casablanca
            </p>
          </div>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Inscription
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Programe <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
