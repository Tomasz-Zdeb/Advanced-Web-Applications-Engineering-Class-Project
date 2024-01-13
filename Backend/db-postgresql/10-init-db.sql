CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Crate the regular user with write and read permissions
CREATE ROLE dev_user WITH LOGIN PASSWORD 'dev';
GRANT CONNECT ON DATABASE dev_swims TO dev_user;

-- Schema config
ALTER SCHEMA public OWNER TO dev_admin_user;
COMMENT ON SCHEMA public IS 'default swims schema';
SET default_tablespace = '';
SET default_table_access_method = heap;

-- Pgcrypto
CREATE EXTENSION IF NOT EXISTS pgcrypto;