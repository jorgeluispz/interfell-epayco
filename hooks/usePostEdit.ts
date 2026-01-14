import { useState } from "react";
import { useRouter } from "next/navigation";
import { postsService } from "@/lib/api";
import { ModalType } from "@/lib/constants/modal";
import { MESSAGES } from "@/lib/constants/messages";
import { ROUTES } from "@/lib/constants/routes";

export const usePostEdit = (id: string) => {
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
      await postsService.update(Number(id), data);
      setModal({
        isOpen: true,
        message: MESSAGES.POST.UPDATED,
        type: ModalType.SUCCESS,
      });
    } catch (err) {
      setModal({
        isOpen: true,
        message: MESSAGES.ERROR.UPDATE_POST,
        type: ModalType.ERROR,
      });
      console.error(err);
    }
  };

  const handleCancel = () => {
    router.push(ROUTES.POST_DETAIL(id));
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
    if (modal.type === ModalType.SUCCESS) {
      router.push(ROUTES.POST_DETAIL(id));
    }
  };

  return { modal, handleSubmit, handleCancel, closeModal };
};
