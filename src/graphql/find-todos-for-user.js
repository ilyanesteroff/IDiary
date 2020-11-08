import userIdComparer from '../utils/userIdComparer'

export default (page, userId) => { 
  return {
    query: `
      query GetYourTodos($page: Int!, $userId: ID) {
        todos(page: $page, userId: $userId){
          _id,
          task
          completed
          createdAt
          ${
            userIdComparer(userId)
              ? ''
              : 'creator { username _id }'
          }
          timeToComplete
          public
          tags
        }
      }
    `,
    variables: {
      page: page,
      userId: userId
    }
  }
}