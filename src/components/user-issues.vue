<template>
  <div class="user-issues">
    <section class="user-issues__header">
      <UserLogo :user="user" />
    </section>
    <section class="user-issues__user-info">
      <h1 class="user-info__title">
        {{ user.profession }}
      </h1>
      <p class="user-info__prof-info">
        {{ user.description }}
      </p>
      <div class="user-info__actions">
        <slot name="actions"></slot>
      </div>
    </section>
    <section class="user-issues__block">
      <Toggler
        :items="user.issues"
        @toggle="showItems($event)"
        :isHidden="itemsIsHide"
      />
    </section>
    <section class="user-issues__adding-date">

    </section>
  </div>
</template>

<script>
import Toggler from "@/components/toggler";
import UserLogo from '@/components/user-logo';

export default {
  name: "UserIssues",
  components: {
    // RepoActions,
    Toggler,
    UserLogo
  },
  props: {
    user: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      itemsIsHide: true,
    };
  },
  methods: {
    showItems(e) {
      this.itemsIsHide = e;
    },
  },
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
