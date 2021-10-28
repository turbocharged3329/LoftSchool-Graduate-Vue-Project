<template>
  <div class="repo-actions">
    <button class="repo-actions__btn">
      {{ action.type == 'like' ? 'Star' : 'Fork' }}
    </button>
      <div class="repo-actions__count">
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
}
.repo-actions__btn {
  flex-basis: 60%;
}
.repo-actions__count {
  flex-basis: 40%;
  background: #FAFBFC;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
