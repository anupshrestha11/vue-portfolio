<template>
    <div class="intro">
        <div class="content">
            <h1>About Me</h1>
            <p class="intro">
                I'm fullstack developer based in Kathmandu valley, Nepal
            </p>
            <p>
                I enjoy turning complex problems into simple, beautiful and
                intituive web-application. When I'm not coding, learning new
                things and helping out other with difficulty in their and my
                intrest of fields.
            </p>
            <p>
                As fullstack developer, I do front-end in ReactJs, Vue, or HTML
                and for backend, I use Framework like Laravel, SpringBoot. I
                have the knownledge of Java, JavaScript, Python as well as Php.
            </p>
            <Social />
        </div>
        <div class="image-wrapper">
            <img :src="image" alt="" />
        </div>
    </div>
</template>

<script>
import img from "@/assets/me.jpg";
import Social from "./Social.vue";
export default {
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;600;700;800;900&display=swap");
.intro {
    display: flex;
    max-width: 1000px;
    margin: 50px auto;
    padding: 10px;

    .content {
        padding: 0 50px;
        margin: auto;
        h1 {
            font-size: 3rem;
            margin: 0;
            padding: 0;
            margin-bottom: 10px;
            font-family: "Montserrat", sans-serif;
            text-decoration: underline;
            color: #ff3e4d;
        }
        p {
            font-family: "Nunito", sans-serif;
            &.intro {
                font-size: 1.5rem;
                margin: 17px 0;
            }
        }
    }
    .image-wrapper {
        img {
            width: 100%;
            height: 500px;
            object-fit: contain;
        }
    }
    @media screen and (max-width: 769px) {
        margin: 0;
        .content {
            padding: 0 20px;
            h1 {
                font-size: 2.5rem;
                text-align: center;
            }
            p {
                &.intro {
                    font-size: 1.3rem;
                    text-align: center;
                    margin: 10px 0;
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        flex-direction: column;
        .content {
            order: 2;
            padding: 0 10px;
            h1 {
                font-size: 2rem;
            }
            p {
                &.intro {
                    margin: 8px 0;
                }
            }
        }
        .image-wrapper {
            order: 1;
            img {
                height: 250px;
                object-fit: cover;
                object-position: top;
            }
        }
    }
}
</style>