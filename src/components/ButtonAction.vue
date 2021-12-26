<template>
  <button class="btn-action" type="button">
    <span v-if="btnStatus === 'ready'">{{ text }}</span>
    <i-eos-icons-loading
        v-if="btnStatus === 'loading'"
        class="icon-btn" />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
  name: "ButtonAction",

  props: {
    text: {
      type: String as PropType<string>,
      required: true
    },

    btnStatus: {
      type: String as PropType<string>,
      required: true
    }
  },

  setup(props) {
    const { btnStatus } = toRefs(props)

    return {
      text: props.text,
      btnStatus: btnStatus
    }
  }
})
</script>

<style lang="scss" scoped>
  .btn-action {
    background: var(--primary);
    border: 1px solid var(--primary);
    box-sizing: border-box;
    border-radius: 5px;
    width: 271px;
    height: 49px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    cursor: pointer;
  }
</style>