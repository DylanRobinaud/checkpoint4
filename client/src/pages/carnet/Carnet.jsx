import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import CarnetContact from "../../components/carnetContact/CarnetContact";

import "./Carnet.css";

function Carnet() {
  const contactsData = useLoaderData();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [itemsToShow, setItemsToShow] = useState(20); // Par défaut, 20 éléments

  useEffect(() => {
    // Fonction pour gérer la mise à jour de l'état en fonction de la taille de l'écran
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setItemsToShow(mobile ? 10 : 20); // Affiche 10 éléments sur mobile, 20 sur bureau
    };

    // Ajoute un écouteur d'événements pour redimensionner la fenêtre
    window.addEventListener("resize", handleResize);

    // Nettoie l'écouteur d'événements lorsque le composant est démonté
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <section className="carnet-section">
        <article className="carnet-article">
          {contactsData
            .slice(0, isMobile ? itemsToShow : itemsToShow / 2)
            .map((contact) => (
              <CarnetContact contact={contact} key={contact.id} />
            ))}
        </article>
        {!isMobile && (
          <article className="carnet-article">
            {contactsData.slice(itemsToShow / 2, itemsToShow).map((contact) => (
              <CarnetContact contact={contact} key={contact.id} />
            ))}
          </article>
        )}
      </section>
    </main>
  );
}

export default Carnet;
