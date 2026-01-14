"use client";

import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { PostCard } from "@/components/molecules/PostCard";
import { Modal } from "@/components/molecules/Modal";
import { ConfirmModal } from "@/components/molecules/ConfirmModal";
import { usePostsList } from "@/hooks/usePostsList";

export default function PostsPage() {
  const {
    posts,
    loading,
    error,
    modal,
    confirmModal,
    handleDelete,
    confirmDelete,
    closeModal,
    cancelDelete,
  } = usePostsList();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        message={modal.message}
        type={modal.type}
      />
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        message="¿Estás seguro de que quieres eliminar este post?"
        confirmText="Eliminar"
      />
      <Container>
        <div className="flex justify-between items-center mb-8">
          <div>
            <Text variant="h1" className="mb-2">
              Posts
            </Text>
            <Text variant="body" className="text-gray-600 dark:text-gray-400">
              Gestiona todos tus posts
            </Text>
          </div>
          <Link href="/posts/create">
            <Button variant="primary">Crear Post</Button>
          </Link>
        </div>

        {loading && (
          <div className="text-center py-12">
            <Text variant="body">Cargando posts...</Text>
          </div>
        )}

        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-200 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-12">
            <Text variant="body">No hay posts disponibles</Text>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
