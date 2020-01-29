import Layout from '@/layout'

const work = {
  path: '/work',
  component: Layout,
  redirect: '/work/active',
  children: [
    {
      path: 'all',
      component: () => import('@/views/work/all')
    },
    {
      path: 'active',
      component: () => import('@/views/work/active')
    },
    {
      path: 'post',
      component: () => import('@/views/work/post')
    }
  ]
}

export default work
