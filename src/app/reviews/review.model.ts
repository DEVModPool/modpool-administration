import { Module } from "../modules/module.model";


export class Review {
    constructor(
        public author: string,
        public module: Module,
        public status: string,
        public lastUpdated: string
    ) {
    }

}
