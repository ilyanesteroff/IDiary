import unsend from '../api/profile/unsend-follow-request'


export default async (reqId, cb) => {
  await unsend(reqId)
  cb()
}