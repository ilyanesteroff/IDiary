import unsend from '../api/profile/unsend-follow-request'


export default async (reqId, setLoading, cb) => {
  setLoading(true)
  await unsend(reqId)
  cb()
}