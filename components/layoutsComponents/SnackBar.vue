<template>
  <v-snackbar
    v-model="snackbar"
    :bottom="y === 'bottom'"
    :color="color"
    :left="x === 'left'"
    :multi-line="mode === 'multi-line'"
    :right="x === 'right'"
    :timeout="timeout"
    :top="y === 'top'"
    :vertical="mode === 'vertical'"
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        dark
        text
        v-bind="attrs"
        @click="snackbar = false"
      >
        <v-icon>mdi-close-circle-outline</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'SnackBar',
  data () {
    return {
      color: '',
      mode: '',
      snackbar: false,
      text: 'Hello, I\'m a snackbar',
      timeout: 6000,
      x: null,
      y: 'top'
    }
  },
  computed: {
    newSnackBar () {
      return this.snackbar
    },
    snackBar () {
      return this.$store.getters['snackBar/snackBar']
    },
    error () {
      return this.$store.getters['index/error']
    }
  },
  watch: {
    snackBar (value) {
      if (value) {
        this.buildSnackBar(value)
      }
    },
    error (value) {
      if (value) {
        this.buildError(value)
      }
    }
  },
  mounted () {
    const { message } = this.$route.query // сообщение через адресную строку
    if (message) {
      this.buildMessage(message)
    }
  },
  methods: {
    buildSnackBar (snackBar) {
      switch (snackBar) {
        case 'login':
          this.color = 'success'
          this.mode = '' // 'vertical' => mobile
          this.text = 'Необходимо войти в систему' // текст сообщения
          this.timeout = 2000 // 1000 = 1 сек.
          this.x = null // left/right/null
          this.y = 'top' // bottom/top
          this.snackbar = true // true/false
          break
        case 'logout':
          this.color = 'success'
          this.mode = '' // 'vertical' => mobile
          this.text = 'Вы вышли из системы' // текст сообщения
          this.timeout = 2000 // 1000 = 1 сек.
          this.x = null // left/right/null
          this.y = 'top' // bottom/top
          this.snackbar = true // true/false
          break
        default: // '' или нет в списке
          break
      }
      this.$store.dispatch('snackBar/changeSnackBar', '')
    },
    buildError () {
    },
    buildMessage (message) {
      this.color = 'primary'
      this.mode = '' // 'vertical' => mobile
      this.text = 'Получено сообщение' + message // текст сообщения
      this.timeout = 6000 // 1000 = 1 сек.
      this.x = null // left/right/null
      this.y = 'top' // bottom/top
      this.snackbar = true // true/false
      this.$store.dispatch('snackBar/changeSnackBar', '')
    }
  }
}
</script>

<style scoped>

</style>
