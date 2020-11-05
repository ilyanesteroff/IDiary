import remove from '../api/profile/unfollow'

export default async(followId, setLoading, cb) => {
  setLoading(true)
  await remove(followId)
  cb()
}