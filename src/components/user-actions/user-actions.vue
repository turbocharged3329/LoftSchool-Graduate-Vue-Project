<template >
  <div class='user-actions'>
   <img src="../../assets/profile-photo.svg" class="user-actions__img"/> 
   <img src="../../assets/home-ico.svg" class="user-actions__img"/> 
   <img src="../../assets/sign-out-ico.svg" class="user-actions__img"/> 
  </div>
</template>

<script>
export default {
  name: 'UserActions',
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="css" scoped>
.user-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
