<template>
  <v-app>
    <v-layout 
      row 
      wrap 
      justify-center>
      <v-flex 
        xs12 
        sm10 
        md8 
        ld6 
        xl4>
        <v-form>
          <h2>Anmeldung mit E-mail und Passwort</h2>
          <br>
          <v-text-field 
            v-model="email" 
            label="E-mail Adresse" 
            required />
          <v-text-field 
            v-model="password" 
            type="password" 
            label="Passwort" 
            required />
          <br>
          <v-btn 
            block 
            color="info" 
            @click="Login()">Anmeldung</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase";

@Component
export default class Login extends Vue {
  private email: string;
  private password: string;

  constructor() {
    super();
    this.email = "biszembaszom1111@gmail.com";
    this.password = "Abc123";
  }

  private Login() {
    firebase
      .auth() // Bejelentkezés
      .signInWithEmailAndPassword(this.email, this.password)
      .then(
        success => {
          // alert("Successful login!");
          const user = firebase.auth().currentUser;
          if (user) {
            if (user.emailVerified) {
              // Átírányítás: ha megerősített akkor a demo oldalra
              this.$router.replace("demo");
            } else {
              // Ha nem megerősített a megerősítő e-mail újraküldés oldalára
              this.$router.replace("verify");
            }
          }
        },
        err => {
          alert("Oops. " + err.message);
        }
      );
  }
}
</script>

<style scoped>
v-text-field {
  max-width: 200px;
}
h2 {
  margin-top: 20px;
}
</style>
