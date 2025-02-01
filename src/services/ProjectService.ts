import { ProjectRepository } from "../repository/ProjectRepository";
import { Project } from "../models/Project";

export class ProjectService {
    static async createProject(project: Project): Promise<Project> {
        if(!project.title || !project.description || !project.startDate){
            throw new Error("Titulo, descrição e data de início são obrigatórios!");
        }

        project.status = "Em andamento..."

        return await ProjectRepository.createProject(project);
    }
}