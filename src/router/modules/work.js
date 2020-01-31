import Layout from '@/layout'

const work = {
  path: '/work',
  component: Layout,
  redirect: '/work/active',
  meta: {
    'title': '作业',
    'icon': 'el-icon-edit'
  },
  children: [
    {
      path: 'all',
      component: () => import('@/views/work/all'),
      name: 'all_work',
      meta: { 'title': '全部', icon: 'el-icon-edit-outline' }
    },
    {
      path: 'active',
      component: () => import('@/views/work/active'),
      name: 'active_work',
      meta: { 'title': '进行中', icon: 'el-icon-takeaway-box' }
    },
    {
      path: 'post',
      component: () => import('@/views/work/post'),
      name: 'post_work',
      meta: { 'title': '发布', icon: 'el-icon-document-add', roles: ['super_editor'] }
    }
  ]
}

export default work
