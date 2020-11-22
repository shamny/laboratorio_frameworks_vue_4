<template>
  <div>
  <login-page v-bind="{ login, updateLogin, loginRequest, loginError }" />
  <error-snack-bar v-bind="{ dataSnackBar , closeSnackBar, openSnackBar}"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { loginRequest } from "../../rest-api/api/login";
import { baseRoutes } from "../../router";
import LoginPage from "./Page.vue";
import { createEmptyLogin, Login, createEmptyLoginError } from "./viewModel";
import { mapLoginVMToModel } from "./mapper";
import { validation } from "./validations";
import { ErrorSnackBar } from "../../common/snackbars";

export default Vue.extend({
  name: "PageLoginContainer",
  components: { LoginPage,ErrorSnackBar },
  data() {
    return {
      login: createEmptyLogin(),
      loginError: createEmptyLoginError(),
      dataSnackBar:{ 
        errorText: "",
        isVisible:false},
    };
  },
  methods: {
    updateLogin(field: string, value: string) {
      this.login = {
        ...this.login,
        [field]: value
      };

      validation.validateField(field, value).then(result => {
        this.loginError = {
          ...this.loginError,
          [field]: result
        };
      });
    },
    loginRequest() {
      validation.validateForm(this.login).then(result => {
        if (result.succeeded) {

          const loginModel = mapLoginVMToModel(this.login);
          loginRequest(loginModel)
            .then(() => {
              this.$router.push(baseRoutes.recipe);
            })
            .catch(error =>{
              this.openSnackBar(error);
          //    this.dataSnackBar.errorText = error;
          //    this.dataSnackBar.isVisible = true;
            }
            );


        } else {
          this.loginError = {
            ...this.loginError,
            ...result.fieldErrors,
          };
        }
      });
    },
    closeSnackBar(){
      this.dataSnackBar.isVisible=false;
      this.dataSnackBar.errorText ="";
    },
    openSnackBar(error:string){
      this.dataSnackBar.isVisible=true;
      this.dataSnackBar.errorText = error;
    }
  }
});
</script>
