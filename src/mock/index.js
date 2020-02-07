import Mock from 'mockjs'

const baseUrl = process.env.VUE_APP_BASE_API

Mock.mock(baseUrl + '/users/login', 'post', options => {
  const data = JSON.parse(options.body)
  return {
    code: 20000,
    data: {
      token: `${data.username}-token`
    }
  }
})

// eslint-disable-next-line no-useless-escape
Mock.mock(RegExp(baseUrl + '/users/info.*'), 'get', options => {
  var roles = ['user']
  const name = /(?<==).+(?=-)/.exec(options.url)[0]
  if (name === 'admin') {
    roles = ['admin']
  } else if (name === 'editor') {
    roles = ['editor']
  }
  return {
    code: 20000,
    data: {
      avatar: '头像地址',
      introduction: '个人描述',
      name: name,
      roles: roles
    }
  }
})

Mock.mock(baseUrl + '/users/logout', 'post', options => {
  console.log(options)
  return {
    code: 20000
  }
})

Mock.mock(baseUrl + '/works/fetc', {
  code: 20000,
  'data|1-20': [{
    id: '@integer(101,9999)',
    name: '@cword(2,6)',
    courseName: '@word(2,6)',
    start: '@date()',
    end: '@date()',
    remark: '@cword(5,20)',
    number: '@natural(0,56)',
    'file|0-1': [{
      name: '@cword(2,6).zip',
      url: 'https://vue.yeek.top/api'

    }]
  }]
})

Mock.mock(baseUrl + '/works/post', 'post', options => {
  console.log(options)
  return {
    code: 20000
  }
})

Mock.setup({
  timeout: '300-600'
})
