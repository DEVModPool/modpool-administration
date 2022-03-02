import { Module, ModuleCoordinator } from "../module.model";
import { ModuleDetailComponent } from "./module-detail.component";

export class ModuleDetails extends Module {
    constructor(
        id: number,
        code: string,
        name: string,
        coordinator: ModuleCoordinator,
        lastUpdated: string,
        public selectedDepartment: Department,
        public semester: number,
        public description: string,
        public selectedPrerequisites: RequisiteModule[],
        public selectedCorequisites: RequisiteModule[],
        public syllabus: string,
        public assessment: string,
        public studyHours: StudyHours
    ) {
        super(id, code, name, coordinator, lastUpdated);
    }
}

interface Department {
    id: string,
    name: string
}

interface RequisiteModule {
    id: string;
    name: string;
    code: string;
}

interface StudyHours {
    lectures: number;
    seminars: number;
    tutorials: number;
    labPracticals: number;
    fieldwork: number;
    other: number;
}
