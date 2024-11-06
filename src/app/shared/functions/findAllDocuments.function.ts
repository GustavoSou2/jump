import { getDocs } from "firebase/firestore";
import { getRepository } from "./getRepository.function";
import { ResponseOfManyDocuments } from "./responseOfMany.function";

export async function findAllDocuments(repository: string) {
  const collection = getRepository(repository);

  const querySnapshot = await getDocs(collection);

  return ResponseOfManyDocuments(querySnapshot);
}
