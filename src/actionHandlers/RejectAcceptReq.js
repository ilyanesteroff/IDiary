import rejectReq from '../api/profile/reject-follow-request'
import acceptReq from '../api/profile/accept-follow-request'


export default async (reqId, setLoading, cb, accept) => {
  setLoading(true)
  accept
    ? await acceptReq(reqId)
    : await rejectReq(reqId)
  setLoading(false)
  cb()
}