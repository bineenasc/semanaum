<script setup lang="ts">
definePage({
  meta: {
    title: 'Dashboard',
    icon: 'gauge',
  },
})
function goTo(){
  window.open('http://localhost:8080/search')
}

</script>

<template>
  <div
    class="
      tw-grid
      tw-gap-4
      tw-pb-4
      tw-px-10
      tw-rounded-3xl
    "
  >
    <div
      class="
        tw-grid
        tw-grid-cols-2
        tw-gap-1
      "
    >
      <div
        class="
          tw-col-span-12
          tw-mt-8
        "
      >

        <!-- Cartões -->
        <div
          class="
            tw-grid
            tw-grid-cols-2
            tw-gap-6

            lg:tw-grid-cols-2

            sm:tw-grid-cols-2
          "
        >
          <!-- Cartão 1 -->
          <a
            class="
              tw-transform
              tw-transition
              tw-flex
              tw-items-center
            "
          >
            <div>
              <div
                class="
                  tw-flex
                  tw-justify-between
                "
              />
              <div
                class="
                  tw-ml-2
                  tw-w-full
                  tw-flex-1
                "
              >
                <div class="">
                  <div
                    class="
                      tw-text-5xl
                      tw-font-bold
                      tw-leading-11
                    "
                  >Pamper your pet <br> with expert care</div>
                  <div
                    class="
                      tw-mt-5
                      tw-text-base
                    "
                  >Veja os chekins do seu pet pelo botão "search" abaixo.</div>
                </div>
                <aeria-button type="button" @click="goTo()" class="tw-mt-5">Search</aeria-button>
              </div>
            </div>
          </a>

          <!-- Cartão 2 -->
          <a
            class="
              tw-transform
              tw-transition
              tw-flex
              tw-items-center
            "
          >
            <div>
              <div class="tw-flex" />
              <div
                class="
                  tw-ml-8
                  tw-w-full
                  tw-flex-1
                "
              >
                <div class="" />
                <!-- Imagem -->
                <img
                  class="
                    tw-relative
                    tw-rounded-full
                    tw-bg-blue-500
                    tw-shadow-lg
                    tw-shadow-blue-500/80
                    tw-size-full
                  "
                  src="../../../static/dogs.png"
                  alt="Happy Dog"
                >
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

<!-- <section class="tw-bg-blue-100 tw-py-16 tw-px-6 tw-grid tw-grid-cols-2 tw-grid-rows-1">
  <div class="tw-max-w-7xl tw-mx-auto tw-flex tw-flex-col tw-lg:flex-row tw-items-center tw-gap-8">
    <div class="tw-text-center tw-lg:text-left tw-flex-1">
      <h1 class="tw-text-blue-800 tw-text-4xl tw-lg:text-5xl tw-font-bold tw-tracking-tight">
        Pamper your pet <br /> with expert care
      </h1>
      <p class="tw-text-blue-700 tw-mt-6 tw-text-lg tw-lg:text-xl tw-font-medium">
        At our state-of-the-art facilities, we provide the best grooming services to keep your pets happy and healthy.
      </p>
      <div class="tw-mt-8">
        <button class="tw-bg-blue-700 tw-text-white tw-font-semibold tw-py-3 tw-px-6 tw-rounded-lg tw-shadow-lg tw-hover:bg-blue-800">
          Book appointment
        </button>
      </div>
    </div>

    <div class="tw-flex-1 tw-flex tw-justify-center">
      <div class="tw-relative tw-w-full tw-max-w-lg">
        <div class="tw-absolute tw-inset-0 tw-bg-blue-300 tw-rounded-full tw-transform tw-translate-x-6 tw-translate-y-6"></div>
        <img
          class="tw-relative tw-rounded-full tw-shadow-lg"
          src="../../../static/dog.png"
          alt="Happy Dog"
        />
      </div>
    </div>
  </div>
</section> -->
</template>

