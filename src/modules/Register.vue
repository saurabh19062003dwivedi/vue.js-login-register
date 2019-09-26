<template>
  <center>
    <div id="divFrom" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">
      <form class="container">
        <center>
          <h1>Register</h1>
        </center>
        <hr>
        <div>
          <div class="row">
            <label for="inputfname">Username:</label>
            <input  v-model="username" class="form-control" name="username" placeholder="Firstname">
          </div>
          <br>
          <div class="row">
            <br>
            <label for="inputUsername">Email:</label>
            <input class="form-control" v-model="email" name ="email" placeholder="Username">
          </div>
          <br>
          <div class="row">
            <label for="inputPassword">Password:</label>
            <input  v-model="password" class="form-control" name="password" id="inputPassword4" placeholder="Password">
            <span></span>
            <br>
            <br>
          </div>
          <div class="row">
            <label for="inputConPassword">Confirm Password:</label>
            <input
              type="conpassword"
              class="form-control"
              id="inputConPassword"
              placeholder="Password"
            >
            <span></span>
            <br>
            <br>
          </div>
        </div>
        <button
          id="btnSubmit"
          type="submit"
          class="btn btn-primary btn-lg btn-block col-sm-5"
          @click="alertMe()"
        >
          <h4>Register</h4>
        </button>
        <br>
        <p>Already have an account?</p>
        <router-link to="/login">Login</router-link>
        <br>
      </form>
    </div>
  </center>
</template>
<script>
import ROUTER from "router";
export default {
      data() {
    return {
      username: "",
      email: "",
      password: "",
      conpassword: ""
    };
      },
  methods: {
    alertMe(){
        alert("username: " + this.username + "\nemail: " + this.email + "\npassword: " + this.password);
    },
    redirect(router) {
      ROUTER.push(router);
    }
  }
};
</script>