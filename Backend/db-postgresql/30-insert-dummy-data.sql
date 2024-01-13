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