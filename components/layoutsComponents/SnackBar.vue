<template>
  <div>
    <v-snackbar
      v-model="getSnackBar.snackbar"
      absolute
      top
      color="deep-purple accent-4"
      :timeout="getSnackBar.timeout"
    >
      {{ getSnackBar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          icon
          text
          v-bind="attrs"
          @click="closeSnackBar()"
        >
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'SnackBar',
  computed: {
    getSnackBar: {
      get () {
        const snackBar = this.$store.getters['snackBar/snackBar']
        return this.buildSnackBar(snackBar)
      }
    }
  },
  methods: {
    closeSnackBar () {
      this.$store.dispatch('snackBar/changeSnackBar', '')
    },
    buildSnackBar (snackBar) {
      const newSnackBar = {}
      switch (snackBar) {
        case 'login':
          newSnackBar.color = 'success'
          newSnackBar.mode = '' // 'vertical' => mobile
          newSnackBar.text = 'Необходимо войти в систему' // текст сообщения
          newSnackBar.timeout = 6000 // 1000 = 1 сек.
          newSnackBar.x = null // left/right/null
          newSnackBar.y = 'top' // bottom/top
          newSnackBar.snackbar = true // true/false
          break
        case 'exit':
          newSnackBar.color = 'success'
          newSnackBar.mode = '' // 'vertical' => mobile
          newSnackBar.text = 'Вы вышли из системы' // текст сообщения
          newSnackBar.timeout = 6000 // 1000 = 1 сек.
          newSnackBar.x = null // left/right/null
          newSnackBar.y = 'top' // bottom/top
          newSnackBar.snackbar = true // true/false
          break
        default: // '' или нет в списке
          newSnackBar.color = 'success' // primary, success, info, warning, error, pink, indigo, teal, cyan, purple
          newSnackBar.mode = '' // 'vertical' => mobile
          newSnackBar.text = '' // текст сообщения
          newSnackBar.timeout = 1 // 1000 = 1 сек.
          newSnackBar.x = null // left/right
          newSnackBar.y = 'top' // bottom/top
          newSnackBar.snackbar = false // true/false
      }
      return newSnackBar
    }
  }
}
</script>

<style scoped>

</style>
