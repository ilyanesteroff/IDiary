
//For fetching todos of logged in user
export default page => { 
  return {
    query: `
      query GetYourTodos($page: Int!) {
        todos(page: $page){
          _id,
          task
          completed
          createdAt
          timeToComplete
          public
          tags
        }
      }
    `,
    variables: {
      page: page
    }
  }
}