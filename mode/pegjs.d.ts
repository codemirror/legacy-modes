import { StreamParser } from "@codemirror/language";
declare type State = {
    inString: boolean;
    stringType: string | null | undefined;
    inComment: boolean;
    inCharacterClass: boolean;
    braced: number;
    lhs: boolean;
    localState: unknown;
};
export declare const pegjs: StreamParser<State>;
export {};
