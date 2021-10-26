<template>
  <div class="user-stories">
    <ul>
      <li v-for="user in users" :key="user.name">
        <div class="user-story">
        <img src="../assets/profile-photo.svg" />
        {{ user.name }}
        </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserStories',
  components: {},
  data() {
    return {
      users: [
        {
          name: 'John',
        },
        {
          name: 'John',
        },
        {
          name: 'John',
        },
        {
          name: 'John',
        },
      ]
    }
  },
}
</script>

<style lang="css" scoped>
  .user-stories {
    height: 100%;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
  }
  .user-story {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>
