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
('important', '#eeeeee'),
('primary', '#dddddd'),
('secondary', '#dddddd'),
('critical', '#eeeeee'),
('normal', '#eeeeee');

INSERT INTO storage_spaces_to_tags (storage_space_name, tag_name) VALUES
('main-warehouse', 'important'),
('main-warehouse', 'primary'),
('metal-workshop', 'secondary'),
('electronics-workshop', 'critical'),
('wood-workshop', 'critical');

INSERT INTO storage_space_items (name, description, quantity, storage_space_name) VALUES 
    ('small-box', 'A small-sized storage box', 5, 'main-warehouse'),
    ('medium-box', 'A medium-sized storage box', 3, 'main-warehouse'),
    ('large-box', 'A large-sized storage box', 2, 'main-warehouse'),
    ('desk-lamp', 'An LED desk lamp', 1, 'main-warehouse'),
    ('bookshelf', 'A wooden bookshelf', 1, 'main-warehouse'),
    ('box-small-100', 'A small-sized storage box', 20, 'main-warehouse'),
    ('box-medium-101', 'A medium-sized storage box', 15, 'main-warehouse'),
    ('box-large-102', 'A large-sized storage box', 10, 'main-warehouse'),
    ('pallet-103', 'Standard pallet for bulk goods', 30, 'main-warehouse'),
    ('crate-104', 'A sturdy storage crate', 25, 'main-warehouse');

-- metal-workshop
INSERT INTO storage_space_items (name, description, quantity, storage_space_name) VALUES 
    ('metal-sheet-200', 'Sheet metal for crafting', 50, 'metal-workshop'),
    ('saw-blade-201', 'Blade for metal saw', 40, 'metal-workshop'),
    ('welding-rod-202', 'Rod for welding metal', 30, 'metal-workshop'),
    ('drill-bit-metal-203', 'Metal drill bit', 60, 'metal-workshop'),
    ('grinder-disc-204', 'Disc for metal grinder', 55, 'metal-workshop');

-- pottery
INSERT INTO storage_space_items (name, description, quantity, storage_space_name) VALUES 
    ('clay-bag-300', 'Bag of pottery clay', 25, 'pottery'),
    ('glaze-set-301', 'Set of colorful glazes', 15, 'pottery'),
    ('kiln-shelf-302', 'Shelf for pottery kiln', 10, 'pottery'),
    ('pottery-wheel-303', 'Electric pottery wheel', 5, 'pottery'),
    ('tool-set-pottery-304', 'Tool set for pottery shaping', 20, 'pottery');

    -- electronics-workshop
INSERT INTO storage_space_items (name, description, quantity, storage_space_name) VALUES 
    ('soldering-iron-400', 'High precision soldering iron', 12, 'electronics-workshop'),
    ('multimeter-401', 'Digital multimeter for circuit diagnostics', 8, 'electronics-workshop'),
    ('circuit-board-402', 'Blank circuit boards for prototyping', 25, 'electronics-workshop'),
    ('led-pack-403', 'Pack of assorted LEDs', 45, 'electronics-workshop'),
    ('resistor-kit-404', 'Kit of resistors with various resistances', 30, 'electronics-workshop');

-- wood-workshop
INSERT INTO storage_space_items (name, description, quantity, storage_space_name) VALUES 
    ('saw-wood-500', 'Hand saw for cutting wood', 15, 'wood-workshop'),
    ('wood-glue-501', 'Strong wood glue', 20, 'wood-workshop'),
    ('sanding-paper-502', 'Assorted sanding paper pack', 50, 'wood-workshop'),
    ('chisel-set-503', 'Set of wood chisels', 10, 'wood-workshop'),
    ('plywood-sheet-504', 'Sheets of quality plywood', 25, 'wood-workshop');

-- metalware-storage
INSERT INTO storage_space_items (name, description, quantity, storage_space_name) VALUES 
    ('screw-set-600', 'Set of various screws', 100, 'metalware-storage'),
    ('nail-box-601', 'Box of nails', 75, 'metalware-storage'),
    ('bolt-collection-602', 'Collection of bolts', 80, 'metalware-storage'),
    ('washer-assortment-603', 'Assortment of washers', 90, 'metalware-storage'),
    ('hinge-pack-604', 'Pack of metal hinges', 60, 'metalware-storage');

