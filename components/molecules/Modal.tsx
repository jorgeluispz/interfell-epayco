"use client";

import { type FC, useEffect } from "react";
import { ModalType } from "@/lib/constants/modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  type?: ModalType;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type = ModalType.INFO,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const typeStyles = {
    [ModalType.SUCCESS]:
      "bg-green-100 dark:bg-green-900 border-green-500 text-green-800 dark:text-green-200",
    [ModalType.ERROR]:
      "bg-red-100 dark:bg-red-900 border-red-500 text-red-800 dark:text-red-200",
    [ModalType.INFO]:
      "bg-blue-100 dark:bg-blue-900 border-blue-500 text-blue-800 dark:text-blue-200",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {title}
          </h3>
        )}

        <div className={`border-l-4 p-4 rounded ${typeStyles[type]}`}>
          <p className="text-sm font-medium">{message}</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
