<template>
  <div class="user-issues">
    <section class="user-issues__header">
      <UserLogo :repository="repository" />
    </section>
    <section class="user-issues__user-info">
      <h1 class="user-info__title">
        {{ repository.profession }}
      </h1>
      <p class="user-info__prof-info">
        {{ repository.description }}
      </p>
      <div class="user-info__actions">
        <slot name="actions"></slot>
      </div>
    </section>
    <section class="user-issues__block">
      <Toggler
        :items="issues"
        @toggle="showItems($event)"
        :isHidden="itemsIsHide"
      />
    </section>
    <section class="user-issues__adding-date">

    </section>
  </div>
</template>

<script>
import Toggler from "@/components/toggler/toggler";
import UserLogo from '@/components/user-logo/user-logo';

export default {
  name: "UserIssues",
  components: {
    // RepoActions,
    Toggler,
    UserLogo
  },
  props: {
    repository: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      itemsIsHide: true,
      issues: [],
    };
  },
  methods: {
    showItems(e) {
      this.itemsIsHide = e;
    },
    getIssues() {
      if (this.repository.issues_url) { 
        this.axios(this.repository.issues_url)
        .then(response => {
          response.data.forEach(issue => {
            this.issues.push(
            {
              title: issue.user.login,
              description: issue.title
            }
          )
          }) 
        })
        }
    }
  },
  mounted() {
    this.$nextTick(this.getIssues())
  }
};
</script>

<style lang="css" scoped>
.user-issues {
  margin: 24px 0px;
  /* добавить в медиазапрос */
}
.user-issues__header {
  display: flex;
  margin: 16px 0px;
  align-items: center;
}
.user-name {
  margin: 0px 14px;
}
.user-info__title {
  text-align: left;
}
.user-issues__user-info {
  border-radius: 20px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  padding: 24px 20px;
  margin: 16px 0px;
}
.user-info__prof-info {
  text-align: left;
}
.user-info__actions {
  display: flex;
}
</style>
