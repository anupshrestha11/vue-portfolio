<template>
    <div class="icons">
        <a href="https://www.facebook.com/anupshrestha11">
            <img
                src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
            />
        </a>
        <a href="https://linkedin.com">
            <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" />
        </a>
        <a href="https://github.com">
            <img src="https://img.icons8.com/fluent/48/000000/github.png" />
        </a>
        <!-- <a href="https://icons8.com/icon/uLWV5A9vXIPu/facebook"
                >icons by Icons8</a
            > -->
    </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.icons {
    display: flex;
    @media screen and (max-width: 600px) {
        justify-content: space-around;
        flex-direction: row;
    }
    justify-content: center;
    margin: 30px 0 10px;
    img {
        margin: 0 20px;
    }
}
</style>