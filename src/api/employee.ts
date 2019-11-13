import { $get } from '../utils/request'

export function getEmployee(params: object) {
  return $get('/employee/list', params)
}