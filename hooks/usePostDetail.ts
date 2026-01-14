import { useState, useEffect } from "react";
import { postsService, Post, Comment } from "@/lib/api";
export const usePostDetail = (id: string | null) => {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const postData = await postsService.getById(Number(id));
        const commentsData = await postsService.getComments(Number(id));
        setPost(postData);
        setComments(commentsData);
        setError(null);
      } catch (err) {
        setError("Error al cargar el post");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { post, comments, loading, error };
};
