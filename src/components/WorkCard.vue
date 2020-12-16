<template>
    <div class="card">
        <div class="image__box">
            <img :src="work.img" alt="" class="img" />
        </div>
        <div class="card__detail">
            <div>
                <strong>{{ work.title }}</strong>
            </div>
            <div class="btns">
                <a :href="work.url" target="_blank" class="btn">Preview</a>
                <a :href="work.github" target="_blank" class="btn">Github</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        work: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.card {
    margin: 10px;
    box-shadow: 0 0 12px 0 #00000050;
    background: #fff;

    font-family: "Montserrat", monospace;
    .image__box {
        img {
            width: 300px;
            max-height: 170px;
            object-fit: cover;
        }
    }
    .card__detail {
        text-align: center;
        transition: all 0.3s ease-in;
        padding-top: 10px;
        .btns {
            display: flex;
            justify-content: space-around;
            .btn {
                background: #3c40c6;
                color: #fff;
                border: none;
                outline: none;
                text-decoration: none;
                margin: 10px;
                padding: 8px 10px;
                cursor: pointer;
                &:hover {
                    background: lighten($color: #3c40c6, $amount: 10%);
                }
            }
        }
    }
    &:hover {
        background: darken(#ffffff, 10%);
    }
}
</style>