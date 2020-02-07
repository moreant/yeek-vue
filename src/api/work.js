import request from '@/utils/request'

export function fetchWork (query) {
  return request({
    url: '/works/fetc',
    method: 'get',
    params: { query }
  })
}

export function postWork (data) {
  return request({
    url: '/works/post',
    method: 'post',
    data
  })
}

export function updateWork (data) {
  return request({
    url: '/works/update',
    method: 'post',
    data
  })
}

export function uploadWork (work) {
  return request({
    url: '/works/upload',
    method: 'post',
    work
  })
}
