import { addDoc } from "firebase/firestore";
import { getRepository } from "./getRepository.function";

export async function createNewDocument<T>(repository: string, data: T) {
  const collection = getRepository(repository);
  const documentReference = await addDoc(collection, {
    ...data,
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
  });

  return documentReference;
}
