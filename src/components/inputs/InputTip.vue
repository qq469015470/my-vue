<template>
    <div style="position: relative"
         v-on:mouseout="mouseOut = true;"
         v-on:mouseover="mouseOut = false;">
        <input-box :disabled="disabled"
                   :type="type"
                   :value="value"
                   v-on:input="InputEvent" />
        <div v-if="Object(tips).length > 0 && show"
             class="tip-container">
            <p v-for="(item, index) in tips" :key="index"
               v-on:click="SelectTip(item);"
                  class="tip">
                {{ item }}
            </p>
        </div>
    </div>
</template>

<script>
import InputBox from '@components/inputs/InputBox.vue'

export default {
    components: {
        InputBox
    },
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
        tips: {
            type: Array,
            default: []
        }
    },
    data: function () {
        return {
            show: false,
            mouseOut: true,
        }
    },
    methods: {
        SelectTip: function (_value) {
            this.show = false;
            this.$emit('input', _value);
        },
        InputEvent: function (_e) {
            this.show = true;
            this.$emit('input', _e);
        }
    },
    created: function () {
        document.onmousedown = () => {
            if(this.mouseOut == true)
                this.show = false;
        };
    }
}
</script>

<style scoped>
.tip-container {
    position: absolute;
    width: 100%;
    max-height: 112px;
    margin-top: -11px;
    border: 1px solid dodgerblue;
    background: white;
    box-sizing: border-box;
    z-index: 99999;
    overflow: auto;
}

.tip {
    width: 100%;
    height: 32px;
    padding: 1px 5px;
    padding-top: 4px;
    background: white;
    color: black;
    cursor: pointer;
    box-sizing: border-box;
}

.tip:hover {
    background: lightskyblue;
}
</style>
