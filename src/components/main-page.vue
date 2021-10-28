<template>
  <div class="mainpage">
    <Header>
      <template v-slot:user-actions>
        <UserActions />
      </template>
      <template v-slot:user-stories>
        <UserStories />
      </template>
    </Header>
    <div class="main">
      <UserIssues :user="users[0]"/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import UserActions from "@/components/user-actions";
import UserStories from "@/components/user-stories";
import UserIssues from '@/components/user-issues';
export default {
  name: "MainPage",
  components: {
    Header,
    UserActions,
    UserStories,
    UserIssues,
  },
  props: {},
  data() {
    return {
      users: [
        {
          name: 'joshua_l',
          profession: 'Vue.js',
          description: 'JavaScript framework for building interactive web applications ⚡',
        }
      ]
    };
  },
  methods: {},
};
</script>

<style lang="css" scoped></style>
