'use strict';

var Sinon = require('sinon');
var typeorm = require('typeorm');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var Sinon__namespace = /*#__PURE__*/_interopNamespaceDefault(Sinon);

const queryRunnerMethods = [
    "connect",
    "beforeMigration",
    "afterMigration",
    "release",
    "clearDatabase",
    "startTransaction",
    "commitTransaction",
    "rollbackTransaction",
    "query",
    "stream",
    "getDatabases",
    "getSchemas",
    "getTable",
    "getTables",
    "getView",
    "getViews",
    "getReplicationMode",
    "hasDatabase",
    "getCurrentDatabase",
    "hasSchema",
    "getCurrentSchema",
    "hasTable",
    "hasColumn",
    "createDatabase",
    "dropDatabase",
    "createSchema",
    "dropSchema",
    "createTable",
    "dropTable",
    "createView",
    "dropView",
    "renameTable",
    "changeTableComment",
    "addColumn",
    "addColumns",
    "renameColumn",
    "changeColumn",
    "changeColumns",
    "dropColumn",
    "dropColumns",
    "createPrimaryKey",
    "updatePrimaryKeys",
    "dropPrimaryKey",
    "createUniqueConstraint",
    "createUniqueConstraints",
    "dropUniqueConstraint",
    "dropUniqueConstraints",
    "createCheckConstraint",
    "createCheckConstraints",
    "dropCheckConstraint",
    "dropCheckConstraints",
    "createExclusionConstraint",
    "createExclusionConstraints",
    "dropExclusionConstraint",
    "dropExclusionConstraints",
    "createForeignKey",
    "createForeignKeys",
    "dropForeignKey",
    "dropForeignKeys",
    "createIndex",
    "createIndices",
    "dropIndex",
    "dropIndices",
    "clearTable",
    "enableSqlMemory",
    "disableSqlMemory",
    "clearSqlMemory",
    "getMemorySql",
    "executeMemoryUpSql",
    "executeMemoryDownSql",
];

function mockCreateQueryRunner(mockTypeORM) {
    const queryRunner = {};
    if (!mockTypeORM.__internal?.queryRunner) {
        queryRunnerMethods.forEach((method) => {
            queryRunner[method] = Sinon__namespace.stub();
        });
        queryRunner.manager = this.manager;
        mockTypeORM.__internal.queryRunner = queryRunner;
    }
    return mockTypeORM.__internal.queryRunner;
}

function mockCreateQueryBuilder(repositoryName) {
    const allMethods = getAllQueryBuilderMethods();
    const methodsObject = {};
    allMethods.forEach((m) => {
        methodsObject[m] = typeorm.SelectQueryBuilder.prototype[m];
    });
    return { ...methodsObject, __repositoryName: repositoryName };
}
function getAllQueryBuilderMethods() {
    return Object.getOwnPropertyNames(typeorm.SelectQueryBuilder.prototype);
}

const selfReferenceQueryBuilderMethods = [
    "addCommonTableExpression",
    "addFrom",
    "addGroupBy",
    "addOrderBy",
    "addSelect",
    "andHaving",
    "andWhere",
    "andWhereExists",
    "andWhereInIds",
    "cache",
    "callListeners",
    "clone",
    "comment",
    "disableEscaping",
    "distinct",
    "distinctOn",
    "from",
    "fromDummy",
    "groupBy",
    "having",
    "innerJoin",
    "innerJoinAndMapMany",
    "innerJoinAndMapOne",
    "innerJoinAndSelect",
    "leftJoin",
    "leftJoinAndMapMany",
    "leftJoinAndMapOne",
    "leftJoinAndSelect",
    "limit",
    "loadAllRelationIds",
    "loadRelationCountAndMap",
    "loadRelationIdAndMap",
    "maxExecutionTime",
    "offset",
    "orHaving",
    "orWhere",
    "orWhereExists",
    "orWhereInIds",
    "orderBy",
    "printSql",
    "select",
    "setFindOptions",
    "setLock",
    "setNativeParameters",
    "setOnLocked",
    "setOption",
    "setParameter",
    "setParameters",
    "setQueryRunner",
    "skip",
    "subQuery",
    "take",
    "timeTravelQuery",
    "useIndex",
    "useTransaction",
    "where",
    "whereExists",
    "whereInIds",
    "withDeleted",
];
const queryBuilderReturnMethods = [
    "execute",
    "getCount",
    "getExists",
    "getMany",
    "getManyAndCount",
    "getOne",
    "getOneOrFail",
    "getRawAndEntities",
    "getRawMany",
    "getRawOne",
    "stream",
];

