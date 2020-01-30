import Layout from '@/layout'

const work = {
  path: '/work',
  component: Layout,
  redirect: '/work/active',
  children: [
    {
      path: 'all',
      component: () => import('@/views/work/all'),
      name: 'all_work',
      meta: { 'title': '全部作业', role: ['user'] }
    },
    {
      path: 'active',
      component: () => import('@/views/work/active'),
      name: 'active_work',
      meta: { 'title': '进行中的作业', role: ['user'] }
    },
    {
      path: 'post',
      component: () => import('@/views/work/post'),
      name: 'post_work',
      meta: { 'title': '发布作业', role: ['super_editor'] }
    }
  ]
}

export default work
