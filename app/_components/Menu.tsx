"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import { Phone, Mail } from "lucide-react";

type MenuProps = {
  heroHeight: number; // Hauteur du Hero (pour Desktop)
  heroWidth: number; // Largeur du Hero (pour Mobile)
};

export const Menu = ({ heroHeight }: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed z-50">
      {/* Barre verticale (Desktop) */}
      {width >= 1025 && (
        <motion.div
          initial={{ left: "4rem" }}
          animate={{ left: isMenuOpen ? "12.5rem" : "4rem" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            height: `${heroHeight}px`, // Hauteur dynamique
          }}
          className="hidden lg:block absolute w-[1px] bg-brand-primary z-50"
        />
      )}

      <div
        className={`absolute z-30 ${
          width >= 1025
            ? "" // Applique uniquement les styles spécifiques à Desktop
            : "top-4 right-4" // Position pour Mobile
        }`}
        style={{
          ...(width >= 1025 && {
            // Ces styles ne s'appliquent qu'à Desktop
            height: `${heroHeight}px`, // Hauteur de la barre verticale
            width: "calc(4.5rem - 8px)", // Largeur dynamique pour Desktop
            backgroundColor: "hsl(var(--brand-cream))", // Fond blanc pour masquer la carte Hero
          }),
        }}
        onClick={toggleMenu}
      >
        <div
          className={`absolute ${
            width >= 1025
              ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" // Centrage pour Desktop
              : "" // Position pour Mobile
          } lg:w-10 lg:h-10 lg:border lg:border-transparent lg:rounded-full lg:cursor-pointer lg:transition lg:hover:bg-brand-primary hover:g-brand-primary group flex flex-col items-center justify-center`}
        >
          <div className="lg:w-1 lg:h-1 mb-1 rounded-full bg-brand-primary group-hover:bg-brand-cream" />
          <div className="lg:w-1 lg:h-1 mb-1 rounded-full bg-brand-primary group-hover:bg-brand-cream" />
          <div className="lg:w-1 lg:h-1 rounded-full bg-brand-primary group-hover:bg-brand-cream" />
        </div>
      </div>

      {/* Menu latéral avec animation */}
      <motion.div
        initial={width >= 1025 ? { x: "-100%" } : { y: "-100%" }}
        animate={
          isMenuOpen
            ? width >= 1025
              ? { x: 0 }
              : { y: 0 }
            : width >= 1025
            ? { x: "-100%" }
            : { y: "-100%" }
        }
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed ${
          width >= 1025
            ? "top-0 left-0 w-[15rem] lg:w-[12.5rem] h-full"
            : "top-0 left-0 w-full h-[30rem]"
        } bg-brand-dark shadow-lg z-50`}
      >
        {/* Bouton pour fermer */}
        <div className="flex justify-end p-4">
          <button
            className="text-brand-cream text-2xl cursor-pointer hover:text-brand-primary"
            onClick={toggleMenu}
          >
            <X />
          </button>
        </div>

        {/* Contenu du menu */}
        <div className="lg:p-4 space-y-6 ml-4">
          <div>
            <h2 className="text-lg font-bold text-brand-cream cursor-pointer transition hover:text-brand-primary">
              Sections
            </h2>
            <ul className="space-y-2">
              <li className="cursor-pointer text-brand-cream transition hover:text-brand-primary">
                Adulte
              </li>
              <li className="cursor-pointer text-brand-cream transition hover:text-brand-primary">
                Pédiatrie
              </li>
              <li className="cursor-pointer text-brand-cream transition hover:text-brand-primary">
                Drainage
              </li>
              <li className="cursor-pointer text-brand-cream transition hover:text-brand-primary">
                Haptonomie
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-brand-cream cursor-pointer transition hover:text-brand-primary">
              Avis patients
            </h2>
          </div>
          <div>
            <h2 className="text-lg font-bold text-brand-cream cursor-pointer transition hover:text-brand-primary">
              Qui je suis
            </h2>
          </div>
          <div>
            <h2 className="text-lg font-bold text-brand-cream">Contacts</h2>
            <div className="flex space-x-4 mt-2">
              <div className="w-10 h-10 text-brand-cream bg-transparent flex items-center justify-center rounded-full cursor-pointer transition hover:border-brand-primary hover:bg-brand-primary">
                <Phone />
              </div>
              <div className="w-10 h-10 text-brand-cream bg-transparent flex items-center justify-center rounded-full cursor-pointer transition hover:border-brand-primary hover:bg-brand-primary">
                <Mail />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
