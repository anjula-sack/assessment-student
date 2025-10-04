import { createAssessment } from '@/services/appwrite'
import { Databases, ID } from 'appwrite'

jest.mock('appwrite', () => ({
  ...jest.requireActual('appwrite'),
  ID: {
    unique: jest.fn(() => 'mock-unique-id'),
  },
}))

describe('appwrite service', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID = 'db'
    process.env.NEXT_PUBLIC_APPWRITE_STUDENTS_COLLECTION_ID = 'students'
    process.env.NEXT_PUBLIC_APPWRITE_ASSESSMENTS_COLLECTION_ID = 'assessments'
  })

  describe('createAssessment', () => {
    it('calls createDocument with correct parameters and returns value', async () => {
      const data = {
        school: 'School 1',
        grade: 'Grade 1',
        overallScore: 25,
        scores: '{"question_1":3,"question_2":1}',
        skillScores: '{"self_awareness":7,"social_management":5}',
        answers: '{"0":"1","1":"2"}',
        testType: 'assessment',
      }
      const mockResult = { id: 'a1' }
      const docSpy = jest
        .spyOn(Databases.prototype, 'createDocument')
        .mockResolvedValue(mockResult as any)
      const result = await createAssessment(data)
      expect(docSpy).toHaveBeenCalledWith(
        'db',
        'students',
        'mock-unique-id',
        data,
      )
      expect(result).toBe(mockResult)
    })
  })
})
