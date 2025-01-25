"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TiktokIcon } from "./icons/Tiktok";
import { InstaIcon } from "./icons/Insta";
import { YoutubeIcon } from "./icons/Youtube";
import { Dispatch, SetStateAction } from "react";

type HeroProps = {
  setHeroHeight: Dispatch<SetStateAction<number>>;
  setHeroWidth: Dispatch<SetStateAction<number>>;
};

export const Hero = ({ setHeroHeight, setHeroWidth }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroRef.current) {
      const height = heroRef.current.offsetHeight; // Mesurer la hauteur du Hero
      const width = heroRef.current.offsetWidth; // Mesurer la largeur du Hero
      setHeroHeight(height); // Transmettre la hauteur au parent
      setHeroWidth(width); // Transmettre la largeur au parent
    }
  }, [setHeroHeight, setHeroWidth]);

  return (
    <div
      ref={heroRef}
      className="relative z-0 w-full h-auto mx-auto mt-5 lg:mt-0 overflow-hidden lg:w-[80%] lg:h-[600px] max-w-[95%]" // max-w-[95%] pour éviter que la carte touche les bords
    >
      {/* Image de fond */}
      <div className="absolute inset-0 h-full w-full z-0 overflow-hidden">
        <Image
          src="/images/fonds/Fond-1.webp"
          alt="Fond coloré avec des dessins de plantes"
          fill
          priority
          className="z-0 object-cover"
        />
      </div>

      {/* Contenu du Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center h-auto lg:h-full space-y-6">
        {/* Logo et Carte d'information */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-32 mb-10 lg:mb-6">
          {/* Logo */}
          <div className="flex-shrink-0 mb-6 mt-3 lg:mb-0">
            <div className="w-32 h-32 lg:w-60 lg:h-60 rounded-full border border-black bg-white flex items-center justify-center text-lg lg:text-2xl font-semibold">
              Logo
            </div>
          </div>

          {/* Carte d'information */}
          <div className="bg-white p-4 mx-2 rounded-lg shadow-lg w-auto lg:max-w-xl">
            <h2 className="text-lg font-bold text-center lg:text-left">
              Ophélie Roche. Ostéopathe
            </h2>
            <p className="text-gray-500 mb-2 text-center lg:text-left">
              Santé/beauté
            </p>
            <ul className="text-sm text-center lg:text-left">
              <li>🎓 Ostéopathe D.O</li>
              <li>🌿 Soin drainant & anti-cellulite</li>
              <li>🌿 Posturologie</li>
              <li>🏋️‍♀️ Préparatrice physique</li>
            </ul>
            <p className="text-sm text-gray-700 mt-4 text-center lg:text-left">
              Résidence la Malounière, bât G, avenue de Verdun, Aubagne 13400
            </p>
            <a
              href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere"
              className="text-blue-600 underline mt-2 block text-center lg:text-left"
            >
              www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere
            </a>
          </div>
        </div>

        {/* Icônes sociales */}
        <div className="flex space-x-8 mt-6 pb-6 lg:space-x-32 lg:pb-0 lg:pt-8">
          <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-white border border-black flex items-center justify-center cursor-pointer transition hover:bg-primary">
            <TiktokIcon size={30} />
          </div>
          <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-white border border-black flex items-center justify-center cursor-pointer transition hover:bg-primary">
            <InstaIcon size={30} />
          </div>
          <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-white border border-black flex items-center justify-center cursor-pointer transition hover:bg-primary">
            <YoutubeIcon size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
