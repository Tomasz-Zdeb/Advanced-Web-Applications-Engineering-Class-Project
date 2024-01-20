CREATE TABLE public.test_table (
    id SERIAL PRIMARY KEY,
    test_number integer,
    test_string character varying(100) NOT NULL,
    test_default_string character varying(250) DEFAULT 'default description'
);

CREATE TABLE user_table (
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    active BOOLEAN NOT NULL,
    role VARCHAR(255)
);

CREATE TABLE png_images (
    image_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    image_binary BYTEA
);

-- Grant regular user permissions
GRANT SELECT, INSERT, UPDATE, DELETE ON public.test_table TO dev_user;
