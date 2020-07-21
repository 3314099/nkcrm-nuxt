<template>
  <div class="d-flex justify-start">
    <registration />
  </div>
</template>
<script>
import registration from '~/components/auth/registration'
export default {
  transition: 'bounce',
  components: { registration },
  layout: 'admin'
}
</script>
