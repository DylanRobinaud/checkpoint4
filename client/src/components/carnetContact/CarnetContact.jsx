import H3Component from "../ui/text/H3component";
import ParagraphComponent from "../ui/text/ParagraphComponent";
import "./CarnetContact.css";

function CarnetContact({ contact }) {
  return (
    <section className="card-box">
      <H3Component
        title3={`${contact.first_name} ${contact.last_name}`}
        css="card-box-title"
      />
      <ParagraphComponent text={contact.phone} css="card-box-paragraphe" />
    </section>
  );
}

export default CarnetContact;
