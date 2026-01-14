export const MESSAGES = {
  POST: {
    CREATED: (id: number) => `Post creado exitosamente con ID: ${id}`,
    UPDATED: "Post actualizado exitosamente",
    DELETED: "Post eliminado exitosamente",
    NOT_FOUND: "Post no encontrado",
  },
  ERROR: {
    CREATE_POST: "Error al crear el post",
    UPDATE_POST: "Error al actualizar el post",
    DELETE_POST: "Error al eliminar el post",
    LOAD_POST: "Error al cargar el post",
    LOAD_POSTS: "Error al cargar los posts",
  },
};
