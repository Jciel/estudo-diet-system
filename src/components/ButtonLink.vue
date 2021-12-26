<template>
  <router-link
      :class="status"
      :to="linkTo"
      class="linkTo">
    {{ text }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {PropType} from "vue";

export default defineComponent({
  name: "ButtonLink",

  props: {
    linkTo: {
      type: String as PropType<string>,
      required: true
    },

    text: {
      type: String as PropType<string>,
      required: true
    },

    status: {
      type: String as PropType<string>
    }
  },

  setup(props) {

    return {
      linkTo: props.linkTo,
      text: props.text,
      status: props.status
    }
  }
})
</script>

<style lang="scss" scoped>
 .linkTo {
   padding: 15px 0;
   display: block;
   height: 49px;
   width: 199px;
   background: var(--primary);
   border: 1px solid var(--primary);
   box-sizing: border-box;
   border-radius: 5px;
   text-decoration: none;
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 20px;
   color: #FFFFFF;

   &.disabled {
     background-color: var(--color-disabled);
     border: 1px solid var(--color-disabled);
     color: var(--text-color);
     font-weight: 400;
   }
 }
</style>
