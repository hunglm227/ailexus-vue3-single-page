<script setup lang="ts">
import IconBlogCTO227 from "@/components/icons/IconBlogCTO227.vue";
import IconPodcastCTO227 from "@/components/icons/IconPodcastCTO227.vue";
import IconNewsCTO227 from "@/components/icons/IconNewsCTO227.vue";
import IconForumsCTO227 from "@/components/icons/IconForumsCTO227.vue";
</script>
<template>
  <div class="relative">
    <span
      class="hidden absolute bg-radial-gradient opacity-[.15] pointer-events-none lg:inline-flex left-[-20%] -top-24 w-[640px] h-[640px]"
    ></span>
    <div
      class="relative max-w-screen-xl mx-auto grid gap-12 px-5 pt-16 md:pt-24 pb-24 lg:grid-cols-2 lg:pt-16"
    >
      <div class="flex items-center justify-center lg:justify-start">
        <div class="sm:max-w-xl">
          <h2 class="text-4xl font-bold md:text-5xl">
            A community built for people like you.
          </h2>
          <p class="mt-6 text-gray-700 leading-relaxed">
            AiLexus is for everyone — whether you have been programming for 20
            years or 20 minutes. It's not for weekend work. For those with
            degrees and for those who dropped out to chase their dreams.
            Together, we create amazing things.
          </p>
          <div class="mt-10 grid grid-cols-2 gap-10 md:grid-cols-3">
            <a
              href="https://viblo.asia/newest"
              target="_blank"
              class="inline-flex items-center"
            >
              <IconBlogCTO227></IconBlogCTO227>
              <span class="ml-3 text-sm">Blog</span>
            </a>
            <a
              href="https://mic.gov.vn/mic_2020/Pages/trangchu_2020.aspx"
              target="_blank"
              class="inline-flex items-center"
            >
              <IconForumsCTO227></IconForumsCTO227>
              <span class="ml-3 text-sm">Gov</span>
            </a>
            <a
              href="https://careerbuilder.vn/"
              target="_blank"
              class="inline-flex items-center"
            >
              <svg
                class="text-red-600 w-8 h-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="currentColor" d="M.5.5h31v31H.5z"></path>
                <path
                  d="M25 17.255A23.93 23.93 0 0 1 16 19c-3.183 0-6.22-.62-9-1.745M16 16h.01M20 10V8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h8ZM9 24h14a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="ml-3 text-sm">Jobs</span>
            </a>
            <a href="#" target="_blank" class="inline-flex items-center">
              <IconNewsCTO227></IconNewsCTO227>
              <span class="ml-3 text-sm">Fanpage</span>
            </a>
            <a href="#" target="_blank" class="inline-flex items-center">
              <IconPodcastCTO227></IconPodcastCTO227>
              <span class="ml-3 text-sm">Podcast</span>
            </a>
          </div>
        </div>
      </div>
      <div class="flex justify-center lg:justify-end">
        <div
          class="max-w-sm w-full pt-8 pb-12 px-6 border border-gray-200 -rotate-1 lg:px-12 lg:border-red-600"
        >
          <img
            src="@/assets/cto227/hunglm-avarta-2022.png"
            class="max-w-[218px] w-full mx-auto"
            alt="hunglm227"
          />
          <h3 class="mt-8 font-bold text-red-700 uppercase text-xs">
            Hung, Le Manh (Leonardo)
          </h3>
          <h2 class="mt-3 font-bold text-4xl">Creator</h2>
          <p class="mt-4 text-gray-700 text-sm leading-relaxed">
            Has more than 15 years of experience in software development.
            Concurrently through many positions from Developer, SA, PMO to Chief
            Technology Officer (More than 3 years).
          </p>

          <a
            class="group relative inline-flex border border-red-600 focus:outline-none mt-8"
            href="#"
          >
            <span
              class="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-red-600 text-center font-bold uppercase bg-white ring-1 ring-red-600 ring-offset-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1"
            >
              Donate
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
