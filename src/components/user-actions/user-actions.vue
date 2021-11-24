<template>
  <div class="user-actions">
    <img
      :src="getUserData.avatar_url"
      class="user-actions__img"
      @click="goTo('UserLiked')"
    />
    <img
      src="../../assets/home-ico.svg"
      class="user-actions__img"
      @click="goTo('UserIssuesList')"
    />
    <img 
      src="../../assets/sign-out-ico.svg" 
      class="user-actions__img"
      @click="logout"
    />
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'

const {mapGetters} = createNamespacedHelpers('user');

export default {
  name: "UserActions",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'getUserData'
    ])
  },
  methods: {
    goTo(name) {
      this.$router.push({ name });
    },
    logout() {
      const answer = confirm('Выйти из системы?')
      if (answer) {
        localStorage.removeItem('token');
        this.$router.push('/')
      } 
    }
  },
};
</script>

<style lang="css" scoped>
.user-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.user-actions__img {
  width: 37px;
  height: 37px;
  border-radius: 50%;
}
</style>
