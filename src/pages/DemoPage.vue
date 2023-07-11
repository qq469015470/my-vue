<script setup>
    import ContentLayout from '@/components/layouts/ContentLayout.vue'
    import InputBox from '@/components/inputs/InputBox.vue'
    import InputDate from '@/components/inputs/InputDate.vue'
    import InputTip from '@/components/inputs/InputTip.vue'
</script>

<template>
    <div>
        <content-layout>
            <div class="row">
                <div class="lg3"><label>输入框：</label></div>
                <div class="lg13">
                    <input-box v-model="content" />
                </div>
            </div>
            <div class="row">
                <div class="lg16">
                    <button v-on:click="button_click();">按钮</button>
                </div>
            </div>
            <div class="row">
                <div class="lg13">
                    <input-date v-model="date"></input-date>
                </div>
                <div class="lg3">
                    <button v-on:click="button2_click();">按钮2</button>
                </div>
            </div>
            <div class="row">
                <div class="lg4">
                    <label>提示输入框：</label>
                </div>
                <div class="lg12">
                    <input-tip v-model="filter.name" :tips="filter.tips"></input-tip>
                </div>
            </div>
        </content-layout>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            content: '默认值',
            date: '',
            filter: {
                name: '',
                tips: ['123','bbbbb'],
            }
        } 
    },
    methods: {
        button_click: function () {
            this.$store.toastr.succ(this.content);
        },
        button2_click: function () {
            this.$store.toastr.err(this.date);
        },
    },
}
</script>