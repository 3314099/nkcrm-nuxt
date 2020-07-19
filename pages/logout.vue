<template>
  <div>
    Выход из системы..., подождите.
  </div>
</template>

<script>
import isAuthed from '@/middleware/isAuthed'
export default {
  name: 'Logout',
  middleware: [isAuthed],
  beforeCreate () {
    this.$store.dispatch('auth/logout')
    this.$router.push('/') // событие или сообщение - вы вышли из системы
    this.$store.dispatch('snackBar/changeSnackBar', 'exit')
  }
}
</script>

<style scoped>

</style>
