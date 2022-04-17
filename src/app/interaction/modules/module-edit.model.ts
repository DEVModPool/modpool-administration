import { Module, ModuleCoordinator } from "./module.model";

export class ModuleEdit extends Module {
    constructor(
        id: number,
        code: string,
        name: string,
        coordinator: ModuleCoordinator,
        lastUpdated: string,
        public credits: string,
        public academicYear: string,
        public selectedDepartment: Department,
        public semester: number,
        public description: string,
        public selectedRequisites: RequisiteModule[],
        public syllabus: string,
        public learningOutcomes: string,
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
    privateStudy: number;
    other: number;
}
