<route lang="yaml">
  meta:
    title: Transaction
    icon: currency-dollar
    collection: transaction
  </route>

<script setup lang="ts">
definePage({
  meta: {
    title: 'Transaction',
    icon: 'currency-dollar',
  },
})
//const metaStore = useStore('meta') - dark mode

const financialData = ref<FinancialData>({
  balance: 0,
  totalCreditNotPaid: 0,
  totalDebitNotPaid: 0,
})

async function getTransactions(){
  const { error, result } = await aeria.transaction.balance.GET()
  if (error){
    return
  }
  financialData.value = result
}

onMounted(async () =>{
  await getTransactions()
})

</script>

<template>
  <div
    class="
      tw-grid
      tw-mb-4
      tw-pb-10
      tw-px-8
      tw-rounded-3xl
      tw-bg-gray-100
      tw-border-4
      tw-border-blue-400
    "
  >
    <div
      class="
        tw-grid
        tw-grid-cols-12
        tw-gap-6
      "
    >
      <div
        class="
          tw-col-span-12
          tw-mt-8
        "
      >
        <!-- Título -->
        <div
          class="
            tw-flex
            tw-items-center
            tw-h-10
            tw-intro-y
          "
        >
          <h2
            class="
              tw-mr-5
              tw-text-lg
              tw-font-medium
              tw-truncate
            "
          >
            Resumo Financeiro
          </h2>
        </div>

        <!-- Cartões -->
        <div
          class="
            tw-grid
            tw-grid-cols-1
            tw-mb-4
            tw-gap-6
            tw-mt-5

            lg:tw-grid-cols-3

            sm:tw-grid-cols-2
          "
        >
          <!-- Cartão 1 -->
          <a
            class="
              tw-transform
              tw-transition
              tw-duration-300
              tw-shadow-xl
              tw-rounded-lg
              tw-bg-white

              tw-hover:scale-105
            "
            href="#"
          >
            <div class="tw-p-5">
              <div
                class="
                  tw-flex
                  tw-justify-between
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="
                    tw-h-7
                    tw-w-7
                    tw-text-blue-400
                  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <div
                class="
                  tw-ml-2
                  tw-w-full
                  tw-flex-1
                "
              >
                <div>
                  <div
                    class="
                      tw-mt-3
                      tw-text-3xl
                      tw-font-bold
                      tw-leading-8
                    "
                  >
                    R$ {{ financialData.balance }}
                  </div>
                  <div
                    class="
                      tw-mt-1
                      tw-text-base
                      tw-text-gray-600
                    "
                  >
                    Saldo
                  </div>
                </div>
              </div>
            </div>
          </a>

          <!-- Cartão 2 -->
          <a
            class="
              tw-transform
              tw-transition
              tw-duration-300
              tw-shadow-xl
              tw-rounded-lg
              tw-bg-white

              tw-hover:scale-105
            "
            href="#"
          >
            <div class="tw-p-5">
              <div
                class="
                  tw-flex
                  tw-justify-between
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="
                    tw-h-7
                    tw-w-7
                    tw-text-yellow-400
                  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div
                class="
                  tw-ml-2
                  tw-w-full
                  tw-flex-1
                "
              >
                <div>
                  <div
                    class="
                      tw-mt-3
                      tw-text-3xl
                      tw-font-bold
                      tw-leading-8
                    "
                  >
                    R$ {{ financialData.totalDebitNotPaid }}
                  </div>
                  <div
                    class="
                      tw-mt-1
                      tw-text-base
                      tw-text-gray-600
                    "
                  >
                    A pagar
                  </div>
                </div>
              </div>
            </div>
          </a>
          <!-- cartão 3 -->
          <a
            class="
              tw-transform
              tw-transition
              tw-duration-300
              tw-shadow-xl
              tw-rounded-lg
              tw-bg-white

              tw-hover:scale-105
            "
            href="#"
          >
            <div class="tw-p-5">
              <div
                class="
                  tw-flex
                  tw-justify-between
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="
                    tw-h-6
                    tw-w-6
                    tw-text-red-400
                  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <div
                class="
                  tw-ml-2
                  tw-w-full
                  tw-flex-1
                "
              >
                <div>
                  <div
                    class="
                      tw-mt-3
                      tw-text-3xl
                      tw-font-bold
                      tw-leading-8
                    "
                  >
                    R$ {{ financialData.totalCreditNotPaid }}
                  </div>
                  <div
                    class="
                      tw-mt-1
                      tw-text-base
                      tw-text-gray-600
                    "
                  >
                    A receber
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <aeria-crud
      collection="transaction"
      class="
        tw-m-4
        tw-space-y-4
      "
    >
      <!-- Adiciona botões personalizados acima da tabela -->
      <template #actions />
    </aeria-crud>
  </div>
</template>

<style scoped>

.financial-summary {
  background-color: #f1f1f1;
  padding: 10rem;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.financial-summary.dark-mode{
  background-color: #121212;
  color: #e0e0e0;
}

.financial-summary p {
  margin: 0.2rem 0;
}
</style>
