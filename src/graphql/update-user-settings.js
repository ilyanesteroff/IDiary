

export default userInput => {
  return {
    query: `
    mutation UpdateUserSettings($data: UpdatedUserSettingsData!) {
      updateUserSettings(userInput: $data) {
        public
        phone
      }
    }
  `,
  variables: {
    data: userInput
  }
  }
}