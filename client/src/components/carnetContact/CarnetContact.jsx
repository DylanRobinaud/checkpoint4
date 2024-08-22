import H3Component from "../ui/text/H3component";
import ParagraphComponent from "../ui/text/ParagraphComponent";
import "./CarnetContact.css";

function CarnetContact({ contact }) {
  return (
    <section className="card">
      <H3Component title3={`${contact.first_name} ${contact.last_name}`} />
      <ParagraphComponent text={contact.phone} />
    </section>
  );
}

export default CarnetContact;
