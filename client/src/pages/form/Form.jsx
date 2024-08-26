import { useLoaderData, Link } from "react-router-dom";

import ModifyContact from "../../components/formContact/modifyContact/ModifyContact";
import ModifyNote from "../../components/formContact/modifyNote/ModifyNote";

import "./Form.css";

function Form() {
  const contactData = useLoaderData();
  return (
    <main>
      <section className="form-section">
        <ModifyContact contactId={contactData.contact_id} />
      </section>

      <section className="form-section">
        <ModifyNote contactId={contactData.contact_id} />
      </section>
      <Link
        className="form-back-link"
        to={`/contact/${contactData.contact_id}`}
      >
        Retour
      </Link>
    </main>
  );
}

export default Form;
