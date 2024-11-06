import {
  collection,
  CollectionReference,
  DocumentData,
} from 'firebase/firestore';
import { database } from '../../core/firebase/firebase.db';

export const getRepository = (
  repository: string
): CollectionReference<DocumentData, DocumentData> =>
  collection(database, repository);
