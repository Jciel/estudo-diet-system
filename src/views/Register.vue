<template>
  <section class="register-page">
    <div class="links">
      <button-link status="disabled" text="Cadastre-se" link-to="/register" />
      <button-link text="Já tenho cadastro" link-to="/login" />
    </div>

    <div class="form-inputs">
      <name-input class="input" placeholder="Seu nome" />

      <phone-input class="input" placeholder="Seu número de celular" />

      <email-input class="input" placeholder="Seu email" />

      <password-input class="input" placeholder="Digite uma senha forte" />

      <password-input class="input" placeholder="Digite a senha novamente" />

      <div class="use-terms">
        <input class="use-terms-input" id="use-terms-input" type="checkbox" />
        <label for="use-terms-input">Declaro que li e concordo com os os <a href="#">termos de uso</a>, e a <a href="#">política deprivacidade</a>.</label>
      </div>
    </div>

    <ButtonAction @click="register" :btn-status="statusRegister" text="Finalizar cadastro" />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonLink from "../components/ButtonLink.vue";
import ButtonAction from "../components/ButtonAction.vue";
import NameInput from "../components/NameInput.vue";
import PhoneInput from "../components/PhoneInput.vue";
import EmailInput from "../components/EmailInput.vue";
import PasswordInput from "../components/PasswordInput.vue";

export default defineComponent({
  name: "Register",

  components: {
    "button-link": ButtonLink,
    "button-action": ButtonAction,
    "name-input": NameInput,
    "phone-input": PhoneInput,
    "email-input": EmailInput,
    "password-input": PasswordInput
  },

  setup(props) {
    const statusRegister = ref('ready')

    const register = () => statusRegister.value = "loading"

    return {
      statusRegister: statusRegister,
      register: register
    }
  }
})
</script>

<style lang="scss" scoped>
  .register-page {
    width: 418px;
    margin: auto;

    .links {
      display: flex;
      justify-content: space-between;
    }

    .form-inputs {
      padding: 32px 0;

      .input {
        margin-bottom: 25px;
      }

      :nth-child(5) {
        margin-bottom: 10px;
      }
    }

    .use-terms {
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
      display: flex;
      align-items: center;

      input {
        width: 18px;
        height: 18px;
        border: 2px solid rgba(119, 119, 119, 0.6);
        margin-left: 6px;
      }

      label {
        a {
          text-decoration: none;
          color: var(--primary);
        }
      }
    }
  }
</style>