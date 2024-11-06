import { DocumentData } from "firebase/firestore";

export function ResponseOfOneDocument(doc: DocumentData): DocumentData {
  const { id } = doc;
  return {
    id,
    ...doc['data'](),
  };
}
