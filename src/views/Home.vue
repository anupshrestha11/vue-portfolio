<template>
    <section>
        <div>
            <div class="content">
                <h1>
                    Hi, My Name is <span><br />Anup Shrestha</span>
                </h1>
                <p>I'm FullStack Developer</p>
                <button>Contact Me</button>
            </div>
            <div class="image-div">
                <img :src="image" alt="" />
            </div>
        </div>
        <Social />
        <div id="particle"></div>
    </section>
</template>

<script>
import img from "@/assets/coding.svg";
import Social from "@/components/Social.vue";
export default {
    name: "Home",
    data: function () {
        return {
            image: img,
        };
    },
    components: {
        Social,
    },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&display=swap");
section {
    display: grid;
    place-content: center;
    height: 90vh;
    h1 {
        @media screen and (max-width: 600px) {
            font-size: 1.5rem;
        }
        font-size: 2rem;
        font-family: "Lobster Two", cursive;

        span {
            @media screen and (max-width: 600px) {
                font-size: 2.5rem;
            }
            font-size: 4rem;
            text-decoration: underline;
            white-space: nowrap;
            color: #ff4848;
            margin: 10px 0;
        }
        & + p {
            @media screen and (max-width: 600px) {
                font-size: 1.3rem;
            }
            font-family: "Roboto Mono", monospace;
            font-size: 1.5rem;
            & + button {
                margin-top: 1rem;
                border: none;
                outline: none;
                font-size: 1.2rem;
                background: #ff3e4d;
                padding: 10px 15px;
                border-radius: 10px 5px;
                color: #fff;
                box-shadow: 0 0 12px 0 #00000030;
                transition: background 0.2s ease-in;
                cursor: pointer;
                &:hover {
                    background: darken(#ff3e4d, 20%);
                }
            }
        }
    }
    & > div {
        display: flex;
        align-items: center;
        div {
            &.image-div {
                @media screen and (max-width: 600px) {
                    order: 1;
                }
            }
            &.content {
                @media screen and (max-width: 600px) {
                    order: 2;
                    text-align: center;
                }
            }
            img {
                width: 40vmin;
                margin: 10px 20px;
            }
        }
        @media screen and (max-width: 600px) {
            flex-direction: column;
        }
    }
}
</style>
