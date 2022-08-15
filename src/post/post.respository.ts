/* eslint-disable @typescript-eslint/no-empty-function */
import { CreatePostDto } from "./dtos/create.post.dto";
import { UpdatePostDto } from "./dtos/update.post.dto";
import { IPost } from "./interfaces/post.interface";
import Post from "./schemas/post.schema"

class PostRepository {
    constructor() { }

    async findAll(): Promise<IPost[]> {
        return Post.find();
    }

    async findById(id: string): Promise<IPost> {
     return Post.findById(id);
    }

    async findByTitle(title: string): Promise<IPost> {
        return Post.findOne({ title }) 
    }

    async create(post: CreatePostDto): Promise<IPost> {
        const createdPost = await Post.create(post);

        return createdPost.save();
    }


     async update(id: string, post: UpdatePostDto): Promise<IPost> {
        const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });

        return updatedPost.save();
    } 


    async delete(id: string) {
        return Post.findByIdAndDelete(id);
    }
}

export default new PostRepository();

