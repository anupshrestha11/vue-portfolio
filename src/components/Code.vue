<template>
    <div class="wrapper">
        <div class="code">
            <div>
                <h3>Frontend Part</h3>
                <ul>
                    <li>HTML5 & CSS3</li>
                    <li>VueJS</li>
                    <li>ReactJS</li>
                </ul>
            </div>
            <div>
                <img :src="image" alt="" />
            </div>
            <div>
                <h3>Backend Part</h3>
                <ul>
                    <li>Spring Boot (Java)</li>
                    <li>Laravel (php)</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import img from "@/assets/fbend.svg";
export default {
    data: function () {
        return {
            image: img,
        };
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    // background-color: #dae0e2;
}
.code {
    display: flex;
    // align-items: center;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;
    padding: 30px;

    h3 {
        font-size: 2rem;
        text-transform: uppercase;
        margin: 0;
        padding: 0;
        margin-top: 130px;
        text-align: center;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
            text-align: center;
            margin: 20px 0;
        }
    }
    img {
        filter: drop-shadow(0px 0px 10px #00000050);
        max-width: 400px;
    }
    @media screen and (max-width: 769px) {
        img {
            width: 300px;
            margin: -10px;
        }
        h3 {
            font-size: 1.5rem;
            margin-top: 70px;
        }
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        img {
            width: 100%;
            margin: 0;
        }
        h3 {
            font-size: 1.5rem;
            margin-top: unset;
        }
    }
}
</style>