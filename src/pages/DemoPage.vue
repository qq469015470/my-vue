<script setup>
    import ContentLayout from '@/components/layouts/ContentLayout.vue'
    import InputBox from '@/components/inputs/InputBox.vue'
    import InputDate from '@/components/inputs/InputDate.vue'
    import InputTip from '@/components/inputs/InputTip.vue'
    import Modal from '@/components/modal.vue'
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
                <div class="lg6"></div>
                <div class="lg4"><button class="btn-red" v-on:click="showModal = true">弹框</button></div>
                <div class="lg6"></div>
            </div>
        </content-layout>

        <div>
        <modal :show="showModal">
            <div class="modal-title">
                <div class="row">
                    <h2>添加</h2>
                </div>
            </div>
            <div class="modal-content">
                <label>名称：</label>
                <input-box />
                <label>数量</label>
                <input-box 
                           type="number" />
                <label>单件成本：</label>
                <input-box
                           type="number" />
            </div>
            <div class="modal-footer">
                <div class="lg8 row">
                    <button v-on:click="showModal = false">
                        添加
                    </button>
                </div><div class="lg8 row">
                    <button v-on:click="showModal = false"
                            class="btn-red">
                        关闭
                    </button>
                </div>
            </div>
        </modal>
        </div>
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
            },
            showModal: true,
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