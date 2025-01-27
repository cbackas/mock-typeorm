export declare function createClass(name: string): {
    new (): {};
};
type Obj = {
    [x: string]: any;
};
export declare function getDefinedMethods(object: Obj, methods: string[]): string[];
export {};
