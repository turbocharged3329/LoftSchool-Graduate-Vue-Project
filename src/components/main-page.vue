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
  </div>
</template>

<script>
import Header from "@/components/header";
import UserActions from "@/components/user-actions";
import UserStories from "@/components/user-stories";

export default {
  name: "MainPage",
  components: {
    Header,
    UserActions,
    UserStories,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="css" scoped></style>
