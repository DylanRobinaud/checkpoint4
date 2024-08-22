CREATE TABLE category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250) NOT NULL
);

-- Create the contact table
CREATE TABLE contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  last_name VARCHAR(250) NOT NULL,
  first_name VARCHAR(250) NOT NULL,
  phone VARCHAR(250),
  email VARCHAR(250),
  address TEXT,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category(id)
);

-- Create the note table
CREATE TABLE note (
  id INT AUTO_INCREMENT PRIMARY KEY,
  contact_id INT,
  content TEXT,
  creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (contact_id) REFERENCES contact(id)
);

-- Insert categories
INSERT INTO category (name) VALUES
('Family'),
('Best Friends'),
('Friends'),
('Work'),
('Other');

-- Insert contacts
INSERT INTO contact (last_name, first_name, phone, email, address, category_id) VALUES
('Dupont', 'Jean', '0123456789', 'jean.dupont@example.com', '10 Rue de la Paix, Paris', 1),
('Martin', 'Sophie', '0234567890', 'sophie.martin@example.com', '20 Avenue des Champs-Élysées, Paris', 2),
('Lefebvre', 'Pierre', '0345678901', 'pierre.lefebvre@example.com', '30 Boulevard Montmartre, Paris', 3),
('Dubois', 'Claire', '0456789012', 'claire.dubois@example.com', '40 Rue de Rivoli, Paris', 5),
('Moreau', 'Louis', '0567890123', 'louis.moreau@example.com', '50 Place de la République, Paris', 4);

-- Insert notes
INSERT INTO note (contact_id, content) VALUES
(1, 'Follow up call scheduled for August 10'),
(2, 'Send birthday card'),
(3, 'Discuss new projects at next meeting');