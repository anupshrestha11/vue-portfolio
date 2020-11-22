<template>
    <header :class="{ active: isActive }">
        <router-link to="/" class="logo"
            >Anup <span>Shrestha</span></router-link
        >
        <button class="bars" @click="showNav">
            <div></div>
            <div></div>
            <div></div>
        </button>
        <ul :class="{ active: isActive }">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Me</router-link></li>
        </ul>
    </header>
</template>

<script>
export default {
    data: function () {
        return {
            isActive: false,
        };
    },
    methods: {
        showNav() {
            this.isActive = !this.isActive;
        },
    },
};
</script>

<style lang="scss" scoped>
header {
    @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap");
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    font-family: "Roboto Mono", monospace;
    border-bottom: 1px solid #00000040;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;

    @media screen and (max-width: 600px) {
        transition: all 0.3s ease;
        height: 65px;
        overflow: hidden;
        &.active {
            height: 160px;
        }
    }

    .logo {
        text-decoration: none !important;
        margin: 0;
        padding: 0;
        font-size: 2rem;
        letter-spacing: 0.1rem;
        font-weight: 700;
        color: #000;
        word-spacing: -20px;
        white-space: nowrap;
        span {
            color: #ff3e4d;
        }
    }
    ul {
        @media screen and (max-width: 600px) {
            display: none;
            width: 100vw;
            opacity: 0;
            transition: all 0.3s ease;

            &.active {
                display: block;
                opacity: 1;
                li {
                    margin: 20px 0;
                    text-align: center;
                }
            }
        }

        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        li {
            display: block;
            margin: 0 15px;
            a {
                text-decoration: none;
                word-spacing: -5px;
                padding: 5px 8px;
                border-radius: 10px 4px;
                font-weight: 600;
                color: #000;
                transition: all 0.1s ease;
                &.router-link-exact-active {
                    color: #e71c23;
                }
                &:hover:not(.router-link-exact-active) {
                    color: #fff;
                    font-weight: 300;
                    background: #192a56;
                }
            }
        }
    }

    .bars {
        display: block;
        background: #fff;
        border: none;
        outline: none;
        @media screen and (min-width: 601px) {
            display: none;
        }
        div {
            width: 1.5rem;
            height: 0.2rem;
            background: #000;
            margin: 5px 0;
        }
    }
}
</style>