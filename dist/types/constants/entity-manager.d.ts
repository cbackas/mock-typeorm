import { EntityManager } from "typeorm";
type AllEntityManagerMethodObj = {
    [K in keyof EntityManager as EntityManager[K] extends (...args: any[]) => any ? K : never]: K;
};
export type EntityManagerSetMockMethods = keyof Omit<AllEntityManagerMethodObj, "createQueryBuilder" | "getRepository" | "getTreeRepository" | "getMongoRepository" | "withRepository" | "getCustomRepository" | "hasId" | "getId" | "create" | "merge" | "transaction">;
export declare const entityManagerQueryMethods: EntityManagerSetMockMethods[];
export declare const entityManagerModifyMethods: EntityManagerSetMockMethods[];
export {};
