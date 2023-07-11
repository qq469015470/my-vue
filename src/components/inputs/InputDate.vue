<script setup>
import InputBox from '@/components/inputs/InputBox.vue'
</script>

<template>
    <div v-on:mouseout="mouseOut = true"
         v-on:mouseover="mouseOut = false">
        <div class="date-container">
            <div class="right">
                <button class="icon"
                        v-on:click="show = true;">
                    <i class="fa fa-calendar"></i>
                </button>
            </div>
            <div class="left">
                <input-box v-model="dateValue"
                            v-on:focus="show = true"
                            style="vertical-align: middle;padding:0" />
            </div>

            <div class="calendar noselect" 
            v-if="show">
                <div class="calendar-title">
                    <div v-on:click="LastYear();" 
                        class="btn-month-left">
                        <i class="fa fa-chevron-left"></i>
                    </div>
                    <div style="display:inline-block;width: 100px;">
                        {{ this.curYear }} 年
                    </div>
                    <div v-on:click="NextYear();" 
                        class="btn-month-right">
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
                <div class="calendar-title">
                    <div v-on:click="LastMonth();"
                         class="btn-month-left">
                        <i class="fa fa-chevron-left"></i>
                    </div>
                    <div style="display:inline-block;width: 100px;">
                        {{ this.curMonth + 1}} 月
                    </div>
                    <div v-on:click="NextMonth();"
                         class="btn-month-right">
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
                <ul class="calendar-week">
                    <li>
                        一
                    </li>
                    <li>
                        二
                    </li>
                    <li>
                        三
                    </li>
                    <li>
                        四
                    </li>
                    <li>
                        五
                    </li>
                    <li>
                        六
                    </li>
                    <li>
                        七
                    </li>
                </ul>
                <ul class="calendar-content">
                    <li v-for="(item, index) in lastDays"
                        v-on:click="dateValue = item.value"
                        style="color: gray;">
                        {{ item.name }}
                    </li>
                    <li v-for="(item, index) in days"
                        v-on:click="dateValue = item.value">
                        {{ item.name }}
                    </li>
                    <li v-for="(item, index) in nextDays"
                        v-on:click="dateValue = item.value"
                        style="color: gray;">
                        {{ item.name }}
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    components: {
        InputBox
    },
    props: {
        modelValue: {
            type: String,
            default: ''
        }
    },
    data: function () {
        return {
            curYear: '',
            curMonth: '',
            show: false,
            mouseOut: false,
            dateValue: '',
        };
    },
    watch: {
        dateValue: function(_new) {
            this.$emit('update:modelValue', _new);
        }    
    },
    computed: {
        offset: function () {
            var date = new Date(this.curYear, this.curMonth, 1);
            var result = date.getDay() - 1;
            if(result < 0)
                result = 6;
            return result;
        },
        lastDays: function () {
            return this.PaddingLeftDays(this.curYear, this.curMonth);
        },
        days: function () {
            var temp = [];
            var daysCount = this.GetDaysOfMonth(this.curYear, this.curMonth);

            for(var i = 1;i <= daysCount; i++) {
                temp.push({
                    name: i,
                    value: this.curYear + '-' + (this.curMonth + 1) + '-' + i
                });
            }

            return temp;
        },
        nextDays: function () {
            if((this.days.length + this.lastDays.length) % 7 != 0)
                return this.PaddingRightDays(7 - (this.lastDays.length + this.days.length) % 7);
            else
                return [];
        }
    },
    methods: {
        LastYear: function () {
            this.curYear--;
        },
        NextYear: function () {
            this.curYear++;
        },
        LastMonth: function () {
            if(this.curMonth == 0) {
                this.curMonth = 11;
                this.curYear--;
            }
            else
                this.curMonth--;
        },
        NextMonth: function () {
            if(this.curMonth == 11) {
                this.curMonth = 0;
                this.curYear++;
            }
            else
                this.curMonth++;
        },
        GetNextMonthDate: function () {
            var year = this.curYear;
            var month = this.curMonth;

            if(month == 11) {
                month = 0;
                year++;
            }
            else
                month++;

            var date = new Date(year, month, 1);
            return date;
        },
        GetLastMonthDate: function () {
            var year = this.curYear;
            var month = this.curMonth;

            if(month == 0) {
                month = 11;
                year--;
            }
            else
                month--;

            var date = new Date(year, month, 1);
            return date;
        },
        PaddingLeftDays: function () {
            var temp = [];
            var date = this.GetLastMonthDate();
            var daysCount = this.GetDaysOfMonth(date.getFullYear(), date.getMonth());

            for (var i = daysCount;i > daysCount - this.offset; i--) {
                temp.unshift({
                    name: i,
                    value: this.GetLastMonthDate().getFullYear() + '-' + (this.GetLastMonthDate().getMonth() + 1) + '-' + i
                });
            }

            return temp;
        },
        PaddingRightDays: function (_number) {
            var temp = [];
            var date = this.GetNextMonthDate();
            var daysCount = this.GetDaysOfMonth(date.getFullYear(), date.getMonth());

            for(var i = 1;i <= _number && i <= daysCount; i++) {
                temp.push({
                    name: i,
                    value: this.GetNextMonthDate().getFullYear() + '-' + (this.GetNextMonthDate().getMonth() + 1) + '-' + i
                });
            }

            return temp;
        },
        GetDaysOfMonth: function (_year, _month) {
            switch(_month) {
                case 0:
                case 2:
                case 4:
                case 6:
                case 7:
                case 9:
                case 11:
                    return 31;
                    break;
                case 3:
                case 5:
                case 8:
                case 10:
                    return 30;
                    break;
                case 1:
                    if(_year % 4 == 0 && (_year % 100 != 0 || _year % 400 == 0))
                        return 29;
                    else
                        return 28;
                    break;
                default:
                    console.error('日期获取失败!');
                break;
            }
        },
    },
    created: function () {
        var date = new Date();

        this.curYear = date.getFullYear();
        this.curMonth = date.getMonth();

        document.onmousedown = () => {
            if(this.mouseOut)
                this.show = false;
        }

        this.dateValue = this.modelValue || date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
}
</script>

