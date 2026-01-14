"use client";

import { type FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../atoms/Input";
import { TextArea } from "../atoms/TextArea";
import { Button } from "../atoms/Button";
import { postFormSchema, PostFormData } from "@/lib/validations/post";

interface PostFormProps {
  initialData?: {
    title: string;
    body: string;
    userId: number;
  };
  onSubmit: (data: PostFormData) => void;
  onCancel?: () => void;
  submitLabel?: string;
}

export const PostForm: FC<PostFormProps> = ({
  initialData = { title: "", body: "", userId: 1 },
  onSubmit,
  onCancel,
  submitLabel = "Guardar",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postFormSchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input
          label="User ID"
          type="number"
          disabled
          {...register("userId", { valueAsNumber: true })}
          error={errors.userId?.message}
        />
      </div>
      <div>
        <Input
          label="Título"
          {...register("title")}
          placeholder="Ingresa el título del post"
          error={errors.title?.message}
        />
      </div>
      <div>
        <TextArea
          label="Contenido"
          {...register("body")}
          placeholder="Escribe el contenido del post"
          error={errors.body?.message}
          rows={8}
        />
      </div>
      <div className="flex gap-4">
        <Button type="submit" variant="primary">
          {submitLabel}
        </Button>
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
        )}
      </div>
    </form>
  );
};