function mockMethod(mockTypeORM, method, repositoryName) {
    if (!repositoryName)
        return {};
    const repoMocks = mockTypeORM.mocks[repositoryName];
    if (!repoMocks)
        return {};
    const repoMethodMocks = repoMocks[method];
    if (!repoMethodMocks)
        return {};
    const mockDataExtractedFrom = mockTypeORM.mockHistory[repositoryName][method];
    ++mockTypeORM.mockHistory[repositoryName][method];
    const mockData = mockTypeORM.mocks[repositoryName][method][mockDataExtractedFrom] ??
        mockTypeORM.mocks[repositoryName][method][0];
    if (mockData instanceof Error)
        throw mockData;
    return mockData;
}

const repositoryMethods = [
    "average",
    "clear",
    "count",
    "countBy",
    "create",
    "decrement",
    "delete",
    "exist",
    "exists",
    "find",
    "findAndCount",
    "findAndCountBy",
    "findBy",
    "findByIds",
    "findOne",
    "findOneBy",
    "findOneById",
    "findOneByOrFail",
    "findOneOrFail",
    "getId",
    "hasId",
    "increment",
    "insert",
    "maximum",
    "merge",
    "minimum",
    "preload",
    "query",
    "remove",
    "restore",
    "save",
    "softDelete",
    "softRemove",
    "sum",
    "update",
    "upsert",
];

const entityManagerQueryMethods = [
    "average",
    "clear",
    "count",
    "countBy",
    "decrement",
    "delete",
    "exists",
    "existsBy",
    "find",
    "findAndCount",
    "findAndCountBy",
    "findBy",
    "findByIds",
    "findOne",
    "findOneBy",
    "findOneById",
    "findOneByOrFail",
    "findOneOrFail",
    "increment",
    "insert",
    "maximum",
    "minimum",
    "preload",
    "query",
    "release",
    "restore",
    "softDelete",
    "sum",
    "update",
    "upsert",
];
const entityManagerModifyMethods = [
    "save",
    "remove",
    "softRemove",
    "recover",
];

const dataSourceMethods = [
    "close",
    "connect",
    "destroy",
    "dropDatabase",
    "initialize",
    "runMigrations",
    "setOptions",
    "showMigrations",
    "synchronize",
    "undoLastMigration",
];

function createClass(name) {
    const DynamicClass = class {
        constructor() { }
    };
    const handler = {
        construct(target, args) {
            const instance = Reflect.construct(target, args);
            Object.defineProperty(instance.constructor, "name", {
                value: name,
                writable: false,
            });
            return instance;
        },
    };
    return new Proxy(DynamicClass, handler);
}
function getDefinedMethods(object, methods) {
    return methods.filter((method) => !!object[method]);
}

