export type UserType = {
  login: string;
  pass: string;
}

const users:UserType[] = [
  {
    login: 'admin',
    pass: '0000'
  },
  {
    login: 'librarian',
    pass: '1111'
  },
]

export function checkAuth({login, pass}:UserType):string {
  const user = users.find( item => item.login === login)
  if (user) {
    if (user.pass === pass) return 'Вы успешно вошли'
    return "Неверный пароль"
  }
  return 'Пользователь с таким логином не найден'
}

export const authAPI = {
  getUser(id: string) {
    // fetch
    return 'user' + id
  },
}
