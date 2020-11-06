import remove from '../api/profile/unfollow'


export default async(followId, cb) => {
  await remove(followId)
  cb()
}