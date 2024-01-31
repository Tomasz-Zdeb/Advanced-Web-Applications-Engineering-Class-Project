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

CREATE TABLE storage_spaces (
    name VARCHAR(255) PRIMARY KEY NOT NULL,
    description TEXT,
    image_uuid UUID
);

CREATE TABLE storage_space_items (
    name VARCHAR(255) NOT NULL,
    description TEXT,
    quantity INT DEFAULT 1,
    storage_space_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (name, storage_space_name),
    FOREIGN KEY (storage_space_name) REFERENCES storage_spaces(name)
);

CREATE TABLE tags (
    name VARCHAR(255) PRIMARY KEY,
    color VARCHAR(7) NOT NULL
);

CREATE TABLE storage_spaces_to_tags (
    storage_space_name VARCHAR(255),
    tag_name VARCHAR(255),
    PRIMARY KEY (storage_space_name, tag_name),
    FOREIGN KEY (storage_space_name) REFERENCES storage_spaces(name),
    FOREIGN KEY (tag_name) REFERENCES tags(name)
);

CREATE TABLE help_accordion_contents (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);