<template>
  <section class="recover-password-page">
    <div class="text">
      <strong>Digite seu e-mail de cadastro</strong>
      Você receberá, em seu e-mail, o link para redefenir a sua senha
    </div>

    <email-input class="email-input" placeholder="Digite seu email cadastrado"></email-input>

    <div class="links">
      <button-link status="disabled" text="Voltar" link-to="/login" />
      <button-action @click="recoverPassword" :btn-status="recoverStatus" text="Enviar" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import EmailInput from "../components/EmailInput.vue";
import ButtonLink from "../components/ButtonLink.vue";
import ButtonAction from "../components/ButtonAction.vue";

export default defineComponent({
  name: "RecoverPassword",

  components: {
    "email-input": EmailInput,
    "button-link": ButtonLink,
    "button-action": ButtonAction
  },

  setup (props) {

    const recoverStatus = ref('ready')

    const recoverPassword = () => {
      recoverStatus.value = "loading"
    }

    return {
      recoverStatus: recoverStatus,
      recoverPassword: recoverPassword
    }
  }
})
</script>

<style lang="scss" scoped>
  .recover-password-page {
    display: flex;
    flex-direction: column;
    width: 418px;
    margin: auto;

    .text {
      text-align: center;
      margin-bottom: 25px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;

      strong {
        width: 100%;
        display: block;
        margin-bottom: 25px;
      }
    }

    .email-input {
      margin-bottom: 25px;
    }

    .links {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>