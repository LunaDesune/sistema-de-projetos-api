export interface Project {
    id?: number, // Será gerado automaticamente no banco
    title: string,
    description: string,
    startDate: Date,
    deadlineDate?: Date,
    status: string
}