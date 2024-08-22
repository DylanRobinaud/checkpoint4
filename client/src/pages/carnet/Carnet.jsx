import { useLoaderData } from "react-router-dom";

import CarnetContact from "../../components/carnetContact/CarnetContact";

import "./Carnet.css";

function Carnet() {
  const contactsData = useLoaderData();
  return (
    <main>
      {contactsData.map((contact) => (
        <CarnetContact contact={contact} key={contact.id} />
      ))}
    </main>
  );
}

export default Carnet;
