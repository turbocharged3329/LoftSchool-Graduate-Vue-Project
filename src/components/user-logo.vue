<template>
  <div 
  class='user-logo'
  :class="{'vertical': isVertical}"
  >
    <img src="../assets/profile-photo.svg" 
    class="user-img" 
    :class="{'big' : isBig, 'small': !isBig, 'active': isActive}"
    />
      <p class="user-name">joshua_l</p>
  </div>
</template>

<script>
export default {
  name: 'UserLogo',
  components: {},
  props: {
    isVertical: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isBig: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
}
</script>

<style lang="css" scoped>
.user-logo {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.vertical {
  flex-direction: column;
}
.big {
  width: 80px;
  height: 80px;
}
.small {
  width: 37px;
  height: 37px;
}
.active {
  border: 2px solid #a6328d;
  border-radius: 50%;
  padding: 2px;
}
.user-name {
  margin-left: 12px;
}
</style>
