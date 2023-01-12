<template>
  <div
    class="relative max-w-screen-xl mx-auto px-5 pt-16 md:pt-24 lg:pt-36 pb-24"
  >
    <div class="absolute right-[12%] -translate-y-20 pointer-events-none">
      <svg
        x-data="{
        initializeAnimation: false,
        init() {
            setTimeout(() =&gt; {
                this.initializeAnimation = true;
            }, 0);
        },
    }"
        :class="initializeAnimation ? 'animate-cube' : ''"
        class="text-red-600 animate-cube"
        width="46"
        height="53"
        viewBox="0 0 46 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m23.102 1 22.1 12.704v25.404M23.101 1l-22.1 12.704v25.404"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
        ></path>
        <path
          d="m45.202 39.105-22.1 12.702L1 39.105"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
        ></path>
        <path
          transform="matrix(.86698 .49834 .00003 1 1 13.699)"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
          d="M0 0h25.491v25.405H0z"
        ></path>
        <path
          transform="matrix(.86698 -.49834 -.00003 1 23.102 26.402)"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
          d="M0 0h25.491v25.405H0z"
        ></path>
        <path
          transform="matrix(.86701 -.49829 .86701 .49829 1 13.702)"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
          d="M0 0h25.491v25.491H0z"
        ></path>
      </svg>
    </div>
    <div class="absolute right-0 bottom-12 pointer-events-none">
      <svg
        x-data="{
        initializeAnimation: false,
        init() {
            setTimeout(() =&gt; {
                this.initializeAnimation = true;
            }, 0);
        },
    }"
        :class="initializeAnimation ? 'animate-cube' : ''"
        class="text-red-600 animate-cube"
        width="46"
        height="53"
        viewBox="0 0 46 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m23.102 1 22.1 12.704v25.404M23.101 1l-22.1 12.704v25.404"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
        ></path>
        <path
          d="m45.202 39.105-22.1 12.702L1 39.105"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
        ></path>
        <path
          transform="matrix(.86698 .49834 .00003 1 1 13.699)"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
          d="M0 0h25.491v25.405H0z"
        ></path>
        <path
          transform="matrix(.86698 -.49834 -.00003 1 23.102 26.402)"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
          d="M0 0h25.491v25.405H0z"
        ></path>
        <path
          transform="matrix(.86701 -.49829 .86701 .49829 1 13.702)"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
          d="M0 0h25.491v25.491H0z"
        ></path>
      </svg>
    </div>
    <div class="absolute -left-6 top-24 pointer-events-none">
      <svg
        x-data="{
        initializeAnimation: false,
        init() {
            setTimeout(() =&gt; {
                this.initializeAnimation = true;
            }, 1500);
        },
    }"
        :class="initializeAnimation ? 'animate-cube' : ''"
        class="text-red-600 animate-cube"
        width="46"
        height="53"
        viewBox="0 0 46 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m23.102 1 22.1 12.704v25.404M23.101 1l-22.1 12.704v25.404"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
        ></path>
        <path
          d="m45.202 39.105-22.1 12.702L1 39.105"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
        ></path>
        <path
          transform="matrix(.86698 .49834 .00003 1 1 13.699)"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
          d="M0 0h25.491v25.405H0z"
        ></path>
        <path
          transform="matrix(.86698 -.49834 -.00003 1 23.102 26.402)"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
          d="M0 0h25.491v25.405H0z"
        ></path>
        <path
          transform="matrix(.86701 -.49829 .86701 .49829 1 13.702)"
          stroke="currentColor"
          stroke-width="1.435"
          stroke-linejoin="bevel"
          d="M0 0h25.491v25.491H0z"
        ></path>
      </svg>
    </div>
    <h2 class="text-4xl font-bold max-w-4xl mx-auto text-center md:text-5xl">
      Core architectural framework for each domain.
    </h2>
    <div
      class="mt-14 relative columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3"
    >
      <blockquote
        class="relative w-full bg-white p-5 border border-gray-200 break-inside-avoid-column"
      >
        <h2 class="text-sm">
          “Microservices architecture will be built in the direction of
          Server‑Side Discovery Pattern.“
        </h2>
        <div class="mt-5 flex items-start gap-4">
          <img
            src="@/assets/icon/banking.png"
            class="w-10 h-10 object-cover object-center"
            alt="Adam Wathan"
          />
          <div class="text-xs">
            <cite class="not-italic">Refer to McKinsey</cite>
            <p class="text-gray-700">
              The architecture of
              <a href="#" target="_blank" class="text-red-500">Banking</a>
            </p>
          </div>
        </div>
      </blockquote>
      <blockquote
        class="relative w-full bg-white p-5 border border-gray-200 break-inside-avoid-column"
      >
        <h2 class="text-sm">
          “The architecture will be built in the direction of the Customer Data
          Platform.“
        </h2>
        <div class="mt-5 flex items-start gap-4">
          <img
            src="@/assets/icon/telco.png"
            class="w-10 h-10 object-cover object-center"
            alt="Aaron Francis"
          />
          <div class="text-xs">
            <cite class="not-italic">Refer to TM4RUM</cite>
            <p class="text-gray-700">
              The architecture of
              <a href="#" target="_blank" class="text-red-500">Telco</a>
            </p>
          </div>
        </div>
      </blockquote>
      <blockquote
        class="relative w-full bg-white p-5 border border-gray-200 break-inside-avoid-column"
      >
        <h2 class="text-sm">
          “Microservices architecture will be built in the direction of
          Client‑Side Discovery Pattern.“
        </h2>
        <div class="mt-5 flex items-start gap-4">
          <img
            src="@/assets/icon/fintech.png"
            class="w-10 h-10 object-cover object-center"
          />
          <div class="text-xs">
            <cite class="not-italic">Refer to Cloud Native</cite>
            <p class="text-gray-700">
              The architecture of
              <a href="#" target="_blank" class="text-red-500">Fintech</a>
            </p>
          </div>
        </div>
      </blockquote>
      <blockquote
        class="relative w-full bg-white p-5 border border-gray-200 break-inside-avoid-column"
      >
        <h2 class="text-sm">
          “Agile and low-code-oriented architecture, prioritizing rapid
          development and deployment.“
        </h2>
        <div class="mt-5 flex items-start gap-4">
          <img
            src="@/assets/icon/startup.png"
            class="w-10 h-10 object-cover object-center"
          />
          <div class="text-xs">
            <cite class="not-italic">Refer to Low-code Engine</cite>
            <p class="text-gray-700">
              The architecture of
              <a href="#" target="_blank" class="text-red-500">StartUP</a>
            </p>
          </div>
        </div>
      </blockquote>
      <blockquote
        class="relative w-full bg-white p-5 border border-gray-200 break-inside-avoid-column"
      >
        <h2 class="text-sm">
          “Architecture geared towards omnichannel response and data-flow.“
        </h2>
        <div class="mt-5 flex items-start gap-4">
          <img
            src="@/assets/icon/ecommerce.png"
            class="w-10 h-10 object-cover object-center"
          />
          <div class="text-xs">
            <cite class="not-italic">Refer to Taobao</cite>
            <p class="text-gray-700">
              The architecture of
              <a href="#" target="_blank" class="text-red-500">e-commerce</a>
            </p>
          </div>
        </div>
      </blockquote>
      <blockquote
        class="relative w-full bg-white p-5 border border-gray-200 break-inside-avoid-column"
      >
        <h2 class="text-sm">
          “Real-time and interactive multimedia-oriented architecture.“
        </h2>
        <div class="mt-5 flex items-start gap-4">
          <img
            src="@/assets/icon/edutech.png"
            class="w-10 h-10 object-cover object-center"
          />
          <div class="text-xs">
            <cite class="not-italic">Confluent IO</cite>
            <p class="text-gray-700">
              The architecture of
              <a href="#" target="_blank" class="text-red-500">Edutech</a>
            </p>
          </div>
        </div>
      </blockquote>
    </div>
  </div>
</template>
