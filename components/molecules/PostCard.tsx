"use client";

import { type FC } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  onDelete?: (id: number) => void;
}

export const PostCard: FC<PostCardProps> = ({
  id,
  title,
  body,
  onDelete,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {body}
      </p>
      <div className="flex gap-3">
        <Link
          href={ROUTES.POST_DETAIL(id)}
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium text-sm"
        >
          Ver detalles
        </Link>
        <Link
          href={ROUTES.POST_EDIT(id)}
          className="text-green-600 hover:text-green-700 dark:text-green-400 font-medium text-sm"
        >
          Editar
        </Link>
        {onDelete && (
          <button
            onClick={() => onDelete(id)}
            className="text-red-600 hover:text-red-700 dark:text-red-400 font-medium text-sm"
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};
