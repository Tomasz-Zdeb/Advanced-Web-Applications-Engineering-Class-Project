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
('Main Warehouse', 'Central storage facility for various goods.', '63da9441-01c1-460c-92fa-befa6361a4b7'),
('Metal Workshop', 'Workshop specialized in metalworking and machining.', '78be11b0-c077-43cb-ad69-0f0b7f591092'),
('Pottery', 'Space dedicated to the art and craft of pottery.', '51f9e8a7-3316-4269-a3be-fbf0d4c56f80'),
('Electronics Workshop', 'A workshop focused on electronics and electrical projects.', '16dc661b-98f4-41c1-a463-b409aebc1e7a'),
('Wood Workshop', 'Workshop for woodworking and carpentry.', 'f59d4e52-898e-4d05-aafe-fcc59bc9c73c');

INSERT INTO tags (name, color) VALUES
('Important', '#000000'),
('Primary', '#696969'),
('Secondary', '#808080'),
('Critical', '#A9A9A9'),
('Normal', '#D3D3D3');

INSERT INTO storage_spaces_to_tags (storage_space_name, tag_name) VALUES
('Main Warehouse', 'Important'),
('Main Warehouse', 'Primary'),
('Metal Workshop', 'Secondary'),
('Electronics Workshop', 'Critical'),
('Wood Workshop', 'Critical'),
('Wood Workshop', 'Normal');
