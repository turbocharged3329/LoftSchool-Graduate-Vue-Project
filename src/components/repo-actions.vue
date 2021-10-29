<template>
  <div class="repo-actions">
    <button 
    class="repo-actions__btn" 
    :class="{ 'left-rounded': isLeftRounded }"
    >
      <img 
      v-if="action.type=='fork'"
      class="btn__icon" 
      src="../assets/fork-icon.svg"
      />
      <img
      v-if="action.type=='like'"
      class="btn__icon" 
      src="../assets/star-icon.svg"
      />  
      {{ action.type == 'like' ? 'Star' : 'Fork' }}
    </button>
      <div 
      class="repo-actions__count"
      :class="{ 'right-rounded': isRightRounded }">
        {{ action.count }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepoActions',
  components: {},
  props: {
    action: {
      type: Object,
      require: true,
    },
    isLeftRounded: {
      type: Boolean,
      default: false,
    },
    isRightRounded: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="css" scoped>
.repo-actions {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  align-items: stretch;
  height: 28px;
}
.repo-actions__btn {
  flex-basis: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid rgba(27, 31, 35, 0.15);
}
.btn__icon {
  display: inline;
}
.repo-actions__count {
  flex-basis: 40%;
  background: #FAFBFC;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(27, 31, 35, 0.15);
  border-left: none;
}
.left-rounded {
  border-radius: 6px 0px 0px 6px;
}
.right-rounded {
  border-radius: 0px 6px 6px 0px;
}
</style>
