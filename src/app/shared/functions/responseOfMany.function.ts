import { DocumentData } from "firebase/firestore";

export function ResponseOfManyDocuments(querySnapshot: any): DocumentData[] {
  return querySnapshot.docs.map((doc: any) => {
    const { id } = doc;
    return { id, ...doc.data() };
  });
}
