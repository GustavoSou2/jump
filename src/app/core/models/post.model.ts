export interface Post {
  id: string;
  title: string;
  text: string;
  image_id: string;
  key_words: string[];
  links: string[];
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}
