export class Module {
    constructor(
        public id?: number,
        public code?: string,
        public name?: string,
        public coordinator?: ModuleCoordinator,
        public lastUpdated?: string
    ) {
    }
}

export interface ModuleCoordinator {
    name: string,
    id: string
}



