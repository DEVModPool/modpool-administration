import { Module } from "../modules/module.model";


export class Review {
    constructor(
        public author: string,
        public moduleName: string,
        public status: string,
        public lastUpdated: string,
        public content: string
    ) {
    }

}
