import type themes from './themes.json';

export type ThemeType = typeof themes;

export interface Link {
    name: string;
    url: string;
}

export interface Method {
    name: string;
    aliases?: string[];
    args: { name: string; type: Type; desc: string }[];
    return: string | Link;
}

export interface ClassMethod {
    name: string;
    constructor: Method;
    props: { name: string; type: Type; desc: string }[];
    methods: Method[];
}

export type Type = Link | { [key: string]: any } | any[];
