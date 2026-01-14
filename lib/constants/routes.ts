export const ROUTES = {
  POSTS: "/posts",
  POST_CREATE: "/posts/create",
  POST_DETAIL: (id: string | number) => `/posts/${id}`,
  POST_EDIT: (id: string | number) => `/posts/${id}/edit`,
} as const;

export const API_ROUTES = {
  POSTS: "/posts",
  POST_BY_ID: (id: number) => `/posts/${id}`,
  POST_COMMENTS: (postId: number) => `/posts/${postId}/comments`,
} as const;
