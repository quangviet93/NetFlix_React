import axiosClient from '../axiosClient'

class StaffAdmin {
  getListStaff = async (params?: any) => {
    const url = `/admin`
    const res = await axiosClient.get(url, { params })
    return res.data.data
  }
}

export const StaffAdminApi = new StaffAdmin()
