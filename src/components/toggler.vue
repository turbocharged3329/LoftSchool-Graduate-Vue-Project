<template>
  <div class="toggler">
    <p class="toggler__title">{{ 'Hide issues' }}</p>
     <ul class="toggler__list">
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
  },
  data() {
    return {}
  },
  methods: {}
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
  text-align: left;
}
.list-item__title {
  font-weight: 700;
}</style>
