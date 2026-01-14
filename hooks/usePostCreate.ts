import { useState } from "react";
import { useRouter } from "next/navigation";
import { postsService } from "@/lib/api";
import { ModalType } from "@/lib/constants/modal";
import { MESSAGES } from "@/lib/constants/messages";
import { ROUTES } from "@/lib/constants/routes";

export const usePostCreate = () => {
  const router = useRouter();
  const [modal, setModal] = useState<{
    isOpen: boolean;
    message: string;
    type: ModalType;
  }>({ isOpen: false, message: "", type: ModalType.INFO });

  const handleSubmit = async (data: {
    title: string;
    body: string;
    userId: number;
  }) => {
    try {
      const newPost = await postsService.create(data);
      setModal({
        isOpen: true,
        message: MESSAGES.POST.CREATED(newPost.id),
        type: ModalType.SUCCESS,
      });
    } catch (err) {
      setModal({
        isOpen: true,
        message: MESSAGES.ERROR.CREATE_POST,
        type: ModalType.ERROR,
      });
      console.error(err);
    }
  };

  const handleCancel = () => {
    router.push(ROUTES.POSTS);
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
    if (modal.type === ModalType.SUCCESS) {
      router.push(ROUTES.POSTS);
    }
  };

  return { modal, handleSubmit, handleCancel, closeModal };
};
