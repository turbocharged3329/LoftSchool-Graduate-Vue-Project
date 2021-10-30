<template>
  <main class="authorization">
    <section class="authorization__form">
      <MainTitle />
      <p>More than just one repository.</p>
      <p>This is our digital world.</p>
      <button class="authorization__form-btn">Autorize with GitHub</button>
    </section>
    <section class="authorization__picture">
      <img src="../assets/authorization-img.png" />
    </section>
  </main>
  <footer>© Gitogram from Loftschool</footer>
</template>

<script>
import MainTitle from "@/components/main-title";
export default {
  name: "Authorization",
  components: {
    MainTitle,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.authorization__form {
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 196px;
  align-items: flex-start
}
.authorization__form-btn {
  background: #31ae54;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  padding: 11px 109px;
  font-weight: bold;
}
</style>
