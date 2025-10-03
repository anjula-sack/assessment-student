import { Account, Databases, ID, Models } from 'appwrite'

import client from '../../client'

const databases = new Databases(client)

export const createAssessment = async (data: Record<string, any>) => {
  return await databases.createDocument(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_APPWRITE_STUDENTS_COLLECTION_ID!,
    ID.unique(),
    data,
  )
}
