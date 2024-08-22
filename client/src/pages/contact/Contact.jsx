import { useLoaderData } from "react-router-dom";

import DetailContact from "../../components/detailContact/DetailContact";

import "./Contact.css";

function Contact() {
  const selectContactData = useLoaderData();
  return (
    <main>
      <DetailContact selectContact={selectContactData} />
    </main>
  );
}

export default Contact;
