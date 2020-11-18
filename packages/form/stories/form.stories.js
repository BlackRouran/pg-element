import PgForm from '../'
import PgButton from '../../button'
import PgInput from '../../input'
import PgFormItem from '../../fromitem'


export  default {
    title: 'PgForm',
    component: {
        PgForm
    }
}

export const Login = () => ({
    components: { PgForm, PgButton, PgInput, PgFormItem },
    template: `
        <pg-form class="form" ref="form" :model="user" :rules="rules">
        <pg-form-item label="用户名" prop="username">
        <!-- <pg-input v-model="user.username"></pg-input> -->
        <pg-input :value="user.username" @input="user.username=$event" type="text" placeholder="请输入用户名"></pg-input>
        </pg-form-item>
        <pg-form-item label="密码" prop="password">
        <pg-input type="password" v-model="user.password"></pg-input>
        </pg-form-item>
        <pg-form-item>
        <pg-button type="primary" @click="login">登 录</pg-button>
        </pg-form-item>
    </pg-form>
    `,
    data () {
        return {
          user: {
            username: '',
            password: ''
          },
          rules: {
            username: [
              {
                required: true,
                message: '请输入用户名'
              }
            ],
            password: [
              {
                required: true,
                message: '请输入密码'
              },
              {
                min: 6,
                max: 12,
                message: '请输入6-12位密码'
              }
            ]
          }
        }
      },
      methods: {
        login () {
          
          this.$refs.form.validate(valid => {
            if (valid) {
              alert('验证成功')
            } else {
              alert('验证失败')
              return false
            }
          })
        }
      }
})  