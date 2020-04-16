<template>
    <div>
        <swiper :options="swiperOptions">
            <swiper-slide>
                <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg" alt />
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg" alt />
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg" alt />
            </swiper-slide>

            <div class="swiper-pagination pagination-home pb-1 text-right px-2" slot="pagination"></div>
        </swiper>
        <!-- end of swiper -->
        <!-- sprite start -->
        <div class="bg-white mt-3 nav-icons text-center text-grey-1 pt-4">
            <div class="d-flex flex-wrap">
                <div class="nav-items mb-3" v-for="n in 10" :key="n">
                    <i class="sprite sprite-news mb-2"></i>
                    <div>爆料站</div>
                </div>
            </div>
            <div class="bg-light py-2">
                <i class="sprite sprite-arrow mr-1"></i>
                <span>收起</span>
            </div>
        </div>
        <!-- end of nav-icons -->
        <!-- <my-card title="新闻资讯" icon="news">
      <template>
        <div>
          
        </div>
      </template>
    </my-card> -->
        <my-list-card title="新闻资讯" icon="news" :categories="newsCats">
            <template #items="{category}">
                <router-link v-for="(news,i) in category.newsList" :key="i" :to="`/articles/${news._id}`" class="py-2 fs-lg d-flex">
                    <span class="text-info"> [{{news.categoryName}}]</span>
                    <span class="px-2">|</span>
                    <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>

                    <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
                </router-link>
            </template>
        </my-list-card>
        <!-- end of news -->
        <my-list-card title="英雄列表" icon="superhero-" :categories= "HeroCats">
            <template #items="{category}">
              <div class="d-flex flex-wrap" >
                <router-link 
                class="p-2 text-center"
                tag="div"
                :to="`/heroes/${hero._id}`" 
                v-for="(hero,i) in category.heroList" :key="i" style="width:20%;"
                >
                  <img :src="hero.avatar"  class="w-100">
                  <div>{{hero.name}}</div>
                </router-link>
              </div>
            </template>
        </my-list-card>
      <!-- end of hero -->
      准备写精彩视频和图文攻略
    </div>
</template>

<style lang="scss">
    @import "../assets/scss/variables";

    .topbar {
        position:sticky;
        top: 0;
        z-index: 999;
    }

    .pagination-home {
        .swiper-pagination-bullet {
            opacity: 1;
            border-radius: 0.1538rem;
            background: map-get($colors, "white");

            &.swiper-pagination-bullet-active {
                background: map-get($colors, "info");
            }
        }
    }

    .nav-icons {
        border-top: 1px solid $border-color;
        border-bottom: 1px solid $border-color;

        .nav-items {
            width: 25%;
            border-right: 1px solid $border-color;
        }
    }
</style>

<script>
    import dayjs from 'dayjs'
    export default {
        filters: {
            date(val) {
                return dayjs(val).format('MM/DD')
            }
        },
        data() {
            return {
                swiperOptions: {
                    pagination: {
                        el: ".swiper-pagination"
                    }
                },
                newsCats: [],
                HeroCats: []
            }
        },
        methods: {
            async fetchNewsCats() {
                const res = await this.$http.get("news/list");
                this.newsCats = res.data
            },
            async fetchHeroCats() {
                const res = await this.$http.get("heroes/list");
                this.HeroCats = res.data
                console.log(res.data)
            }
        },
        created() {
            this.fetchNewsCats();
            this.fetchHeroCats();
        },
    };
</script>