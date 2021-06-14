<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-electron-sample
      </h1>
      <div class="links">
        <button
          class="button--green"
          @click="send"
        >
          Send To Main
        </button>
        <button
          class="button--green"
          @click="send2"
        >
          Send To Main 2
        </button>
        <button
          class="button--green"
          @click="$router.push('/next')"
        >
          Jump to Next Page
        </button>
        <button
          class="button--green"
          @click="$router.push('/detail/1')"
        >
          Jump to Detail Page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    // IPC通信(main -> renderer)
    window.api.recieveFromMain((args) => {
      console.log(args)
    })
  },
  methods: {
    async send () {
      // IPC通信(renderer -> main -> renderer)
      const result = await window.api.sendToMainWithResponse('1')
      console.log('response from main', result)
    },

    send2 () {
      // IPC通信(renderer -> main)
      window.api.sendToMain('Hello World!')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
