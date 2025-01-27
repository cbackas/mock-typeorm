import { DataSource } from "typeorm";
export type DataSourceMethods = keyof {
    [K in keyof DataSource as DataSource[K] extends (...args: any[]) => any ? K : never]: K;
};
export declare const dataSourceMethods: DataSourceMethods[];
