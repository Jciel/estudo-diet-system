<template>
  <section class="new-password-page">
    <div class="text">Crie uma nova senha</div>
    
    <password-input class="new-password" placeholder="Digite a sua nova senha" />
    <password-input class="confirm-new-password" placeholder="Confirme sua nova senha" />

    <button-action class="btn-update-password" @click="alterPassword" :btn-status="newPasswordStatus" text="Alterar senha" />
  </section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import PasswordInput from "../components/PasswordInput.vue";
import ButtonAction from "../components/ButtonAction.vue";

export default defineComponent({
  name: "NewPassword",
  
  components: {
    "password-input": PasswordInput,
    "button-action": ButtonAction
  },

  setup() {
    const newPasswordStatus = ref('ready')

    const alterPassword = () => newPasswordStatus.value = 'loading'

    return {
      alterPassword: alterPassword,
      newPasswordStatus: newPasswordStatus
    }
  }
})
</script>

<style lang="scss" scoped>
  .new-password-page {
    display: flex;
    flex-direction: column;
    width: 418px;
    margin: auto;

    .text {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      align-self: start;
      margin-bottom: 34px;
      color: var(--text-color);
    }

    .new-password {
      margin-bottom: 13px;
    }

    .confirm-new-password {
      margin-bottom: 32px;
    }

    .btn-update-password {
      align-self: center;
    }
  }
</style>