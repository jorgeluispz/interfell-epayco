import apiClient from "./client";
import { AxiosResponse } from "axios";
import { API_ROUTES } from "@/lib/constants/routes";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const postsService = {
  getAll: async (): Promise<Post[]> => {
    const response: AxiosResponse<Post[]> = await apiClient.get(API_ROUTES.POSTS);
    return response.data;
  },

  getById: async (id: number): Promise<Post> => {
    const response: AxiosResponse<Post> = await apiClient.get(API_ROUTES.POST_BY_ID(id));
    return response.data;
  },

  create: async (post: Omit<Post, "id">): Promise<Post> => {
    const response: AxiosResponse<Post> = await apiClient.post(API_ROUTES.POSTS, post);
    return response.data;
  },

  update: async (id: number, post: Omit<Post, "id">): Promise<Post> => {
    const response: AxiosResponse<Post> = await apiClient.put(
      API_ROUTES.POST_BY_ID(id),
      post
    );
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await apiClient.delete(API_ROUTES.POST_BY_ID(id));
  },

  getComments: async (postId: number): Promise<Comment[]> => {
    const response: AxiosResponse<Comment[]> = await apiClient.get(
      API_ROUTES.POST_COMMENTS(postId)
    );
    return response.data;
  },
};
