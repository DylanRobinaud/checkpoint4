import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";

import App from "./App";
import Carnet from "./pages/carnet/Carnet";
import Contact from "./pages/contact/Contact";
import Form from "./pages/form/Form";
import NewContact from "./pages/newContact/NewContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/carnet",
    element: <Carnet />,
    loader: async () => {
      try {
        const contactsData = await connexion.get("/api/contacts");
        return contactsData.data;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  {
    path: "/contact/:id",
    element: <Contact />,
    loader: async ({ params }) => {
      try {
        const contactsData = await connexion.get(`/api/contacts/${params.id}`);
        return contactsData.data;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  {
    path: "/formulaire/:id",
    element: <Form />,
    loader: async ({ params }) => {
      try {
        const contactsData = await connexion.get(`/api/contacts/${params.id}`);
        return contactsData.data;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  {
    path: "/ajouter_contact",
    element: <NewContact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
