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
import dark from '@/components/review/dark/smallDark'
import darkMsgShow from '@/components/review/dark/dark_msg_show'
import chapted from '@/components/review/dark/chapted'
import ticket from '@/components/review/ticket/ticket'
import tickAll from '@/components/review/ticket/tick_all'
import inHand from '@/components/review/ticket/in_hand'
import untreated from '@/components/review/ticket/untreated'
import resolved from '@/components/review/ticket/resolved'
import addTicked from '@/components/review/ticket/add_ticked'
import tickShow from '@/components/review/ticket/tick_show'
import bookManager from '@/components/BookManager/BookManager'
import bookList from '@/components/BookManager/book_list'
import addBook from '@/components/BookManager/add_book'
import soldBook from '@/components/BookManager/sold_book'
import rackingBook from '@/components/BookManager/racking_book'
import bookManagerShow from '@/components/BookManager/book_show'
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
          redirect: 'chapted',
          meta: { title: '小黑屋' },
          component: dark,
          children: [
            { path: '/chapted', name: 'chapted', meta: { title: '和谐库' }, component: chapted },
            { path: '/dark_msg_show/:id/:uid', name: 'dark_msg_show', meta: { title: '和谐详情' }, component: darkMsgShow }
          ]
        },
        { path: '/ticket',
          name: 'ticket',
          redirect: 'tick_all',
          meta: { title: '工单' },
          component: ticket,
          children: [
            { path: '/tick_all', name: 'tick_all', meta: { title: '全部' }, component: tickAll },
            { path: '/in_hand', name: 'in_hand', meta: { title: '处理中' }, component: inHand },
            { path: '/untreated', name: 'untreated', meta: { title: '未处理' }, component: untreated },
            { path: '/resolved', name: 'resolved', meta: { title: '已解决' }, component: resolved },
            { path: '/add_ticked/:id', name: 'add_ticked', meta: { title: '工单添加' }, component: addTicked },
            { path: '/tick_show/:id', name: 'tick_show', meta: { title: '工单详情' }, component: tickShow }
          ]
        },
        { path: '/bookManager',
          name: 'bookManager',
          redirect: 'book_list',
          meta: { title: '书籍管理' },
          component: bookManager,
          children: [
                { path: '/book_list', name: 'book_list', meta: { title: '书籍列表' }, component: bookList },
                { path: '/add_book', name: 'add_book', meta: { title: '添加书籍' }, component: addBook },
                { path: '/sold_book', name: 'sold_book', meta: { title: '下架书籍' }, component: soldBook },
                { path: '/racking_book', name: 'racking_book', meta: { title: '下架书籍' }, component: rackingBook },
                { path: '/book_manager_show/:id/:sold', name: 'book_manager_show', meta: { title: '书籍展示' }, component: bookManagerShow }
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
