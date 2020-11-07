import block from '../api/profile/another-user/block-user'


export default async ( userId ) => {
  await block(userId)
  window.location.pathname = '/profile'
}