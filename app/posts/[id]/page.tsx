"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/molecules/Modal";
import { ConfirmModal } from "@/components/molecules/ConfirmModal";
import { usePostDetail } from "@/hooks/usePostDetail";
import { usePostDetailActions } from "@/hooks/usePostDetailActions";
import { UI_TEXTS } from "@/lib/constants/ui-texts";
import { ROUTES } from "@/lib/constants/routes";
import { MESSAGES } from "@/lib/constants/messages";

export default function PostDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const { post, comments, loading, error } = usePostDetail(id);
  const {
    modal,
    confirmModal,
    handleDelete,
    confirmDelete,
    closeModal,
    cancelDelete,
  } = usePostDetailActions(id);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <Container>
          <Text variant="body">{UI_TEXTS.LOADING.POST}</Text>
        </Container>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <Container>
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-200 px-4 py-3 rounded mb-4">
            {error || MESSAGES.POST.NOT_FOUND}
          </div>
          <Link href={ROUTES.POSTS}>
            <Button variant="secondary">
              {UI_TEXTS.BUTTONS.BACK_TO_POSTS}
            </Button>
          </Link>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        message={modal.message}
        type={modal.type}
      />
      <ConfirmModal
        isOpen={confirmModal}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        message="¿Estás seguro de que deseas eliminar este post?"
        confirmText="Eliminar"
      />
      <Container>
        <div className="mb-6">
          <Link href={ROUTES.POSTS}>
            <Button variant="secondary">
              {UI_TEXTS.BUTTONS.BACK_TO_POSTS}
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <Text variant="small" className="mb-2">
                Post #{post.id} | User #{post.userId}
              </Text>
              <Text variant="h1" className="mb-4">
                {post.title}
              </Text>
            </div>
            <div className="flex gap-3">
              <Link href={ROUTES.POST_EDIT(post.id)}>
                <Button variant="primary">Editar</Button>
              </Link>
              <Button variant="secondary" onClick={handleDelete}>
                Eliminar
              </Button>
            </div>
          </div>
          <Text variant="body" className="leading-relaxed">
            {post.body}
          </Text>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
          <Text variant="h2" className="mb-6">
            Comentarios ({comments.length})
          </Text>
          {comments.length === 0 ? (
            <Text variant="body" className="text-gray-600 dark:text-gray-400">
              {UI_TEXTS.EMPTY.COMMENTS}
            </Text>
          ) : (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="border-l-4 border-blue-500 pl-4 py-2"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Text variant="small" className="font-semibold">
                      {comment.name}
                    </Text>
                    <Text variant="small" className="text-gray-500">
                      ({comment.email})
                    </Text>
                  </div>
                  <Text
                    variant="body"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    {comment.body}
                  </Text>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
