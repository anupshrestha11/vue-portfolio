<template>
    <section>
        <h1>Some Projects</h1>
        <div class="works">
            <WorkCard v-for="work in state.works" :work="work" :key="work.id" />
        </div>
    </section>
</template>

<script>
import WorkCard from "@/components/WorkCard";
import travel24 from "@/assets/work/travel24.png";
import gtz from "@/assets/work/gtz.png";
import mart from "@/assets/work/mart.png";
import blog from "@/assets/work/blog.png";
import noImage from "@/assets/work/notfound.jpg";
import { reactive } from "vue";
export default {
    components: {
        WorkCard,
    },
    setup() {
        const state = reactive({
            works: [
                {
                    id: 1,
                    title: "Travel 24",
                    img: travel24,
                    url: "https://www.travel24.com.np/",
                    github:
                        "https://github.com/anupshrestha11/travel24-laravel",
                },
                {
                    id: 2,
                    title: "GTZ Enterprise",
                    img: gtz,
                    url: "https://www.gtzenterprises.com.np/",
                    github: "https://github.com/anupshrestha11/gtz",
                },
                {
                    id: 3,
                    title: "Laravel Livewire Ecommerce Website",
                    img: mart,
                    url: "https://mart-laravel-8-livewire.herokuapp.com/",
                    github:
                        "https://github.com/anupshrestha11/laravel_8_livewire_spa_ecommerce_site",
                },
                {
                    id: 4,
                    title: "Hotel Mountain Ridge",
                    img: noImage,
                    url: "https://www.hotelmountainridge.com.np/",
                    github: "https://github.com/anupshrestha11/",
                },
                {
                    id: 5,
                    title: "Diggimark Nepal",
                    img: noImage,
                    url: "https://www.diggimarknepal.com/",
                    github: "https://github.com/anupshrestha11/Diggimark_Nepal",
                },
                {
                    id: 6,
                    title: "Anup's Blog",
                    img: blog,
                    url: "/",
                    github:
                        "https://github.com/anupshrestha11/laravel-and-livewire-blog",
                },
            ],
        });

        return {
            state,
        };
    },
};
</script>

<style lang="scss" scoped>
section {
    max-width: 1200px;
    margin: 0 auto;
    h1 {
        text-align: center;
    }
    .works {
        display: flex;
        gap: 10px;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-bottom: 50px;
    }
}
</style>