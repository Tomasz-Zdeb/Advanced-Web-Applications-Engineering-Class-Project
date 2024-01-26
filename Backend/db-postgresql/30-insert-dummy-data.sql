INSERT INTO public.test_table VALUES (DEFAULT, 1, 'abc', DEFAULT);

INSERT INTO user_table (user_name, password, active, role)
VALUES
    ('user1', 'password1', true, 'ROLE_USER'),
    ('user2', 'password2', true, 'ROLE_USER'),
    ('admin1', 'adminpass1', true, 'ROLE_ADMIN'),
    ('admin2', 'adminpass2', true, 'ROLE_ADMIN'),
    ('john.doe', 'johndoe123', false, 'ROLE_USER'),
    ('jane.doe', 'janedoe456', false, 'ROLE_USER'),
    ('testuser', 'testpassword', true, 'ROLE_USER'),
    ('alice', 'alice123', true, 'ROLE_USER'),
    ('bob', 'bob456', true, 'ROLE_USER'),
    ('guest', 'guestpass', true, 'ROLE_GUEST');

INSERT INTO storage_spaces (name, description, image_uuid) VALUES
('main-warehouse', 'Central storage facility for various goods.', '63da9441-01c1-460c-92fa-befa6361a4b7'),
('metal-workshop', 'Workshop specialized in metalworking and machining.', '78be11b0-c077-43cb-ad69-0f0b7f591092'),
('pottery', 'Space dedicated to the art and craft of pottery.', '51f9e8a7-3316-4269-a3be-fbf0d4c56f80'),
('electronics-workshop', 'A workshop focused on electronics and electrical projects.', '16dc661b-98f4-41c1-a463-b409aebc1e7a'),
('wood-workshop', 'Workshop for woodworking and carpentry.', 'f59d4e52-898e-4d05-aafe-fcc59bc9c73c'),
('metalware-storage', 'Place for storing half ready metal components',null),
('cars-storage', 'Small collection of rare sport cars','f13a8081-05fa-4b1d-ab2d-9d34ea3bca10'),
('armory','Room for your guns','8ad3eef8-8ef4-4fc0-9894-53817ca427c6'),
('small-warehouse','Tiny warehouse around the workshop',null),
('crane-storage','Place to store all your crane accessories','42097c7b-7fb3-44c4-8020-3e4874ccbf52'),
('guitar-center','All your guitars can be safely stored here','485ceeb2-cdd7-4ed3-bcba-3808b237c0d8'),
('wheel-storage','Stores all the weels that customers ordered','147c383b-69a3-4bc8-94ee-4abf236db4b5'),
('pipe-storage','Place to temporarily place pipes used for next few jobs','6f7f532e-7468-4283-9e24-566915016e2f');

INSERT INTO tags (name, color) VALUES
('important', '#000000'),
('primary', '#696969'),
('secondary', '#808080'),
('critical', '#A9A9A9'),
('normal', '#D3D3D3');

INSERT INTO storage_spaces_to_tags (storage_space_name, tag_name) VALUES
('main-warehouse', 'important'),
('main-warehouse', 'primary'),
('metal-workshop', 'secondary'),
('electronics-workshop', 'critical'),
('wood-workshop', 'critical');

INSERT INTO storage_space_items (name, description, quantity, storage_space_name)
VALUES 
    ('small-box', 'A small-sized storage box', 5, 'main-warehouse'),
    ('medium-box', 'A medium-sized storage box', 3, 'main-warehouse'),
    ('large-box', 'A large-sized storage box', 2, 'main-warehouse'),
    ('desk-lamp', 'An LED desk lamp', 1, 'main-warehouse'),
    ('bookshelf', 'A wooden bookshelf', 1, 'main-warehouse');

INSERT INTO help_accordion_contents (id, title, content) VALUES
('collapseOne', 'How to use Storage Spaces', 'Storage Spaces provide a versatile way to organize your items. From the intuitive user interface to advanced categorization options, learn how you can maximize efficiency. Understand how to label your items, create custom storage categories, and utilize digital tracking for easy access. Discover the benefits of remote management and how to optimize space using our smart layout tools.'),
('collapseTwo', 'Managing Your Items', 'Effective management of your items involves more than just organization. Discover how to keep track of item conditions, set reminders for maintenance, and efficiently manage item turnover. Learn the art of decluttering, understand the principles of FIFO (First In, First Out), and get tips on conducting regular audits to ensure your items are in the right place at the right time.'),
('collapseThree', 'Tips and Tricks', 'Master the art of storage with these professional tips and tricks. Learn how to utilize vertical space to maximize capacity, explore innovative ways to protect sensitive items from environmental factors, and get creative with modular storage solutions. Understand the importance of labeling and how to create an effective categorization system that works for you.'),
('collapseFour', 'Organizing Your Space', 'Organizing your storage space efficiently is key to maximizing its utility. Explore techniques for space optimization, including the use of multi-purpose storage units, the benefits of adjustable shelving, and how to create walkways for easy access. Learn about ergonomic arrangements and how to design your space for both efficiency and aesthetics.'),
('collapseFive', 'Safety Measures', 'Safety in storage spaces is paramount. Understand the critical safety measures you need to implement, from proper stacking and weight distribution to the use of safety equipment like helmets and gloves. Learn about fire safety practices, including the placement of extinguishers and smoke detectors, and the importance of regular safety drills.'),
('collapseSix', 'Space Optimization', 'Maximizing space utilization is a science. Delve into strategies for optimizing every square inch of your storage space. Discover the benefits of customizable shelving, the use of vertical space, and how to implement a mobile shelving system. Learn about space-saving furniture and tools that can transform the way you store your items.'),
('collapseSeven', 'Maintenance Tips', 'Regular maintenance is crucial for keeping your storage space functional and efficient. Learn about the routine checks you should perform, from inspecting for damages to ensuring all moving parts are well-lubricated. Understand the importance of climate control in maintaining item quality and get tips on keeping your storage area clean and pest-free.'),
('collapseEight', 'Security Protocols', 'Securing your storage space is essential. Learn about the latest security technologies, from surveillance systems to advanced locks and access control mechanisms. Understand the importance of cybersecurity measures for digital inventory systems and how to train your staff in security best practices.'),
('collapseNine', 'Cost-Effective Solutions', 'Managing storage doesn’t have to break the bank. Explore a range of cost-effective solutions for storage management. Learn how to implement a lean inventory, the benefits of second-hand storage units, and how to negotiate with suppliers. Discover budget-friendly tools and resources that can enhance your storage management without incurring high costs.'),
('collapseTen', 'Emergency Procedures', 'Be prepared for emergencies in your storage spaces. Understand the standard procedures for handling different types of emergencies, from natural disasters to security breaches. Learn how to develop an effective emergency response plan, train your staff in emergency procedures, and the importance of regular drills and updates to your emergency preparedness plans.'),
('collapseEleven', 'Environmental Controls', 'Managing environmental controls is crucial for certain storage spaces, especially when dealing with sensitive or perishable items. Learn how to monitor and adjust temperature, humidity, and light to maintain optimal conditions. Understand the technology behind environmental control systems and how to use them effectively to protect your items.');