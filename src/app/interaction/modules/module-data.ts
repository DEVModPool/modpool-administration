import {ModuleEdit} from "./module-edit.model";


export class ModuleData {
    viewmodel: {
        departments: { id: string, name: string }[],
        coordinators: { id: string, name: string }[],
        modules: { id: string, code: string, name: string }[],
        semesters: { id: string, semester: string }[],
    }
    module?: ModuleEdit
}
