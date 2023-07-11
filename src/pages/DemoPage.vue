<script setup>
    import ContentLayout from '@/components/layouts/ContentLayout.vue'
    import InputBox from '@/components/inputs/InputBox.vue'
    import InputDate from '@/components/inputs/InputDate.vue'
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
        </content-layout>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            content: '默认值',
            date: '',
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