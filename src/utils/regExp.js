

export const strictCheckForUserName = new RegExp(/^[!@#$%^&*()+\-=[\]{};':"\\|,<>/?]*$/)

export const strictCheckForNames = new RegExp(/^[!@#$%^&*()_+1234567890-=[\]{};':"\\|,.<>/?]*$/)

export const passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.*[-+=/!@#$%^&*])(?=.{8,})")