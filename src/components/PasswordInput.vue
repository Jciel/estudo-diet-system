<template>
  <div class="password-input-container">
    <i-uil-padlock
        class="icon-input" />

    <input
        @input="$emit('update:modelValue')"
        class="input"
        :type="inputType"
        :placeholder="placeholder" />

    <i-eva-eye-outline
        v-if="inputType !== 'text'"
        class="icon-input"
        @click="togglePasswordVisibility" />

    <i-eva-eye-off-outline
        v-if="inputType === 'text'"
        class="icon-input"
        @click="togglePasswordVisibility" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";

export default defineComponent({
  name: "PasswordInput",

  components: {
  },

  props: {
    placeholder: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const inputType = ref('password')


    const togglePasswordVisibility = () => inputType.value = inputType.value === 'password' ? 'text' : 'password'


    return {
      placeholder: props.placeholder,
      inputType: inputType,
      togglePasswordVisibility: togglePasswordVisibility
    }
  }
});
</script>

<style lang="scss" scoped>
  .password-input-container {
    display: flex;
    align-items: center;
    position: relative;

    .input {
      width: 100%;
      border: 1px solid rgba(119, 119, 119, 0.3);
      box-sizing: border-box;
      border-radius: 5px;
      outline: none;
      height: 49px;
      padding: 20px 49px 13px 54px;
      font-size: 14px;
      line-height: 17px;
      font-style: normal;
      font-weight: normal;

      &:focus {
        border: 1px solid var(--primary);
      }
    }

    .icon-input {
      position: absolute;
      font-size: 1.3em;
      color: rgba(119, 119, 119, 0.6);

      &:first-child {
        margin-left: 19px;
      }

      &:last-child {
        right: 21px;
        color: #4ECB71;
        cursor: pointer;
      }
    }
  }
</style>