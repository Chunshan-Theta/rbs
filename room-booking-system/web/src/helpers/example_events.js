const now = new Date()
export default [

  {
    id: 0,
    title: 'Phone Interview',
    allDay: false,
    start: new Date("2020-10-1 18:00:00 +0800"),
    end: new Date("2020-10-1 21:00:00 +0800"),
  },
  {
    id: 1,
    title: 'Today Event',
    allDay: false,
    desc: 'Pre-meeting meeting, to prepare for the meeting',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },{
    id: 2,
    title: 'Today Event',
    allDay: false,
    desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
    start: new Date(new Date().setHours(new Date().getHours() - 4)),
    end: new Date(new Date().setHours(new Date().getHours() + 4)),
  }
]