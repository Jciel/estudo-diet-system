<template>
  <section class="login-page-container">
    <div class="content-container">
      <div class="links">
        <button-link text="Cadastre-se" link-to="/register" />
        <button-link status="disabled" text="Já tenho cadastro" link-to="/login" />
      </div>

      <email-input class="email-input" placeholder="admin@dietsystem.com" />
      <password-input class="password-input" placeholder="Digite sua senha" />

      <router-link class="recover-password-link" to="/recover-password">Esqueci minha senha</router-link>

      <button-action @click="btnLogin" class="button-enter" :btn-status="loginStatus" text="Entrar" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";
import ButtonLink from "../components/ButtonLink.vue";
import EmailInput from "../components/EmailInput.vue";
import PasswordInput from "../components/PasswordInput.vue";
import ButtonAction from "../components/ButtonAction.vue";

export default defineComponent({
  name: "Login",

  components: {
    "button-link": ButtonLink,
    "email-input": EmailInput,
    "password-input": PasswordInput,
    "button-action": ButtonAction
  },

  setup() {
    const loginStatus = ref('ready')

    const btnLogin = () => {
      loginStatus.value = 'loading'
    }

    return {
      btnLogin: btnLogin,
      loginStatus: loginStatus
    }
  }
})
</script>

<style lang="scss" scoped>
  .login-page-container {
    display: flex;
    justify-content: center;

    .content-container {
      width: 418px;
      display: flex;
      flex-direction: column;

      .links {
        display: flex;
        flex-direction: row;
        margin-bottom: 33px;
        justify-content: space-between;
      }

      .email-input {
        margin-bottom: 33px;
      }

      .password-input {
        margin-bottom: 10px;
      }

      .recover-password-link {
        margin-bottom: 21px;
        align-self: end;
        text-decoration: none;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: var(--primary);
      }

      .button-enter {
        align-self: center;
      }
    }
  }
</style>