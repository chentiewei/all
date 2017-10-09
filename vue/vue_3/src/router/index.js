import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import apply from '@/components/review/apply_for'
import approve from '@/components/review/approve'
import dark from '@/components/review/small_dark'
import mail from '@/components/mail/mail'
import mailAll from '@/components/mail/mail_all'
import Inbox from '@/components/mail/Inbox'
import Write from '@/components/mail/Write'
import mailShow from '@/components/mail/mail_show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      redirect: 'apply',
      children: [
        { path: '/apply', name: 'apply', component: apply },
        { path: '/approve', name: 'approve', component: approve },
        { path: '/dark', name: 'dark', component: dark },
        {
          path: '/mail',
          name: 'mail',
          component: mail,
          redirect: 'mail_all',
          children: [
            { path: '/mail_all', name: 'mail_all', component: mailAll },
            { path: '/Inbox', name: 'Inbox', component: Inbox },
            { path: '/Write', name: 'Write', component: Write },
            { path: '/mail_show/:id', name: 'mail_show', component: mailShow }
          ]
        }
      ]
    }
  ]
})
