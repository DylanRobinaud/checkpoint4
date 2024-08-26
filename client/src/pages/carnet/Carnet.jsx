import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";

import CarnetContact from "../../components/carnetContact/CarnetContact";
import H2Component from "../../components/ui/text/H2component";

import "./Carnet.css";

function Carnet() {
  const contactsData = useLoaderData();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [itemsToShow, setItemsToShow] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setItemsToShow(mobile ? 10 : 20);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="carnet-main">
      <section className="carnet-section">
        <div className="carnet-div-left-page">
          <H2Component title2="Carnet de contact" />
        </div>
        <article className="carnet-article">
          {contactsData
            .slice(0, isMobile ? itemsToShow : itemsToShow / 2)
            .map((contact) => (
              <Link
                to={`/contact/${contact.id}`}
                className="carnet-link"
                key={contact.id}
              >
                <CarnetContact contact={contact} />
              </Link>
            ))}
        </article>
        {!isMobile && (
          <article className="carnet-article">
            <div className="carnet-div-right-page">
              <H2Component title2="Carnet de contact" />
            </div>
            {contactsData.slice(itemsToShow / 2, itemsToShow).map((contact) => (
              <Link
                to={`/contact/${contact.id}`}
                className="carnet-link"
                key={contact.id}
              >
                <CarnetContact contact={contact} />
              </Link>
            ))}
          </article>
        )}
        <Link className="contact-back-link" to="/">
          Retour
        </Link>
        <Link className="contact-addContact-link" to="/ajouter_contact">
          Ajouter un contact
        </Link>
      </section>
    </main>
  );
}

export default Carnet;
