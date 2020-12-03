

export default (page, tag) => {
  return {
    query: `
      query GetTodos($page: Int!, $tag: String!){
        findTodosByTagname(tag: $tag, page: $page){
          _id,
          task
          completed
          createdAt
          creator { 
            username 
            _id 
          }
          timeToComplete
          public
          tags
          imageUrl
        }
      }
    `,
    variables: {
      page: page,
      tag: tag
    }
  }
}