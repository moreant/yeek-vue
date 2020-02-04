import request from '@/utils/request'

export function fetchWork (query) {
  return request({
    url: '/work/fetc',
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

export function updateWork (data) {
  return request({
    url: '/work/update',
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
