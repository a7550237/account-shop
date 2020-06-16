<template>
  <div>
    <NavBar class="profile">
      <div slot="center">设置</div>
    </NavBar>
    <div class="login_form">
      <el-form :rules="rules" :model="loginForm" ref="loginForm">
        <el-form-item prop="username" label="账号"  label-width="80px">
          <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password"  label="密码" label-width="80px">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button @click="submit" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="header" v-show="false">
      <div style="height:50px"></div>
      <el-avatar
        size="medium"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
      <div style="height:10px"></div>
    </div>
  </div>
</template>
<script>
import NavBar from "../../components/common/NavBar";
export default {
  data() {
    return {
      loginForm: {
        username: "456",
        password: "789"
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: ["blur"] }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    submit() {
      document.el-alert('denglu')
    }
  },
  components: {
    NavBar
  }
};
</script>
<style  scoped>
.header {
  text-align: center;
  background: chartreuse;
}
.profile {
  background: pink;
  color: white;
}
.login_form {
  margin-left: 15%;
  margin-right: 15%;
}
</style>