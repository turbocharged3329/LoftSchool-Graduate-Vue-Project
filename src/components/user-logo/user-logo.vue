<template>
  <div 
  class='user-logo'
  :class="{'vertical': isVertical}"
  >
    <img :src="repository.avatar ? repository.avatar : '../assets/profile-photo.svg'" 
    class="user-img" 
    :class="{'big' : isBig, 'small': !isBig, 'active': isActive}"
    />
      <p 
      class="user-name"
      :class="{'text-bold': !isVertical, 'text-normal': isVertical}"
      >
      {{repository.name}}
      </p>
  </div>
</template>

<script>
export default {
  name: 'UserLogo',
  components: {},
  props: {
    repository: {
      type: Object,
    },
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
  .user-img {
    border-radius: 50%;
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
  .text-bold {
    font-weight: bold;
    font-size: 18px;
    margin-left: 12px;
  }
  .text-normal {
    font-weight: normal;
    font-size: 12;
  }
</style>
