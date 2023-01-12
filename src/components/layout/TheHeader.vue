<script setup lang="ts">
//import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
const isOpen = ref(false);
import TheNotification from "@/components/layout/TheNotification.vue";
import Iconshrink from "@/components/icons/Iconshrink.vue";
import LogoRedis from "@/components/icons/logo/LogoRedis.vue";
import LogoKeyCloak from "@/components/icons/logo/LogoKeyCloak.vue";
import LogoAPISIX from "@/components/icons/logo/LogoAPISIX.vue";
import LogoAiLexusImg from "@/components/icons/logo/LogoAiLexusImg.vue";
import LogoAiLexusLbl from "@/components/icons/logo/LogoAiLexusLbl.vue";
import LogoKafka from "@/components/icons/logo/LogoKafka.vue";
import LogoOAuth2 from "@/components/icons/logo/LogoOAuth2.vue";
import IconDatabaseEcosys from "@/components/icons/IconDatabaseEcosys.vue";
import IconRegistryCenterEcosys from "@/components/icons/IconRegistryCenterEcosys.vue";
import IconAppPerfomanceManagementEcosy from "@/components/icons/IconAppPerfomanceManagementEcosy.vue";
import IconLogEcosys from "@/components/icons/IconLogEcosys.vue";
</script>
<template>
  <div class="absolute top-0 w-full">
    <header class="relative z-50 text-gray-700">
      <TheNotification
        msg="Deploy Ailexus with On-premises and Cloud using Kubernate K8S."
      ></TheNotification>
      <div
        class="relative max-w-screen-2xl mx-auto w-full py-4 bg-white transition duration-200 lg:bg-transparent lg:py-6"
      >
        <div
          class="max-w-screen-xl mx-auto px-5 flex items-center justify-between"
        >
          <div class="flex-1">
            <a href="" class="inline-flex items-center">
              <LogoAiLexusImg></LogoAiLexusImg>
              <LogoAiLexusLbl></LogoAiLexusLbl>
            </a>
          </div>
          <ul
            class="relative hidden lg:flex lg:items-center lg:justify-center lg:gap-6 xl:gap-10"
          >
            <li><a href="#">Microservices</a></li>
            <li><a href="#">DevSecOps</a></li>
            <li class="relative">
              <button
                @click="isOpen = !isOpen"
                class="flex items-center justify-center"
              >
                Ecosystem <Iconshrink></Iconshrink>
              </button>
              <div
                v-if="isOpen"
                class="absolute left-28 z-20 transition transform -translate-x-1/2"
              >
                <div
                  class="mt-4 w-224 p-8 bg-white shadow-lg transform transition-transform origin-top"
                >
                  <ul class="grid gap-6 relative sm:grid-cols-2 md:grid-cols-3">
                    <li>
                      <a href="#" class="flex">
                        <div
                          class="relative shrink-0 w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden"
                        >
                          <span
                            class="absolute inset-0 w-full h-full bg-gradient-to-b from-[rgba(255,255,255,.2)] to-[rgba(255,255,255,0)]"
                          ></span>
                          <LogoAPISIX></LogoAPISIX>
                        </div>
                        <div class="ml-4 leading-5">
                          <div class="text-gray-900">AiLexusGate</div>
                          <span class="text-gray-700 text-xs"
                            >This is a dynamic, real-time, high-performance API
                            Gateway.</span
                          >
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="flex">
                        <div
                          class="relative shrink-0 w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden"
                        >
                          <span
                            class="absolute inset-0 w-full h-full bg-gradient-to-b from-[rgba(255,255,255,.2)] to-[rgba(255,255,255,0)]"
                          ></span>
                          <LogoKeyCloak></LogoKeyCloak>
                        </div>
                        <div class="ml-4 leading-5">
                          <div class="text-gray-900">Keycloak</div>
                          <span class="text-gray-700 text-xs"
                            >Identity and Access Management, and SSO
                            system.</span
                          >
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="flex">
                        <div
                          class="relative shrink-0 w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden"
                        >
                          <span
                            class="absolute inset-0 w-full h-full bg-gradient-to-b from-[rgba(255,255,255,.2)] to-[rgba(255,255,255,0)]"
                          ></span>
                          <LogoOAuth2></LogoOAuth2>
                        </div>
                        <div class="ml-4 leading-5">
                          <div class="text-gray-900">OAuth 2.0</div>
                          <span class="text-gray-700 text-xs"
                            >This is the industry-standard protocol for
                            authorization.</span
                          >
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="flex">
                        <div
                          class="relative shrink-0 w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden"
                        >
                          <span
                            class="absolute inset-0 w-full h-full bg-gradient-to-b from-[rgba(255,255,255,.2)] to-[rgba(255,255,255,0)]"
                          ></span>
                          <LogoRedis></LogoRedis>
                        </div>
                        <div class="ml-4 leading-5">
                          <div class="text-gray-900">Redis</div>
                          <span class="text-gray-700 text-xs"
                            >This is Caching system, which is a fast, in-memory,
                            key-value data store.</span
                          >
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="flex">
                        <div
                          class="relative shrink-0 w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden"
                        >
                          <span
                            class="absolute inset-0 w-full h-full bg-gradient-to-b from-[rgba(255,255,255,.2)] to-[rgba(255,255,255,0)]"
                          ></span>
                          <LogoKafka></LogoKafka>
                        </div>
                        <div class="ml-4 leading-5">
                          <div class="text-gray-900">Kafka native</div>
                          <span class="text-gray-700 text-xs"
                            >This is a solution for
                            <strong>event-driven</strong> microservices that
                            enable
                            <strong>real-time</strong> communication.</span
                          >
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="flex">
                        <div
                          class="relative shrink-0 w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden"
                        >
                          <span
                            class="absolute inset-0 w-full h-full bg-gradient-to-b from-[rgba(255,255,255,.2)] to-[rgba(255,255,255,0)]"
                          ></span>
                          <IconDatabaseEcosys></IconDatabaseEcosys>
                        </div>
                        <div class="ml-4 leading-5">
                          <div class="text-gray-900">Datasource</div>
                          <span class="text-gray-700 text-xs"
                            >Includes SQL, NoSQL, Datafile, and structured
                            distributed datasets.</span
                          >
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="flex">
                        <div
                          class="relative shrink-0 w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden"
                        >
                          <span
                            class="absolute inset-0 w-full h-full bg-gradient-to-b from-[rgba(255,255,255,.2)] to-[rgba(255,255,255,0)]"
                          ></span>
                          <IconRegistryCenterEcosys></IconRegistryCenterEcosys>
                        </div>
                        <div class="ml-4 leading-5">
                          <div class="text-gray-900">Registry Center</div>
                          <span class="text-gray-700 text-xs"
                            >This is a dynamic service discovery, configuration,
                            and service management platform.</span
                          >
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="flex">
                        <div
                          class="relative shrink-0 w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden"
                        >
                          <span
                            class="absolute inset-0 w-full h-full bg-gradient-to-b from-[rgba(255,255,255,.2)] to-[rgba(255,255,255,0)]"
                          ></span>
                          <IconAppPerfomanceManagementEcosy></IconAppPerfomanceManagementEcosy>
                        </div>
                        <div class="ml-4 leading-5">
                          <div class="text-gray-900">SkyWalking</div>
                          <span class="text-gray-700 text-xs"
                            >Application performance monitor tool for
                            distributed systems, specially designed for
                            microservices based on K8S.</span
                          >
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="flex">
                        <div
                          class="relative shrink-0 w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden"
                        >
                          <span
                            class="absolute inset-0 w-full h-full bg-gradient-to-b from-[rgba(255,255,255,.2)] to-[rgba(255,255,255,0)]"
                          ></span>
                          <IconLogEcosys></IconLogEcosys>
                        </div>
                        <div class="ml-4 leading-5">
                          <div class="text-gray-900">EFK Stack</div>
                          <span class="text-gray-700 text-xs"
                            >EFK stands for Elasticsearch, Fluentd, and Kibana.
                            Application for log streaming, log analysis, and log
                            monitoring.</span
                          >
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li><a href="#">Agile Scrum</a></li>
            <li><a href="#">Data Flow</a></li>
          </ul>
          <div class="flex-1 flex items-center justify-end">
            <a
              class="group relative inline-flex border border-red-600 focus:outline-none hidden lg:ml-4 lg:inline-flex"
              href="#"
            >
              <span
                class="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-red-600 text-center font-bold uppercase bg-white ring-1 ring-red-600 ring-offset-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1"
              >
                Documentation
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
