<script setup lang="ts">
import TheHomeIntro from "../components/TheHomeIntro.vue";
import SectionPartners from "../components/SectionPartners.vue";
import SectionTechstack from "../components/SectionTechstack.vue";
import SectionLearning from "../components/SectionLearning.vue";
import SectionKits from "../components/SectionKits.vue";
import SelectionDevSecOps from "../components/SelectionDevSecOps.vue";
import SelectionEcosystem from "../components/SelectionEcosystem.vue";
import TheBestComments from "../components/TheBestComments.vue";
import TheCTO227 from "../components/TheCTO227.vue";
import SectionTrainingPartner from "@/components/SectionTrainingPartner.vue";
</script>

<template>
  <main>
    <TheHomeIntro />
    <SectionPartners></SectionPartners>
    <SectionLearning></SectionLearning>
    <SectionKits></SectionKits>
    <SectionTechstack></SectionTechstack>
    <SelectionDevSecOps></SelectionDevSecOps>
    <SelectionEcosystem></SelectionEcosystem>
    <TheBestComments></TheBestComments>
    <TheCTO227></TheCTO227>
    <SectionTrainingPartner></SectionTrainingPartner>
  </main>
</template>
