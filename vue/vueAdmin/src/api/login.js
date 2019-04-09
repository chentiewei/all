export const loginByUserInfo = [
  {
    "id": 1,
    "username": "admin",
    "pew": 123456,
    "role": [{"name": "home"}, {"name": "red"}, {"name": "yellow"}, {"name": "blue"}, {"name": "all",children:[{"name": "all1"},{"name": "all2"}]}],
    "introduce": "我可以看见全部页面"
  },
  {
    "id": 2,
    "username": "a",
    "pew": 123456,
    "role": [{"name": "home"}, {"name": "blue"}, {"name": "all",children:[{"name": "all2"}]}],
    "introduce": "我可以看到red和yellow页面"
  },
  {
    "id": 3,
    "username": "b",
    "pew": 123456,
    "role": [{"name": "home"}, {"name": "red"}],
    "introduce": "我可以看见red和blue页面"
  },
  {
    "id": 3,
    "username": "c",
    "pew": 123456,
    "role": [{'name':'home'},{"name": "all",children:[{"name": "all2"}]}],
    "introduce": "我可以看见red和blue页面"
  },
]