<style>
    .date-container {
        border: 2px solid gray;
        padding: 0;
        box-sizing: border-box;
    }

    .date-container input {
        margin: 0 !important;
        border: 0 !important;
        width: 100%;
        height: 40px;
    }

</style>

<style scoped>
    .left {
        overflow: hidden;
    }

    .right {
        float: right;
        width: 40px;
    }

    .icon,
    .icon:active,
    .icon:focus {
        display: inline-block;
        width: 40px;
        height: 40px;
        padding: 0;
        margin: 0;
        border-left: 0;
        vertical-align: middle;
        background-color:lightblue;
        transform: none;
    }

    .calendar {
        position: absolute;
        border:1px solid gray;
        padding: 2px;
        background-color: RGB(43,43,43);
        z-index: 9999;
        box-sizing: border-box;
    }

    .calendar-title {
        text-align: center;
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-weight: 900;
    }

    .calendar-content,
    .calendar-week {
        width: 210px;
        font-size: 0;
    }

    .calendar-content > li,
    .calendar-week > li {
        display: inline-block;
        width: 30px;
        height: 30px;
        font-size: 15px;
        letter-spacing: normal;
        word-spacing: normal;
        margin: 0;
        text-align: center;
        box-sizing: border-box;
    }

    .calendar-content > li:hover {
        cursor: pointer;
        outline: 2px solid gray;
        background-color: #444444;
    }

    .btn-month-left,
    .btn-month-right {
        display: inline-block;
        cursor: pointer;
    }

    .btn-month-left {
        padding-right: 30px;
    }

    .btn-month-right {
        padding-left: 30px;
    }

    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Chrome/Safari/Opera */
        -khtml-user-select: none; /* Konqueror */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
        not supported by any browser */
    }
</style>

