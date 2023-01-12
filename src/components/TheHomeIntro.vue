<script setup lang="ts">
import IconBoxLaravel from "@/components/icons/IconBoxLaravel.vue";
</script>
<template>
  <div>
    <section
      class="relative overflow-hidden pt-48 pb-20 lg:pt-48 xl:pt-56 xl:pb-28"
    >
      <span
        class="hidden absolute bg-radial-gradient opacity-[.15] pointer-events-none lg:inline-flex left-[-20%] -top-24 w-[640px] h-[640px]"
      ></span>
      <div class="relative max-w-screen-xl px-5 mx-auto">
        <div
          class="absolute -left-2 -translate-y-12 pointer-events-none md:left-[12%]"
        >
          <IconBoxLaravel></IconBoxLaravel>
        </div>
        <div
          class="absolute -right-2 -translate-y-20 pointer-events-none md:right-1/4"
        >
          <IconBoxLaravel></IconBoxLaravel>
        </div>
        <div
          class="absolute bottom-0 right-6 -translate-y-20 pointer-events-none md:right-[12%]"
        >
          <IconBoxLaravel></IconBoxLaravel>
        </div>
        <div class="relative">
          <h1
            class="max-w-3xl mx-auto text-5xl font-bold text-center md:text-6xl lg:text-7xl"
          >
            The AiLexus platform <br class="hidden lg:inline" /><span
              class="text-red-500"
              >for Enterprise</span
            >
          </h1>
          <p
            class="mt-6 max-w-xl mx-auto text-center text-gray-700 text-md leading-relaxed md:mt-8 md:text-lg lg:mt-10"
          >
            AiLexus is a low-code platform based on BPM. Microservices
            architecture based on event-driven-design and domain-driven-design.
            Core service is Spring-boot and Kafka-native.
          </p>
          <div
            class="mt-6 max-w-sm mx-auto flex flex-col justify-center items-center gap-4 sm:flex-row md:mt-8 lg:mt-10"
          >
            <a
              class="group relative inline-flex border border-red-500 focus:outline-none w-full sm:w-auto"
              href="#"
            >
              <span
                class="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-white text-center font-bold uppercase bg-red-500 ring-1 ring-red-500 ring-offset-1 ring-offset-red-500 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1"
              >
                Get Started
              </span>
            </a>
            <a
              class="group relative inline-flex border border-red-600 focus:outline-none w-full sm:w-auto"
              href="#"
              target="_blank"
            >
              <span
                class="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-red-600 text-center font-bold uppercase bg-white ring-1 ring-red-600 ring-offset-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1"
              >
                Watch Now
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
