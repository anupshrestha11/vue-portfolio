<template>
    <div class="wrapper">
        <div>
            <h2>My Skills</h2>
            <ul>
                <li>
                    HTML, CSS and Scss
                    <div class="bar">
                        <div class="indicator" style="width: 90%">
                            <div class="point">90%</div>
                        </div>
                    </div>
                </li>
                <li>
                    JavaScript
                    <div class="bar">
                        <div class="indicator" style="width: 85%">
                            <div class="point">85%</div>
                        </div>
                    </div>
                </li>

                <li>
                    Java
                    <div class="bar">
                        <div class="indicator" style="width: 75%">
                            <div class="point">75%</div>
                        </div>
                    </div>
                </li>
                <li>
                    Python
                    <div class="bar">
                        <div class="indicator" style="width: 60%">
                            <div class="point">60%</div>
                        </div>
                    </div>
                </li>
                <li>
                    Php
                    <div class="bar">
                        <div class="indicator" style="width: 80%">
                            <div class="point">80%</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            width: "40%",
        };
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    font-family: "Montserrat", sans-serif;
    max-width: 1000px;
    margin: 0 auto 100px;
    h2 {
        text-align: center;
        margin: 0;
        padding: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0 20px;
        li {
            text-align: center;
            margin: 20px 0;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            .bar {
                width: 100%;
                height: 10px;
                background: #dae0e2;
                margin: 10px 0;
                position: relative;
                .indicator {
                    height: 100%;
                    background: #ff3e4d;
                    position: relative;
                    .point {
                        position: absolute;
                        right: -1.1rem;
                        background-color: #2f363f;
                        color: #fff;
                        padding: 5px;
                        font-size: 0.8rem;
                        top: 200%;
                        &::before {
                            position: absolute;
                            content: "";
                            width: 15px;
                            height: 10px;
                            background-color: #2f363f;
                            bottom: 100%;
                            left: 50%;
                            transform: translateX(-50%);
                            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                        }
                    }
                }
            }
            @media screen and (min-width: 600px) {
                flex-direction: row;
                padding: 10px 50px;
                .bar {
                    width: 50vmin;
                }
            }
        }
    }
}
</style>