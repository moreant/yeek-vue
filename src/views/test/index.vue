<template>
  <div>
    <p><a :href="url">Login</a></p>
    <a href="javascript:;" @click="test">test</a>
    <br />
    <a href="javascript:;" @click="img">img</a>
    <p>
      参考链接
      https://docs.microsoft.com/zh-cn/previous-versions/office/office-365-api/api/version-2.0/mail-rest-operations#SendMessages
    </p>
    <img ref="img" id="img" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      src: '',
      msClientId: '6a0431fc-7814-484d-bbbc-3253a4641231',
      msClientSecret: 'R6ci/DxhZ0WiIs4zR?yfA==sKTmk1txJ',
      msRedirectUri: encodeURIComponent('http://localhost:8080/#/test/index')
    }
  },
  computed: {
    token () {
      return this.$route.query.access_token
    },
    code () {
      return this.$route.query.code
    },
    url () {
      return (
        `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${this.msClientId}` +
        `&response_type=token` +
        `&redirect_uri=${this.msRedirectUri}` +
        `&scope=openid+` +
        `https%3a%2f%2foutlook.office.com%2fMail.ReadWrite+` +
        `https%3a%2f%2foutlook.office.com%2fmail.send` +
        `&response_mode=fragment` +
        `&nonce=${(Math.random() * 10000) | 0}` +
        `prompt=consent`
      )
    }
  },
  methods: {
    async test () {
      const mesg = new Promise(async (resolve, reject) => {
        axios
          .post(
            'https://outlook.office.com/api/v2.0/me/sendmail',
            {
              Message: {
                Subject: 'Meet for lunch?',
                Body: {
                  ContentType: 'Text',
                  Content: 'The new cafeteria is open.'
                },
                ToRecipients: [
                  {
                    EmailAddress: {
                      Address: 'moreant@foxmail.com'
                    }
                  }
                ]
              },
              SaveToSentItems: 'true'
            },
            {
              headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${this.token}`
              }
            }
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
      const meg = await mesg
      console.log(meg)
    },
    async img () {
      const img = new Promise(async (resolve, reject) => {
        axios
          .get('https://outlook.office.com/api/v2.0/me/photo/$value', {
            headers: {
              Authorization: `Bearer ${this.token}`
            }
          })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
      const value = await img
      this.$refs.img.src = 'https://outlook.office.com/api/v2.0/me/photo/$value'
    }
  }
}
</script>

<style></style>
