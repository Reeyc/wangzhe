<template>
  <el-row>
    <el-col :span="6" :xs="20" :sm="14" :md="6">
      <el-card>
        <div>
          <el-form>
            <h2>登录后台管理系统</h2>
            <el-form-item>
              <el-input prefix-icon="el-icon-user" v-model="user" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input prefix-icon="el-icon-lock" v-model="pass" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      user: "admin",
      pass: "admin"
    };
  },
  methods: {
    login() {
      this.$router.push(`/admin`);
    }
  }
};
</script>

<style lang="stylus" scoped>
.el-row
  display: flex
  justify-content: center
  align-items: center
  height: 100%
  background-color: #006666
  h2
    text-align: center
    margin: 20px 0
    font-size: 25px
  .el-button
    width: 100%
</style>
