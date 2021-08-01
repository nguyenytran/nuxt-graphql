export default function({ app }) {
  if (app.$auth.$storage.getCookie('_token.local')) {
    return app.$auth.redirect('home')
  }

  return app.$auth.redirect('login')
}
