<template>
  <div class="custom-button">
    <button 
    class="custom-button__btn"
    :class="{'custom-button__btn-big': isBig, 'custom-button__btn-small': !isBig}"
    >
      {{ text }}
      <!-- <img v-if="imageSrc" /> -->
    </button>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  components: {},
  props: {
    text: {
      type: String,
      default: "Git-Button",
    },
    // imageSrc: {
    //   type: String,
    // },
    isBig: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.custom-button {
  display: flex;
  justify-content: center;
}
.custom-button__btn {
  background: #31ae54;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 44px;
  /* padding: 11px 109px; */
  font-weight: bold;
  /* margin: 0 auto; */
}
.custom-button__btn-big {
  flex-basis: 256px;
  padding: 11px 109px;
}
.custom-button__btn-small {
  flex-basis: 115px;
  padding: 10px 20px;
}
</style>
