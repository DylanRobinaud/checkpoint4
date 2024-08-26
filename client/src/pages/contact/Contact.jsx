import { Link, useLoaderData, useNavigate } from "react-router-dom";

import DetailContact from "../../components/detailContact/DetailContact";
import ButtonComponent from "../../components/ui/button/buttonComponent/ButtonComponent";
import Trash from "../../assets/logo/trash.svg";

import "./Contact.css";

import connexion from "../../services/connexion";

function Contact() {
  const selectContactData = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await connexion.delete(`api/contacts/${selectContactData.contact_id}`);
      navigate("/carnet");
    } catch (err) {
      console.error("Error during contact deletion:", err);
    }
  };

  return (
    <main>
      <DetailContact selectContact={selectContactData} />
      <Link
        className="contact-modif-link"
        to={`/formulaire/${selectContactData.contact_id}`}
      >
        Modifier le contact
      </Link>
      <Link className="contact-back-link" to="/carnet">
        Retour
      </Link>
      <ButtonComponent
        text={<img src={Trash} alt="poubelle" />}
        css="carnet-delete"
        handleClick={handleDelete}
      />
    </main>
  );
}

export default Contact;
