import H2Component from "../ui/text/H2component";
import H3Component from "../ui/text/H3component";
import ParagraphComponent from "../ui/text/ParagraphComponent";

import "./DetailContact.css";

function DetailContact({ selectContact }) {
  return (
    <section className="">
      <H2Component
        title2={`${selectContact.first_name} ${selectContact.last_name}`}
      />
      <H3Component title3="Catégorie :" />
      <ParagraphComponent text={selectContact.category_name} />
      <H3Component title3="Adresse :" />
      <ParagraphComponent text={selectContact.address} />
      <H3Component title3="Contact :" />
      <ParagraphComponent text={selectContact.phone} />
      <ParagraphComponent text={selectContact.email} />
      {selectContact.note_content === "" ? (
        <div>
          <H3Component title3="" />
          <ParagraphComponent text="" />
          <ParagraphComponent text="" />
        </div>
      ) : (
        <div>
          <H3Component title3="Notes :" />
          <ParagraphComponent text={selectContact.note_content} />
          <ParagraphComponent text={selectContact.note_creation_date} />
        </div>
      )}
    </section>
  );
}

export default DetailContact;