-- cars-storage
INSERT INTO storage_space_items (name, description, quantity, storage_space_name) VALUES 
    ('sports-car-cover-700', 'Protective cover for sports cars', 5, 'cars-storage'),
    ('car-polish-701', 'High quality car polish', 15, 'cars-storage'),
    ('tire-inflator-702', 'Portable tire inflator', 10, 'cars-storage'),
    ('battery-charger-703', 'Car battery charger', 8, 'cars-storage'),
    ('oil-filter-704', 'Oil filter for sports cars', 20, 'cars-storage');

-- armory
INSERT INTO storage_space_items (name, description, quantity, storage_space_name) VALUES 
    ('rifle-stand-800', 'Stand for displaying rifles', 10, 'armory'),
    ('ammo-box-801', 'Metal box for ammunition storage', 30, 'armory'),
    ('gun-cleaning-kit-802', 'Comprehensive gun cleaning kit', 15, 'armory'),
    ('pistol-holster-803', 'Leather holster for pistols', 25, 'armory'),
    ('tactical-gloves-804', 'Pair of tactical gloves', 20, 'armory');

-- small-warehouse
INSERT INTO storage_space_items (name, description, quantity, storage_space_name) VALUES 
    ('small-container-900', 'Small-sized container', 40, 'small-warehouse'),
    ('packing-tape-901', 'Strong packing tape', 50, 'small-warehouse'),
    ('label-printer-902', 'Printer for labeling boxes', 10, 'small-warehouse'),
    ('box-cutter-903', 'Sharp box cutter', 30, 'small-warehouse'),
    ('pallet-jack-904', 'Manual pallet jack', 5, 'small-warehouse');

-- crane-storage
INSERT INTO storage_space_items (name, description, quantity, storage_space_name) VALUES 
    ('crane-hook-1000', 'Heavy-duty crane hook', 12, 'crane-storage'),
    ('lifting-strap-1001', 'Durable lifting straps', 20, 'crane-storage'),
    ('chain-slings-1002', 'Set of chain slings', 15, 'crane-storage'),
    ('crane-scale-1003', 'Digital crane scale', 8, 'crane-storage'),
    ('spreader-beam-1004', 'Adjustable spreader beam', 6, 'crane-storage');

-- guitar-center
INSERT INTO storage_space_items (name, description, quantity, storage_space_name) VALUES 
    ('acoustic-guitar-1100', 'Quality acoustic guitar', 15, 'guitar-center'),
    ('electric-guitar-1101', 'Electric guitar with vintage sound', 10, 'guitar-center'),
    ('guitar-strings-1102', 'Sets of guitar strings', 40, 'guitar-center'),
    ('guitar-picks-1103', 'Assorted guitar picks', 100, 'guitar-center'),
    ('guitar-amp-1104', 'Guitar amplifier for performances', 7, 'guitar-center');

-- wheel-storage
INSERT INTO storage_space_items (name, description, quantity, storage_space_name) VALUES 
    ('car-wheel-1200', 'Durable car wheel', 25, 'wheel-storage'),
    ('bike-wheel-1201', 'Mountain bike wheel', 20, 'wheel-storage'),
    ('wheel-nuts-1202', 'Set of wheel nuts', 50, 'wheel-storage'),
    ('wheel-spanner-1203', 'Heavy-duty wheel spanner', 30, 'wheel-storage'),
    ('tire-lever-1204', 'Sturdy tire lever', 40, 'wheel-storage');

-- pipe-storage
INSERT INTO storage_space_items (name, description, quantity, storage_space_name) VALUES 
    ('pvc-pipe-1300', 'Long PVC pipe', 60, 'pipe-storage'),
    ('copper-pipe-1301', 'Copper pipe for plumbing', 30, 'pipe-storage'),
    ('pipe-clamps-1302', 'Clamps for securing pipes', 80, 'pipe-storage'),
    ('pipe-cutter-1303', 'Sharp pipe cutter', 25, 'pipe-storage'),
    ('pipe-insulation-1304', 'Foam insulation for pipes', 40, 'pipe-storage');

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