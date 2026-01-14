"use client";

import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { PostForm } from "@/components/molecules/PostForm";
import { Modal } from "@/components/molecules/Modal";
import { usePostCreate } from "@/hooks/usePostCreate";
import { ROUTES } from "@/lib/constants/routes";
import { UI_TEXTS } from "@/lib/constants/ui-texts";

export default function CreatePostPage() {
  const { modal, handleSubmit, handleCancel, closeModal } = usePostCreate();

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
          <Link href={ROUTES.POSTS}>
            <Button variant="secondary">{UI_TEXTS.BUTTONS.BACK_TO_POSTS}</Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
          <Text variant="h1" className="mb-6">
            Crear Nuevo Post
          </Text>
          <PostForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            submitLabel="Crear Post"
          />
        </div>
      </Container>
    </div>
  );
}
