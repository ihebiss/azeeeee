import {Forum} from "./forum.model";
import {CommentP} from "./commentP.model";
import { User } from "./user.model";


export class Post {
 id_post?:number;

 description ?:string;

 likes ?:number;

 dislikes?:number ;
 picture ?:string;
 boosted?:boolean;
 date_post?:Date;
 owner?:string;
 //forum?:Forum;
 
 comments?:CommentP[];
 //user?:User;

}
