<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/data">Data</router-link>
  <router-link to="/login">Login</router-link>
  <KeepAlive>
    <router-view />
  </KeepAlive>
  <input type="button" value="登入" @click="login" />
  <input type="button" value="登出" @click="logout" />
</template>

<script>
export default {
  methods: {
    login() {
      FB.login(function (res) {
        console.log(res);
        if (res.status === "connected") {
          FB.api("/me", function (res) {
            console.log(res);
            console.log("你好!" + res.name);
          });
        } else {
          console.log("尚未登入");
        }
      });
    },
    logout() {
      FB.logout(function (res) {
        console.log(res);
      });
    },
  },
  mounted() {
    window.fbAsyncInit = function () {
      FB.init({
        appId: "1622377004832700",
        cookie: true,
        xfbml: true,
        version: "v16.0",
      });

      FB.AppEvents.logPageView();
    };

    FB.getLoginStatus(function (res) {
      console.log(res);
    });

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
  background-color: brown;
  padding: 5px 8px;
  border-radius: 3px;
  margin-right: 5px;
}

a.router-link-active {
  background-color: pink;
}

.g_id_signin {
  width: 100px;
  height: 100px;
  background-color: pink;
}

.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>