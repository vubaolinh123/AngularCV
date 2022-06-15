export interface IBlog {
    id?: number| string,
    name: string,
    cateBlog?: {
        id?: number,
        name: string
    }, 
    cateBlogId: number | string,
    time: string, 
    author: string,
    desc: string
}

export interface IBlogCate {
    id?: number | string,
    name: string
}