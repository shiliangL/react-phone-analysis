import service from '../utlis/request.js'

export function fetchList(params) {
  return service({
    url: '/api/list',
    method: 'get',
    params
  })
}
export function fetchUserInfo(params) {
  return service({
    url: '/api/userInfo',
    method: 'get',
    params
  })
}

export function regisger(data) {
  return service({
    url: '/api/regisger',
    method: 'POST',
    data
  })
}

export function login(data) {
  return service({
    url: '/api/login',
    method: 'POST',
    data
  })
}
