<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
    <div>
        <div v-if="showTitle"
             class="nav">
            <div v-if="this.$route.path != '/a'"
                 class="nav-back">
                <i v-on:click="$router.go(-1)"
                   class="fa fa-arrow-circle-left fa-3x" style="color:white;cursor: pointer;font-size:44px;"></i>
            </div>
            {{ this.$store.title }}
        </div>

        <div class="slot">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                scrollTop: document.body.scrollTop,
                showTitle: true
            };
        },
        watch: {
            '$route.path': function (_newVal, _oldVal) {
                if (_newVal == '/')
                    this.$store.title = '主页'
            }
        },
        mounted: function () {
            this.$store.toastr = this.$refs.toastr;
            window.addEventListener('scroll', (e) => {
                if (this.scrollTop > 60)
                    if (document.body.scrollTop - this.scrollTop < 0)
                        this.showTitle = true;
                    else
                        this.showTitle = false;

                this.scrollTop = document.body.scrollTop;
            });

            this.$store.title = '主页';
        }
    }
</script>

<style scoped>
    .nav {
        position: fixed;
        text-align: center;
        width: 100%;
        height: 70px;
        color: white;
        font-size: 30px;
        line-height: 66px;
        background-color: rgb(66, 66, 66);
        z-index: 999;
    }

    .nav-back {
        position: absolute;
        left: 10px;
        top: 12px;
    }

    .slot {
        padding: 20px;
        padding-top: 70px;
    }
</style>
