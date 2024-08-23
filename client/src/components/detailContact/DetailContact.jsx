import H1Component from "../ui/text/H1component";
import H3Component from "../ui/text/H3component";
import ParagraphComponent from "../ui/text/ParagraphComponent";

import "./DetailContact.css";

function DetailContact({ selectContact }) {
  return (
    <>
      <section className="contact-section">
        <article className="contact-title">
          <H1Component
            title1={`${selectContact.first_name} ${selectContact.last_name}`}
          />
        </article>
        <article className="contact-category">
          <H3Component title3="Catégorie :" />
          <ParagraphComponent
            text={selectContact.category_name}
            css="contact-category-response"
          />
        </article>
        <article className="contact-address">
          <H3Component title3="Adresse :" />
          <ParagraphComponent
            text={selectContact.address}
            css="contact-address-response"
          />
        </article>
        <article className="contact-contact">
          <H3Component title3="Contact :" />
          <div className="contact-contact-response">
            <ParagraphComponent text={selectContact.phone} />
            <ParagraphComponent text={selectContact.email} />
          </div>
        </article>
        {selectContact.note_content === "" ? (
          <article className="contact-note">
            <H3Component title3="" />
            <div className="contact-note-response">
              <ParagraphComponent text="" css="contact-note-content" />
              <ParagraphComponent text="" css="contact-note-date" />
            </div>
          </article>
        ) : (
          <article className="contact-note">
            <H3Component title3="Notes :" />
            <div className="contact-note-response">
              <ParagraphComponent
                text={selectContact.note_content}
                css="contact-note-content"
              />
              <ParagraphComponent
                text={selectContact.note_creation_date}
                css="contact-note-date"
              />
            </div>
          </article>
        )}
      </section>
      <section className="contact-section">map</section>
    </>
  );
}

export default DetailContact;
