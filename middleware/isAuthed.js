export default function ({ store, redirect }) {
  if (!store.getters['auth/isAuthenficated']) {
    // redirect('/?message=login') // вызвать сообщение или событие с указанием причины редиректа
    redirect('/')
    store.dispatch('snackBar/changeSnackBar', 'login')
  }
}
