import Mock from 'mockjs'

const baseUrl = process.env.VUE_APP_BASE_API

Mock.mock(baseUrl + '/user/login', 'post', () => {
  return {
    code: 20000,
    data: {
      token: 'admin-token'
    }
  }
})

// eslint-disable-next-line no-useless-escape
Mock.mock(RegExp(baseUrl + '/user/info.*'), 'get', () => {
  return {
    code: 20000,
    data: {
      avatar: '头像地址',
      introduction: '个人描述',
      name: 'admin',
      roles: ['admin']
    }
  }
})

Mock.mock(baseUrl + '/user/logout', 'post', options => {
  console.log(options)
  return {
    code: 20000
  }
})

Mock.mock(baseUrl + '/work/fetc', {
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

Mock.mock(baseUrl + '/work/post', 'post', options => {
  console.log(options)
  return {
    code: 20000
  }
})

Mock.setup({
  timeout: '300-600'
})
