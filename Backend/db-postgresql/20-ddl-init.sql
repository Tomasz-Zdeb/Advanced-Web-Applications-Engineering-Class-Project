CREATE TABLE public.test_table (
    id SERIAL PRIMARY KEY,
    test_number integer,
    test_string character varying(100) NOT NULL,
    test_default_string character varying(250) DEFAULT 'default description'
);

-- Grant regular user permissions
GRANT SELECT, INSERT, UPDATE, DELETE ON public.test_table TO test_user;
