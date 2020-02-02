import request from '@/utils/request'

export function fetchWork (query) {
  return request({
    url: '/work/info',
    method: 'get',
    params: { query }
  })
}

export function postWork (data) {
  return request({
    url: '/work/post',
    method: 'post',
    data
  })
}

export function uploadWork (work) {
  return request({
    url: '/work/upload',
    method: 'post',
    work
  })
}
