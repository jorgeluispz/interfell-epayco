import { useState, useEffect } from "react";
import { postsService, Post } from "@/lib/api";
export const usePost = (id: string | null) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await postsService.getById(Number(id));
        setPost(data);
        setError(null);
      } catch (err) {
        setError("Error al cargar el post");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return { post, loading, error };
};
