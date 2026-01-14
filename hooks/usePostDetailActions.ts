import { useState } from "react";
import { useRouter } from "next/navigation";
import { postsService } from "@/lib/api";
import { ModalType } from "@/lib/constants/modal";
import { MESSAGES } from "@/lib/constants/messages";
import { ROUTES } from "@/lib/constants/routes";

export const usePostDetailActions = (id: string) => {
  const router = useRouter();
  const [modal, setModal] = useState<{
    isOpen: boolean;
    message: string;
    type: ModalType;
  }>({ isOpen: false, message: "", type: ModalType.INFO });
  const [confirmModal, setConfirmModal] = useState(false);

  const handleDelete = () => {
    setConfirmModal(true);
  };

  const confirmDelete = async () => {
    try {
      await postsService.delete(Number(id));
      setConfirmModal(false);
      setModal({
        isOpen: true,
        message: MESSAGES.POST.DELETED,
        type: ModalType.SUCCESS,
      });
    } catch (err) {
      setConfirmModal(false);
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
    if (modal.type === ModalType.SUCCESS) {
      router.push(ROUTES.POSTS);
    }
  };

  const cancelDelete = () => {
    setConfirmModal(false);
  };

  return {
    modal,
    confirmModal,
    handleDelete,
    confirmDelete,
    closeModal,
    cancelDelete,
  };
};
