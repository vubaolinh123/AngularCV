export interface IProject {
    id?: number| string,
    name: string,
    cateProject?: {
        id?: number,
        name: string
    }, 
    cateProjectId: number | string,
    time: string,
    desc: string,
    avatar: string
}

export interface IProjectCate {
    id?: number | string,
    name: string
}