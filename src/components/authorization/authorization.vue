<template>
  <div class="authorization">
    <div class="authorization__main">
      <div class="authorization__main-form-wrapper">
        <div class="authorization__main-form">
        <MainTitle />
        <div class="authorization__main-form-description">
        <p class="description-text">More than just one repository.</p>
        <p class="description-text">This is our digital world.</p>
        </div>
        <CustomButton 
        :text="'Autorize with GitHub'" 
        isBig
        @click="getAuthorization"
        ></CustomButton>
      </div>
      </div>
      <div class="authorization__picture">
        <img class="authorization__picture-img" src="../../assets/authorization-img.png" />
      </div>
    </div>
    <div class="authorization__footer">
      <span class="authoriztion__footer-copyright"
        >© Gitogram from Loftschool</span
      >
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/main-title/main-title";
import CustomButton from '@/components/custom-button/custom-button'
export default {
  name: "Authorization",
  components: {
    MainTitle,
    CustomButton
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    getAuthorization() {
      this.$router.push("/mainpage");
    },
  },
};
</script>

<style lang="css" scoped>
.authorization {
  width: 100%;
  height: calc(100vh);
}
.authorization__main {
  display: flex;
  height: calc(100vh - 83px);
}
.authorization__main-form-wrapper {
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.authorization__main-form {
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 196px;
  align-items: flex-start;
  justify-content: space-between;
}
.authorization__main-form-description {
  display: block;
  width: 100%;
}
.description-text {
  margin: 5px auto;
  width: 100%;
  text-align: left; 
}
.authorization__picture {
  display: flex;
  flex-basis: 50%;
  align-items: center;
  background: url('../../assets/authorization-img.png') no-repeat;
  background-size: 120%;
  background-position-x: -20%;
  background-position-y: 50%;
}
.authorization__picture-img {
  width: 1000px;
  height: auto;
  display: none;
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
.authorization__footer {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 83px;
  border-top: 1px solid #999999;
}
.authoriztion__footer-copyright {
  color: #999999;
}
</style>
