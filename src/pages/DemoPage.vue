<script setup>
    import ContentLayout from '@/components/layouts/ContentLayout.vue'
    import InputBox from '@/components/inputs/InputBox.vue'
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
        </content-layout>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            content: '默认值',
        } 
    },
    methods: {
        button_click: function () {
            this.$store.toastr.succ(this.content);
        },
    },
}
</script>