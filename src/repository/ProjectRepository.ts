import { Project } from "../models/Project";
import database from "../config/database/database";

export class ProjectRepository {
    static async createProject(project: Project): Promise<Project> {
        
        const query = `INSERT INTO projects (title, description, start_date, due_data, status)
            VALUES ($1, $2, $3, $4, $5) RETURNING *;
        `;

        const values = [
            project.title,
            project.description,
            project.startDate,
            project.deadlineDate || null,
            project.status
        ];

        const { rows } = await database.query(query, values);
        return rows[0];

    }
}
