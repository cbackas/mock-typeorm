import { QueryRunner } from "typeorm";
export type QueryRunnerMethods = keyof {
    [K in keyof QueryRunner as QueryRunner[K] extends (...args: any[]) => any ? K : never]: K;
};
export declare const queryRunnerMethods: QueryRunnerMethods[];
