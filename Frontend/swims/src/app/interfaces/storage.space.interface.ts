import { Tag } from "./tag.interface";

export interface StorageSpace {
    name: string;
    description: string;
    imageUUID: string;
    tags: Tag[];
    imageURL?: string;
}