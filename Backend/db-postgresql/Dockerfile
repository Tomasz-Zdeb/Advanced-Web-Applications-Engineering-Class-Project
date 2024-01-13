
FROM postgres:latest

# Set environment variables
ENV POSTGRES_USER dev_admin_user
ENV POSTGRES_PASSWORD dev_password
ENV POSTGRES_DB dev_swims

# Copy SQL scripts to the /docker-entrypoint-initdb.d/ directory in the container
COPY 10-init-db.sql /docker-entrypoint-initdb.d/10-init-db.sql
COPY 20-ddl-init.sql /docker-entrypoint-initdb.d/20-ddl-init.sql

# TODO: Remove for production use
COPY 30-insert-dummy-data.sql /docker-entrypoint-initdb.d/30-insert-dummy-data.sql

# The default ENTRYPOINT and CMD for the official PostgreSQL image will
# automatically execute the scripts in the /docker-entrypoint-initdb.d/ directory.
# note: entrypoints scripts are executed in alphabetical order!