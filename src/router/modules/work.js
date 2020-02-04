import Layout from '@/layout'

const work = {
  path: '/work',
  component: Layout,
  redirect: '/work/index',
  meta: {
    'title': '作业',
    'icon': 'el-icon-edit'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/work/index'),
      name: 'work_index',
      meta: { 'title': '作业', icon: 'el-icon-takeaway-box' }
    }
  ]
}

export default work
