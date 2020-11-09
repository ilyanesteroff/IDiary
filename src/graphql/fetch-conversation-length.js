

export default _ => {
  return {
    query: `
      query getConvs{
        getAuthUser{
          conversations
        }
      }
    `
  }
}