"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { PostForm } from "@/components/molecules/PostForm";
import { Modal } from "@/components/molecules/Modal";
import { usePost } from "@/hooks/usePost";
import { usePostEdit } from "@/hooks/usePostEdit";
import { UI_TEXTS } from "@/lib/constants/ui-texts";
import { ROUTES } from "@/lib/constants/routes";
import { MESSAGES } from "@/lib/constants/messages";

export default function EditPostPage() {
  const params = useParams();
  const id = params.id as string;
  const { post, loading, error } = usePost(id);
  const { modal, handleSubmit, handleCancel, closeModal } = usePostEdit(id);

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
            <Button variant="secondary">{UI_TEXTS.BUTTONS.BACK_TO_POSTS}</Button>
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
      <Container className="max-w-3xl">
        <div className="mb-6">
          <Link href={`/posts/${id}`}>
            <Button variant="secondary">← Volver al Post</Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
          <Text variant="h1" className="mb-2">
            Editar Post
          </Text>
          <Text
            variant="small"
            className="mb-6 text-gray-600 dark:text-gray-400"
          >
            Post ID: {post.id}
          </Text>
          <PostForm
            initialData={{
              title: post.title,
              body: post.body,
              userId: post.userId,
            }}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            submitLabel="Guardar Cambios"
          />
        </div>
      </Container>
    </div>
  );
}
