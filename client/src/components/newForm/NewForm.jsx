import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import H3Component from "../ui/text/H3component";
import Input from "../ui/input/Input";
import Select from "../ui/select/Select";
import ButtonSubmit from "../ui/button/buttonSubmit/ButtonSubmit";

import connexion from "../../services/connexion";

import "./NewForm.css";

const initialContact = {
  last_name: "",
  first_name: "",
  phone: "",
  email: "",
  address: "",
  category_id: null,
};

function Newform() {
  const [contact, setContact] = useState(initialContact);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await connexion.get("/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories", error);
      }
    };

    fetchCategories();
  }, []);

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmitNew = async (e) => {
    e.preventDefault();
    try {
      await connexion.post("/api/contacts", contact);
      navigate(`/carnet`);
    } catch (error) {
      console.error("There was an error updating the contact!", error);
    }
  };

  return (
    <article>
      <form onSubmit={handleSubmitNew}>
        <fieldset>
          <legend>
            <H3Component title3="Identité :" />
          </legend>
          <Input
            label="Nom de famille :"
            type="text"
            id="last_name"
            name="last_name"
            value={contact.last_name}
            placeholder=""
            onChange={handleContactChange}
          />
          <Input
            label="Prénom :"
            type="text"
            id="first_name"
            name="first_name"
            value={contact.first_name}
            placeholder=""
            onChange={handleContactChange}
          />
        </fieldset>
        <fieldset>
          <legend>
            <H3Component title3="Catégorie :" />
          </legend>
          <Select
            datas={categories}
            question="Choisissez la catégorie du contact :"
            id="category_id"
            name="category_id"
            value={contact.category_id}
            onChange={handleContactChange}
          />
        </fieldset>
        <fieldset>
          <legend>
            <H3Component title3="Adresse :" />
          </legend>
          <Input
            label="Adresse :"
            type="text"
            id="address"
            name="address"
            value={contact.address}
            placeholder=""
            onChange={handleContactChange}
          />
        </fieldset>
        <fieldset>
          <legend>
            <H3Component title3="Contact :" />
          </legend>
          <Input
            label="Numéro de téléphone :"
            type="text"
            id="phone"
            name="phone"
            value={contact.phone}
            placeholder=""
            onChange={handleContactChange}
          />
          <Input
            label="Adresse email :"
            type="email"
            id="email"
            name="email"
            value={contact.email}
            placeholder=""
            onChange={handleContactChange}
          />
        </fieldset>
        <div className="form-button">
          <ButtonSubmit text="Submit" handleClick={handleSubmitNew} />
        </div>
      </form>
    </article>
  );
}

export default Newform;
