<template>
    <div style="padding: 10px 0"><div style="display:inline-block;width:100%"><input style="display:inline-block;" class="input input-n"
                   :disabled="disabled"
                   :type="type"
                   :pattern="pattern"
                    v-model="newValue"
                    v-on:focus="$emit('focus')"
                    v-on:blur="$emit('blur')"

            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: '',
        },
        modelValue: {
            type: String,
            default: ''
        },
        pattern: {
            type: String,
            default: ''
        },
    },
    computed: {
        newValue: {
            get: function () {
                return this.modelValue
            },
            set: function (value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>

<style scoped>
    /*Chrome input样式默认蓝色问题*/
    input {
        outline: none;
        width: 100%;
    }

    input {
        min-width: 0px;
        min-height: 34px;
        padding: 5px 5px;
        border:2px solid gray;
        border-radius: 0px;
        font-size: 16px;
        box-sizing: border-box;
        transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
        color: black;
        background: whitesmoke;
    }
    
    input:focus {
        border: 2px solid cornflowerblue;
    }
    
    input:hover {
        border: 2px solid rgb(25, 114, 192);
    }

    input:disabled {
        border: 2px solid lightgray;
        background-color: gray;
        cursor: not-allowed;
    }

</style>
