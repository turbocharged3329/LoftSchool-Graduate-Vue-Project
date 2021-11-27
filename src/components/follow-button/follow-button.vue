<template>
  <div>
    <div class="follow-button">
      <button
        class="follow-button__btn"
        @click="followAction"
        :class="{
          'follow-button__btn-big': isBig,
          'follow-button__btn-small': !isBig,
          'follow-button__green': color == 'green',
          'follow-button__grey': color == 'grey',
        }"
      >
        <span class="follow-button__text" v-if="!isLoading">Follow</span>
        <Loader
          v-if="isLoading"
          :color="this.bgColor == 'green' ? 'grey' : 'green'"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Follow-button",
  components: {},
  props: {
    isBig: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isFollowing: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      color: "green",
    };
  },
  methods: {
    async followAction() {
      try {
        await this.axios({
          url: `https://api.github.com/user/starred/${this.user.owner}/${this.user.repo}`,
          method: this.activity ? "DELETE" : "PUT",
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`,
          },
        });
        this.color = this.color == "green" ? "grey" : "green";
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.color = this.isActive ? "green" : "grey";
    console.log(this.user);
  },
};
</script>

<style lang="css" scoped>
.follow-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.follow-button__btn {
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 44px;
  font-weight: bold;
  cursor: pointer;
}
.follow-button__btn-big {
  min-width: 256px;
  max-width: 276;
}
.follow-button__btn-small {
  min-width: 115px;
}
.follow-button__green {
  background: #31ae54;
}
.follow-button__grey {
  background: grey;
}
</style>
