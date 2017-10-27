import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import defau from '@/components/default'
import apply from '@/components/review/apply/apply_for'
import sortBook from '@/components/review/apply/sortBook'
import newBook from '@/components/review/apply/newBook'
import Chapter from '@/components/review/apply/Chapter'
import starWriter from '@/components/review/apply/starWriter'
import approve from '@/components/review/approve'
import dark from '@/components/review/small_dark'
import mail from '@/components/mail/mail'
import mailAll from '@/components/mail/mail_all'
import Inbox from '@/components/mail/Inbox'
import Import from '@/components/mail/Import'
import Draft from '@/components/mail/Draft'
import Dustbin from '@/components/mail/Dustbin'
import Write from '@/components/mail/Write'
import mailShow from '@/components/mail/mail_show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      redirect: '/defau',
      meta: { title: '首页' },
      children: [
        { path: '/defau', name: 'defau', meta: { title: '默认' }, component: defau },
        { path: '/apply',
          name: 'apply',
          redirect: 'sortBook',
          meta: { title: '业务申请' },
          component: apply,
          children: [
            { path: '/sortBook', name: 'sortBook', component: sortBook },
            { path: '/newBook', name: 'newBook', meta: { title: '新书审核' }, component: newBook },
            { path: '/Chapter', name: 'Chapter', meta: { title: '章节审核' }, component: Chapter },
            { path: '/starWriter', name: 'starWriter', meta: { title: '星标作家' }, component: starWriter }
          ]
        },
        { path: '/approve', name: 'approve', meta: { title: '业务通过' }, component: approve },
        { path: '/dark', name: 'dark', meta: { title: '小黑屋' }, component: dark },
        {
          path: '/mail',
          name: 'mail',
          redirect: 'mail_all',
          meta: { title: '信箱' },
          component: mail,
          children: [
            { path: '/mail_all', name: 'mail_all', component: mailAll },
            { path: '/Inbox', name: 'Inbox', meta: { title: '收件箱' }, component: Inbox },
            { path: '/Import', name: 'Import', meta: { title: '重要' }, component: Import },
            { path: '/Draft', name: 'Draft', meta: { title: '草稿箱' }, component: Draft },
            { path: '/Dustbin', name: 'Dustbin', meta: { title: '垃圾箱' }, component: Dustbin },
            { path: '/Write', name: 'Write', meta: { title: '写信' }, component: Write },
            { path: '/mail_show/:id', name: 'mail_show', meta: { title: '信件阅读' }, component: mailShow }
          ]
        }
      ]
    }
  ]
})
