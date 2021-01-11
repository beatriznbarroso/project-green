<template>
  <div class="px-4 md:px-16 lg:px-32 mx-auto font-sans antialiased ">
    <nav class="flex items-center justify-between flex-wrap py-6">
      <div class="flex items-center flex-no-shrink md:mr-6">
        <a>
            <img src="@/assets/media/logo.png" alt="" class="w-10 h-10">
        </a>
      </div>
      <div class="block md:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-bordeaux-400-lighter border-bordeaux-400-light" @click="toggleHamburger">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div :class="openHamburger ? 'block': 'hidden'" class="w-full flex-grow md:flex md:items-center md:w-auto">
        <div class="text-center md:text-right lg:flex-grow">
          <div v-click-outside="hideInvest" class="block text-left md:inline-block md:mt-0 text-bordeaux-400 hover:text-bordeaux-400 mt-4 px-8" @click="toggleInvest">
            Invest
            <svg
              class="inline"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.86664 5.14957C5.04938 5.1319 5.22217 5.05812 5.36132 4.93835L9.09652 1.73675C9.18954 1.66219 9.26663 1.56969 9.32319 1.46475C9.37976 1.35981 9.41465 1.24456 9.4258 1.12587C9.43694 1.00717 9.4241 0.887447 9.38805 0.77381C9.352 0.660173 9.29348 0.554943 9.21596 0.464374C9.13843 0.373805 9.0435 0.299745 8.93678 0.246597C8.83007 0.193448 8.71375 0.162296 8.59476 0.154992C8.47577 0.147687 8.35652 0.164378 8.24411 0.204075C8.13169 0.243771 8.0284 0.305661 7.94038 0.386068L4.78325 3.09299L1.62612 0.386068C1.5381 0.305661 1.43481 0.243771 1.3224 0.204074C1.20998 0.164378 1.09074 0.147686 0.971743 0.154991C0.85275 0.162296 0.736435 0.193448 0.629721 0.246597C0.523006 0.299745 0.428068 0.373805 0.350545 0.464374C0.273021 0.554943 0.2145 0.660173 0.178453 0.77381C0.142406 0.887446 0.129576 1.00717 0.140717 1.12587C0.151859 1.24456 0.186743 1.3598 0.243308 1.46475C0.299873 1.56969 0.37696 1.66219 0.469984 1.73675L4.20518 4.93835C4.29564 5.01611 4.40081 5.07489 4.51444 5.11117C4.62808 5.14746 4.74785 5.16051 4.86664 5.14957Z" fill="#4A2946" />
            </svg>

            <div
              v-show="openInvest"
              class="absolute bg-white rounded-lg shadow-xl -ml-4"
            >
              <a href="#" class="block px-4 py-2 text-bordeaux-600">Open projects</a>
              <a href="#" class="block px-4 py-2 text-bordeaux-600">Simulation</a>
              <a href="#" class="block px-4 py-2 text-bordeaux-600">Funded projects</a>
            </div>
          </div>
            <a>
            </a>
            <a>
            </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script type="text/javascript">
  import ClickOutside from 'vue-click-outside'

  export default {
    directives: {
      ClickOutside
    },
    data () {
      return {
        openHamburger: false,
        openInvest: false
      }
    },
    methods: {
      toggleHamburger () {
        this.openHamburger = !this.openHamburger
      },
      toggleInvest () {
        this.openInvest = !this.openInvest
      },
      hideInvest () {
        this.openInvest = false
      }
    }
  }
</script>
