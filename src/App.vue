<template>
    <Header />
    <router-view />
</template>

<script>
import Header from "@/components/Header.vue";
export default {
    components: {
        Header,
    },
};
</script>

<style >
* {
    box-sizing: border-box;
}
body {
    margin: 0;
}
/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
</style>



