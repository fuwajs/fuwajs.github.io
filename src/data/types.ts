import type themes from './themes.json';

export type ThemeType = typeof themes;

export interface Link {
    name: string;
    url: string;
}

export interface BaseType {
    name: string;
    depricated: boolean;
    desc: string;
    example?: string;
}
export interface Func extends BaseType {
    aliases?: string[];
    args: { name: string; type: string | Link; desc: string }[] | null;
    return: string | Link;
}

interface ObjectItem extends BaseType {
    value: Link | string;
}
export interface Obj extends BaseType {
    items: ObjectItem[];
}

export interface ClassMethod extends BaseType {
    constructor: Func;
    methods: Func[];
}

export interface File extends BaseType {
    exports: { default: MainTypes } | BaseType[];
}

export type MainTypes = ClassMethod | Func | Obj | BaseType;
