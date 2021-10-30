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
      <UserIssues :user="users[0]">
        <template v-slot:actions>
        <RepoActions :action="{type: 'like', count: 5}" isLeftRounded/>
        <RepoActions :action="{type: 'fork', count: 5}" isRightRounded/>
        </template>
      </UserIssues>
      <UserIssues :user="users[1]">
        <template v-slot:actions>
        <RepoActions :action="{type: 'like', count: 5}" isLeftRounded/>
        <RepoActions :action="{type: 'fork', count: 5}" isRightRounded/>
        </template>
      </UserIssues>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import RepoActions from "@/components/repo-actions";
import UserActions from "@/components/user-actions";
import UserStories from "@/components/user-stories";
import UserIssues from "@/components/user-issues";

export default {
  name: "MainPage",
  components: {
    Header,
    UserActions,
    UserStories,
    UserIssues,
    RepoActions,
  },
  props: {},
  data() {
    return {
      users: [
        {
          name: "joshua_l",
          profession: "Vue.js",
          description:
            "JavaScript framework for building interactive web applications ⚡",
          issues: [
            {
              title: "joshua_l",
              description:
                "Enable performance measuring in production, at the user's request",
            },
            {
              title: "Camille",
              description: "It's Impossible to Rename an Inherited Slot",
            },
            {
              title: "Marselle",
              description:
                "transition-group with flex parent causes removed items to fly",
            },
          ],
        },
        {
          name: "Camille",
          profession: "React.js",
          description:
            "Open source JavaScript library used for designing user interfaces",
          issues: [
            {
              title: "joshua_l",
              description:
                "Enable performance measuring in production, at the user's request",
            },
            {
              title: "Camille",
              description: "It's Impossible to Rename an Inherited Slot",
            },
            {
              title: "Marselle",
              description:
                "transition-group with flex parent causes removed items to fly",
            },
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.main {
  display: flex;
  flex-direction: column;
}
@media (min-width: 1280px) {
  .main{
  margin: 0px 230px;
  }
}
</style>
