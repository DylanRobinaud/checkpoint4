import { useLoaderData, Link } from "react-router-dom";

import NewForm from "../../components/newForm/NewForm";
import H2Component from "../../components/ui/text/H2component";
import ParagraphComponent from "../../components/ui/text/ParagraphComponent";

import "./NewContact.css";

function NewContact() {
  const contactData = useLoaderData();
  return (
    <main>
      <section className="form-section">
        <article className="article-new-contact">
          <H2Component title2="Ajouter un contact" />
          <div>
            <ParagraphComponent text="Vous pouvez rajouter les premiers éléments du contact." />
            <ParagraphComponent text="Par la suite vous pourrez modifier et rajouté des informations." />
          </div>
        </article>
      </section>
      <section className="form-section">
        <NewForm data={contactData} />
        <Link className="form-back-link" to="/carnet">
          Retour
        </Link>
      </section>
    </main>
  );
}

export default NewContact;
