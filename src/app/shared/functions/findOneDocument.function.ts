import { doc, getDoc } from "firebase/firestore";
import { ResponseOfOneDocument } from "./responseOne.function";
import { getRepository } from "./getRepository.function";

export async function findOneDocument(repository: string, id: string) {
  const collection = getRepository(repository);
  const document = doc(collection, id);

  const querySnapshot = await getDoc(document);

  return ResponseOfOneDocument(querySnapshot);
}
