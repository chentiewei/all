import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import defau from '@/components/default'
import apply from '@/components/review/apply/apply_for'
import sortBook from '@/components/review/apply/sortBook'
import newBook from '@/components/review/apply/newBook'
import Chapter from '@/components/review/apply/Chapter'
import starWriter from '@/components/review/apply/starWriter'
import bookShow from '@/components/review/apply/book_show'
import chapterShow from '@/components/review/apply/chapter_show'
import approve from '@/components/review/approved/approve'
import newApprove from '@/components/review/approved/newApprove'
import chapterApprove from '@/components/review/approved/chapterApprove'
import historyApprove from '@/components/review/approved/historyApprove'
import dark from '@/components/review/dark/small_dark'
import darkChat from '@/components/review/dark/dark_chat'
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
          redirect: 'sortBook1',
          meta: { title: '业务申请' },
          component: apply,
          children: [
            { path: '/sortBook1', name: 'sortBook1', component: sortBook },
            { path: '/newBook', name: 'newBook', meta: { title: '新书审核' }, component: newBook },
            { path: '/Chapter', name: 'Chapter', meta: { title: '章节审核' }, component: Chapter },
            { path: '/starWriter', name: 'starWriter', meta: { title: '星标作家' }, component: starWriter },
            { path: '/book_show/:id', name: 'book_show', meta: { title: '新书详情' }, component: bookShow },
            { path: '/chapter_show/:id', name: 'chapter_show', meta: { title: '章节详情' }, component: chapterShow }
          ]
        },
        {
          path: '/approve',
          name: 'approve',
          redirect: 'sortBook2',
          meta: { title: '业务通过' },
          component: approve,
          children: [
            { path: '/sortBook2', name: 'sortBook2', component: sortBook },
            { path: '/newApprove', name: 'newApprove', meta: { title: '新书通过' }, component: newApprove },
            { path: '/chapterApprove', name: 'chapterApprove', meta: { title: '章节通过' }, component: chapterApprove },
            { path: '/historyApprove', name: 'historyApprove', meta: { title: '历史通过' }, component: historyApprove }
          ]
        },
        { path: '/dark',
          name: 'dark',
          redirect: 'darkChat',
          meta: { title: '小黑屋' },
          component: dark,
          children: [
            { path: '/darkChat', name: 'darkChat', component: darkChat }
          ]
        },
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
