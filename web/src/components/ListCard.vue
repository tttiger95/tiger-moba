<template>
    <div>
        <my-card :title=title :icon=icon>
            <div class="nav jc-between pt-3">
                <div class="nav-item" :class="{active:active===i}" v-for="(category,i) in categories" :key="i" @click="$refs.list.$swiper.slideTo(i)">
                    <!-- 上面写swiper -->
                    <div>{{category.name}}</div>
                </div>
            </div>
            <div class="pt-3">
                <swiper ref="list" 
                @slide-change="() => active = $refs.list.$swiper.realIndex"
                :options="{autoHeight:true}"
                >
                    <swiper-slide v-for="(category,i) in categories" :key="i">
                        <slot name="items" :category=category></slot>
                    </swiper-slide>
                </swiper>
            </div>
        </my-card>
    </div>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            categories: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                active: 0
            }
        }
    }
    
</script>