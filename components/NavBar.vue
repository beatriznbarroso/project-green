<template>
  <div class="px-4 md:px-8 lg:px-16 mx-auto sticky bg-grey-100">
    <nav class="flex items-center justify-between flex-wrap py-6">
      <div class="flex items-center flex-no-shrink md:mr-6">
        <a>
          <img src="@/assets/media/logo.png" alt="Project Green Logo" class="w-16 h-16">
        </a>
      </div>
      <div class="block md:hidden">
        <button class="flex items-center px-3 py-2 border-transparent rounded outline-none" @click="toggleHamburger">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div :class="openHamburger ? 'block': 'hidden'" class="w-full flex flex-col md:flex md:flex-row items-center md:w-auto">
        <a class="md:mx-2">
          Why Micro Greens?
        </a>
        <a class="md:mx-2">
          About Us
        </a>
        <a class="md:mx-2 border-b-4 border-green">
          Order Now
        </a>
      </div>
    </nav>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        openHamburger: false      }
    },
    methods: {
      toggleHamburger () {
        this.openHamburger = !this.openHamburger
      }
    }
  }
</script>
