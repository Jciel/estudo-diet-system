<template>
  <div class="name-input-container">
    <i-bi-person
        class="icon-input" />

    <input
        @input="$emit('update:modelValue')"
        class="input"
        type="text"
        :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "NameInput",

  props: {
    placeholder: {
      type: String as PropType<string>,
      required: true
    }
  },

  setup(props) {

    return {
      placeholder: props.placeholder
    }
  }
})
</script>

<style lang="scss" scoped>
  .name-input-container {
    display: flex;
    align-items: center;

    .input {
      width: 100%;
      border: 1px solid rgba(119, 119, 119, 0.3);
      box-sizing: border-box;
      border-radius: 5px;
      outline: none;
      height: 49px;
      padding: 20px 0 13px 54px;
      font-size: 14px;
      line-height: 17px;
      font-style: normal;
      font-weight: normal;
      color: #777777;

      &:focus {
        border: 1px solid var(--primary);
      }
    }

    .icon-input {
      margin-left: 19px;
      position: absolute;
      font-size: 1.3em;
      color: rgba(119, 119, 119, 0.6);
    }
  }
</style>