-- Crate the regular user with write and read permissions
CREATE ROLE test_user WITH LOGIN PASSWORD 'test_pass';
GRANT CONNECT ON DATABASE test_swims TO test_user;

-- Schema config
ALTER SCHEMA public OWNER TO test_admin_user;
COMMENT ON SCHEMA public IS 'default swims schema';
SET default_tablespace = '';
SET default_table_access_method = heap;

-- Pgcrypto
CREATE EXTENSION IF NOT EXISTS pgcrypto;