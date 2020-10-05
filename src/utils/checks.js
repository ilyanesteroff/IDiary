import validator from 'validator'
import serverUrl from '../utils/serverUrl'
import headers from '../utils/headers'

export const checkIfUserExists = (val, isEmail) => {
  if(isEmail)
    if(!validator.isEmail(val)) return false
  
  const query = {
    query: `
      query CheckEmailAndUsername($email: String!, $username: String!) {
        checkEmailAndUsername(email: $email, username: $username)
      }
    `,
    variables: {
      email: isEmail ? val : ' ',
      username: isEmail ? ' ' : val
    }
  }

  return fetch(serverUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(query)
    }
  )
    .then(res => res.json())
    .then(res => res.data.checkEmailAndUsername)
    .catch(err => {
      return false
    })
} 

export const checkIfResetPwIsActual = (token, signal) => {
  const query = {
    query: `
      query IfPwResetIsStillActual($token: String!) {
        getResetPassword(token: $token)
      }
    `,
    variables: {
      token: token
    }
  }

  return fetch(serverUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(query),
    signal: signal
  })
    .then(res => res.json())
    .then(res => res.data.getResetPassword)
    .catch(err => {
      return false
    })
}