class MockTypeORM {
    constructor() {
        this.mocks = {};
        this.mockHistory = {};
        this.__internal = {};
        this.mockDataSouceMethods();
        this.mockCreateQueryRunner();
        this.mockCreateQueryBuilder();
        this.mockSelectQueryBuilderMethods();
        this.mockRepositoryMethods();
        this.mockEntityManagerMethods();
    }
    onMock(repository) {
        const self = this;
        const repositoryName = typeof repository === "string" ? repository : repository.name;
        return {
            toReturn(mockData, method = "find") {
                if (!self.mocks[repositoryName]) {
                    self.mocks[repositoryName] = {};
                }
                const mockMethod = self.mocks[repositoryName][method];
                if (mockMethod) {
                    const totalMockItemsFoundInMethod = Object.keys(mockMethod).length;
                    mockMethod[totalMockItemsFoundInMethod] = mockData;
                }
                else {
                    self.mocks[repositoryName][method] = { 0: mockData };
                    // initialize mock history with empty state
                    if (!self.mockHistory[repositoryName]) {
                        self.mockHistory = { ...self.mockHistory, [repositoryName]: {} };
                    }
                    self.mockHistory[repositoryName][method] = 0;
                }
                return this;
            },
            reset(method) {
                if (method) {
                    if (self.mocks[repositoryName])
                        delete self.mocks[repositoryName][method];
                    if (self.mockHistory[repositoryName])
                        delete self.mockHistory[repositoryName][method];
                    return;
                }
                delete self.mocks[repositoryName];
                delete self.mockHistory[repositoryName];
            },
        };
    }
    resetAll() {
        this.mocks = {};
        this.mockHistory = {};
        this.__internal = {};
    }
    restore() {
        Sinon__namespace.restore();
    }
    mockDataSouceMethods() {
        const filteredDataSourceMethods = getDefinedMethods(typeorm.DataSource.prototype, dataSourceMethods);
        filteredDataSourceMethods.forEach((method) => {
            Sinon__namespace.stub(typeorm.DataSource.prototype, method);
        });
    }
    mockCreateQueryRunner() {
        const self = this;
        if (typeorm.DataSource.prototype.createQueryRunner) {
            Sinon__namespace.stub(typeorm.DataSource.prototype, "createQueryRunner").callsFake(function () {
                return mockCreateQueryRunner.call(this, self);
            });
        }
    }
    mockCreateQueryBuilder() {
        const self = this;
        if (typeorm.DataSource.prototype.createQueryBuilder) {
            Sinon__namespace.stub(typeorm.DataSource.prototype, "createQueryBuilder").callsFake(function (param) {
                const repositoryName = self.getRepositoryName(param, param?.name);
                return mockCreateQueryBuilder.call(this, repositoryName);
            });
        }
        if (typeorm.Repository.prototype.createQueryBuilder) {
            Sinon__namespace.stub(typeorm.Repository.prototype, "createQueryBuilder").callsFake(function () {
                const repositoryName = self.getRepositoryName(this?.target, this?.target?.name);
                return mockCreateQueryBuilder.call(this, repositoryName);
            });
        }
    }
    mockSelectQueryBuilderMethods() {
        const self = this;
        const filteredSelfReferenceQueryBuilderMethods = getDefinedMethods(typeorm.SelectQueryBuilder.prototype, selfReferenceQueryBuilderMethods);
        const filteredQueryBuilderReturnMethods = getDefinedMethods(typeorm.SelectQueryBuilder.prototype, queryBuilderReturnMethods);
        filteredSelfReferenceQueryBuilderMethods.forEach((method) => {
            Sinon__namespace.stub(typeorm.SelectQueryBuilder.prototype, method).callsFake(function (param) {
                const repositoryName = this.__repositoryName ?? param?.name;
                this.__repositoryName = repositoryName;
                return this;
            });
        });
        filteredQueryBuilderReturnMethods.forEach((method) => {
            Sinon__namespace.stub(typeorm.SelectQueryBuilder.prototype, method).callsFake(async function () {
                const repositoryName = this.__repositoryName;
                return mockMethod(self, method, repositoryName);
            });
        });
    }
    mockRepositoryMethods() {
        const self = this;
        const filteredRepositoryMethods = getDefinedMethods(typeorm.Repository.prototype, repositoryMethods);
        filteredRepositoryMethods.forEach((method) => {
            Sinon__namespace.stub(typeorm.Repository.prototype, method).callsFake(async function () {
                const repositoryName = self.getRepositoryName(this?.target, this?.target?.name ?? "");
                return mockMethod(self, method, repositoryName);
            });
        });
    }
    mockEntityManagerMethods() {
        const self = this;
        const filteredEntityManagerQueryMethods = getDefinedMethods(typeorm.EntityManager.prototype, entityManagerQueryMethods);
        const filteredEntityManagerSavedMethods = getDefinedMethods(typeorm.EntityManager.prototype, entityManagerModifyMethods);
        const getRepositoryName = (param) => {
            let repositoryName = param.repositoryName ?? param?.constructor?.name;
            if (Array.isArray(param)) {
                const lastRecord = param[param.length - 1];
                repositoryName = lastRecord?.repositoryName ?? lastRecord?.constructor?.name;
            }
            return repositoryName;
        };
        filteredEntityManagerQueryMethods.forEach((method) => {
            Sinon__namespace.stub(typeorm.EntityManager.prototype, method).callsFake(async function (param) {
                const repositoryName = self.getRepositoryName(param, param?.name);
                return mockMethod(self, method, repositoryName);
            });
        });
        filteredEntityManagerSavedMethods.forEach((method) => {
            Sinon__namespace.stub(typeorm.EntityManager.prototype, method).callsFake(async function (param) {
                const repositoryName = getRepositoryName(param);
                if (!repositoryName)
                    return {};
                return mockMethod(self, method, repositoryName);
            });
        });
        if (typeorm.EntityManager.prototype.create) {
            Sinon__namespace.stub(typeorm.EntityManager.prototype, "create").callsFake(function (Repository, params) {
                if (Repository instanceof typeorm.EntitySchema) {
                    Repository = createClass(Repository.options.name);
                }
                else if (typeof Repository === "string") {
                    Repository = createClass(Repository);
                }
                const repository = new Repository();
                Object.keys(params).forEach((k) => {
                    repository[k] = params[k];
                });
                return repository;
            });
        }
        if (typeorm.EntityManager.prototype.transaction) {
            Sinon__namespace.stub(typeorm.EntityManager.prototype, "transaction").callsFake(async function (isolationLevelOrCallback, callback) {
                const manager = this.connection.manager;
                if (typeof isolationLevelOrCallback === "string") {
                    return callback(manager);
                }
                else {
                    return isolationLevelOrCallback(manager);
                }
            });
        }
    }
    getRepositoryName(repository, defaultRepositoryName) {
        let repositoryName;
        if (repository instanceof typeorm.EntitySchema) {
            repositoryName = repository.options.name;
        }
        else if (typeof repository === "string") {
            repositoryName = repository;
        }
        else {
            repositoryName = defaultRepositoryName;
        }
        return repositoryName;
    }
}

exports.MockTypeORM = MockTypeORM;
