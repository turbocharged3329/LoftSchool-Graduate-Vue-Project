<template>
  <div class="toggler">
    <div
    @pointerdown="toggleList()" 
    class="toggler__title"
    >
    <span class="action-desc">{{ isHidden ?  'Show issues' : 'Hide issues'}}&nbsp;</span>
    <img 
    v-show="!isHidden" 
    src="../../assets/arrowup-icon.png" 
    />
    <img 
    v-show="isHidden" 
    src="../../assets/arrowdown-icon.png" 
    />
    </div>
     <ul 
     class="toggler__list" 
     v-if="!isHidden"
     >
        <li v-for="item in items" :key="item.id" class="list-item">
          <span class="list-item__title">{{ item.title }}&nbsp;</span>
          <span>{{ item.description }}</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Toggler',
  emits: ['toggle'],
  components: {},
  props: {
    items: {
      type: Array,
      default() {
        return []
    }
  },
    isHidden: {
      type: Boolean,
      default: false
    }
  },
  data() {
  },
  methods: {
    toggleList() {
      this.$emit('toggle', !this.isHidden)
    }
  }
}
</script>

<style lang="css" scoped>
.toggler__list {
  list-style: none;
  text-align: left;
  padding: 0;
}
.list-item {
  margin: 8px 0;
}
.toggler__title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
}
.list-item__title {
  font-weight: 700;
}
</style>
