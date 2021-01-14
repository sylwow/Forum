

export class Post
{
    public id: number;
    public userId: number;
    public createTime: string; 
    public message: string[];
    public rate: number;
    public username: string;
    public avatarFilePath: string;
    public media: string[];
    public bumpedByYou: boolean;
    public comments: number;
    public commentList: Post[];
    public tryComment: boolean;
}
