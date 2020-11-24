<template>
    <div class="about">
        <Intro />
        <Code />
        <Skill />
    </div>
</template>
<script>
import Intro from "@/components/Intro.vue";
import Code from "@/components/Code.vue";
import Skill from "@/components/Skill.vue";

export default {
    components: {
        Intro,
        Code,
        Skill,
    },
};
</script>

<style lang="scss" >
</style>