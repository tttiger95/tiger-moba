<template>
    <div class="mt-3 bg-white card p-3 ">
        <div class="pb-3 d-flex flex-wrap card-header ai-center">
            <i class="iconfont" :class="`icon-${icon}`"></i>
            <div class="ml-2">
                <strong>{{title}}</strong>
            </div>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../assets/scss/_variables.scss";

    .card {
        .card-header {
            border-bottom: 1px solid $border-color;
        }
    }
</style>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: true
            },
        }
    }
</script>