import { Constructor, MockHistory, MockState, SetMock } from "./type/mock-typeorm.types";
export declare class MockTypeORM {
    mocks: MockState;
    mockHistory: MockHistory;
    __internal: any;
    constructor();
    onMock(repository: string | Constructor<any>): SetMock;
    resetAll(): void;
    restore(): void;
    private mockDataSouceMethods;
    private mockCreateQueryRunner;
    private mockCreateQueryBuilder;
    private mockSelectQueryBuilderMethods;
    private mockRepositoryMethods;
    private mockEntityManagerMethods;
    private getRepositoryName;
}
