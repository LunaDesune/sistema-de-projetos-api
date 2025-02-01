import { Request, Response } from "express";
import { ProjectService } from "../services/ProjectService";

export class ProjectController {
    static async create(request: Request, response: Response){
        try{
            console.log(request.body)
            
            const project = await ProjectService.createProject(request.body)
            return response.status(201).json(project)
        } catch (error: any){
            return response.status(400).json({error: error.message})
        }
    }
}