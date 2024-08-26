-- SQLBook: Code
CREATE TABLE category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250) NOT NULL
);

CREATE TABLE contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  last_name VARCHAR(100) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  phone VARCHAR(50),
  email VARCHAR(100),
  address TEXT,
  category_id INT,
  profile_img VARCHAR(255),
  FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE SET NULL
);

CREATE TABLE note (
  id INT AUTO_INCREMENT PRIMARY KEY,
  contact_id INT,
  note_text TEXT,
  creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (contact_id) REFERENCES contact(id) ON DELETE CASCADE
);

-- Insert categories
INSERT INTO category (name) VALUES
("Famille"),
("Amis"),
("Travail"),
("Autres");

-- Insert contacts
-- Insert contacts avec images de profil
INSERT INTO contact (last_name, first_name, phone, email, address, category_id, profile_img) VALUES
("Dupont", "Jean", "0123456789", "jean.dupont@example.com", "10 Rue de la Paix, Paris", 1, "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Martin", "Sophie", "0234567890", "sophie.martin@example.com", "20 Avenue des Champs-Élysées, Paris", 2, "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Lefebvre", "Pierre", "0345678901", "pierre.lefebvre@example.com", "30 Boulevard Montmartre, Paris", 3, "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Dubois", "Claire", "0456789012", "claire.dubois@example.com", "40 Rue de Rivoli, Paris", 4, "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Moreau", "Louis", "0567890123", "louis.moreau@example.com", "50 Place de la République, Paris", 3, "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Durand", "Camille", "0678901234", "camille.durand@example.com", "60 Avenue Victor Hugo, Paris", 1, "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Petit", "Antoine", "0789012345", "antoine.petit@example.com", "70 Rue de la Gaité, Paris", 2, "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Robert", "Julie", "0890123456", "julie.robert@example.com", "80 Boulevard de Sébastopol, Paris", 2, "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Richard", "Nicolas", "0901234567", "nicolas.richard@example.com", "90 Rue Oberkampf, Paris", 3, "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Simon", "Isabelle", "0912345678", "isabelle.simon@example.com", "100 Quai de Jemmapes, Paris", 4, "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Michel", "Alexandre", "0123456781", "alexandre.michel@example.com", "110 Avenue des Ternes, Paris", 3, "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Lemoine", "Elise", "0123456782", "elise.lemoine@example.com", "120 Rue du Bac, Paris", 2, "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Gauthier", "Benoît", "0123456783", "benoit.gauthier@example.com", "130 Rue de Rennes, Paris", 4, "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Leroy", "Marion", "0123456784", "marion.leroy@example.com", "140 Rue Montorgueil, Paris", 2, "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Meyer", "Céline", "0123456785", "celine.meyer@example.com", "150 Rue du Faubourg Saint-Antoine, Paris", 1, "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Roux", "Thomas", "0123456786", "thomas.roux@example.com", "160 Rue de Belleville, Paris", 2, "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Bernard", "Lucie", "0123456787", "lucie.bernard@example.com", "170 Avenue de Clichy, Paris", 4, "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=400"),
("Morel", "Arthur", "0123456788", "arthur.morel@example.com", "180 Boulevard de la Villette, Paris", 3, "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400");


-- Insert notes
INSERT INTO note (contact_id, note_text) VALUES
(1, "Appel de suivi prévu pour le 10 août"),
(2, "Envoyer une carte d'anniversaire"),
(3, "Discuter des nouveaux projets lors de la prochaine réunion"),
(4, "Préparer un cadeau pour la fête"),
(5, "Confirmer la réservation pour le dîner du 15 août"),
(6, "Envoyer les documents demandés"),
(7, ""),
(8, "Prendre des nouvelles après l'opération"),
(9, "Organiser un déjeuner de rattrapage"),
(10, "Vérifier la disponibilité pour la réunion de la semaine prochaine"),
(11, "Envoyer un email de remerciement après l'événement"),
(12, ""),
(13, "Envoyer une carte postale depuis les vacances"),
(14, "Discuter du prochain voyage en famille"),
(15, "Planifier une sortie cinéma pour le week-end"),
(16, "Vérifier les dernières nouvelles du projet"),
(17, "Envoyer le rapport de synthèse avant le 5 août"),
(18, "");
