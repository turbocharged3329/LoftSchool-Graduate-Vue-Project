<template>
  <div class="repo-actions">
    <button 
    class="repo-actions__btn" 
    :class="{ 'left-rounded': isLeftRounded }"
    @click="likeActions"
    >
      <div
      v-if="action.type=='like'" 
      class="star-icon"
      :class="{'star-icon__active': activity}"
      ></div>
      <div
      v-if="action.type=='fork'" 
      class="fork-icon"
      ></div>
      {{ action.type == 'like' ? 'Star' : 'Fork' }}
    </button>
      <div 
      class="repo-actions__count"
      :class="{ 'right-rounded': isRightRounded }">
        {{ toKCount }}
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
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activity: false,
    }
  },
  computed: {
    toKCount() {
      if (this.action.count > 1000) {
        return this.action.count.toString()[0] + this.action.count.toString()[1] + 'k'; 
      } else {
        return this.action.count;
      }
    }
  },
  methods: {
    async likeActions() {
      try {
      await this.axios({
        url: `https://api.github.com/user/starred/${this.action.owner}/${this.action.repo}`,
        method: this.activity ? "DELETE" : "PUT",
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      }) 
      this.activity = false;
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    this.activity = this.isActive ? true : false; 
  }
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
  background-color: #FAFBFC;
}
.repo-actions__btn:hover .star-icon {
  background-image: url('../../assets/stargreen-icon.svg');
}
.repo-actions__btn:hover .fork-icon {
  background-image: url('../../assets/forkgreen-icon.svg');
}
.star-icon__active {
  background-image: url('../../assets/stargreen-icon.svg') !important;
}
.btn__icon {
  display: inline;
}
.repo-actions__count {
  flex-basis: 40%;
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
.star-icon {
  background-image: url('../../assets/star-icon.svg');
  width: 15px;
  height: 15px;
}
.fork-icon {
  background-image: url('../../assets/fork-icon.svg');
  width: 12px;
  height: 15px;
}
</style>
