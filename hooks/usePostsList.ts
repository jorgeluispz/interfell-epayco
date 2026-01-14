import { useState, useEffect } from "react";
import { postsService, Post } from "@/lib/api";
import { ModalType } from "@/lib/constants/modal";
import { MESSAGES } from "@/lib/constants/messages";

export const usePostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<{
    isOpen: boolean;
    message: string;
    type: ModalType;
  }>({ isOpen: false, message: "", type: ModalType.INFO });
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    postId: number | null;
  }>({ isOpen: false, postId: null });

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await postsService.getAll();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(MESSAGES.ERROR.LOAD_POSTS);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = (id: number) => {
    setConfirmModal({ isOpen: true, postId: id });
  };

  const confirmDelete = async () => {
    if (confirmModal.postId === null) return;

    try {
      await postsService.delete(confirmModal.postId);
      setPosts(posts.filter((post) => post.id !== confirmModal.postId));
      setConfirmModal({ isOpen: false, postId: null });
      setModal({
        isOpen: true,
        message: MESSAGES.POST.DELETED,
        type: ModalType.SUCCESS,
      });
    } catch (err) {
      setConfirmModal({ isOpen: false, postId: null });
      setModal({
        isOpen: true,
        message: MESSAGES.ERROR.DELETE_POST,
        type: ModalType.ERROR,
      });
      console.error(err);
    }
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  const cancelDelete = () => {
    setConfirmModal({ isOpen: false, postId: null });
  };

  return {
    posts,
    loading,
    error,
    modal,
    confirmModal,
    handleDelete,
    confirmDelete,
    closeModal,
    cancelDelete,
  };
};
