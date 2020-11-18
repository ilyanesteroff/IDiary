

export default
  { 
    query: `
      query {
        userStats{
          incomingRequests
          unseenMessages
        }
      }
    `
  }