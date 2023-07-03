<template>
    <div class="columnCenterContainer">
        <h1 class="pageTitle">常見問題</h1>
        <div class="linkGroup">
            <p class="link" @click="changeType('all')">所有問題</p>
            <div class="linkGroupLine"></div>
            <p class="link" @click="changeType('contact')">如何聯絡我們</p>
            <div class="linkGroupLine"></div>
            <p class="link" @click="changeType('purchase')">哪裡購買如記產品</p>
        </div>

        <select class="RWDSelectLinkGroup" v-model="currentQAType">
            <option value="all">所有問題</option>
            <option value="contact">如何聯絡我們</option>
            <option value="purchase">哪裡購買如記產品</option>
        </select>

        <div class="QAContainer mainContent">
            <div :id="'QAContent' + index" @click="slideAnimate(index)" v-for="(item, index) in currentQA" :key="index">
                <div class="QAContentItem">
                    <img src="@/assets/Q&AImg/question-mark.png" alt="">
                    <h2>{{ item.title }}</h2>
                    <img src="@/assets/Q&AImg/plus.png" alt="" class="plusImg">
                </div>
                <p>{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    data() {
        return {
            currentQAType: 'all',
            currentQA: []
        }
    },
    computed: {
        QAArray() {
            return this.$store.state.QA
        }
    },
    methods: {
        slideAnimate(index) {
            $(`#QAContent${index} > p`).slideToggle(300)

            if ($(`#QAContent${index} > .QAContentItem`).css('border-radius') == '20px') {
                $(`#QAContent${index} .plusImg`).css('transform', 'rotate(45deg)');
                $(`#QAContent${index} > .QAContentItem`).css({
                    'transition-delay': '0ms',
                    'border-radius': '20px 20px 0 0'
                });
            } else {
                $(`#QAContent${index} .plusImg`).css('transform', 'rotate(0deg)');
                $(`#QAContent${index} > .QAContentItem`).css({
                    'transition-delay': '200ms',
                    'border-radius': '20px'
                });
            }
        },
        changeType(type) {
            this.currentQAType = type

            $('.QAContentItem + p').slideUp(0)

            $('.plusImg').css('transform', 'rotate(0deg)');
            $('.QAContentItem').css({
                'transition-delay': '0ms',
                'border-radius': '20px'
            });
        },
    },
    watch: {
        currentQAType: {
            handler(type) {
                const vm = this;
                vm.currentQA = [];

                vm.QAArray.forEach(item => {
                    if (type === 'all') {
                        vm.currentQA.push(item);
                    } else if (type === item.category) {
                        vm.currentQA.push(item);
                    }
                });

                if (type == 'contact') {
                    this.$store.commit('GETCURRENTPAGEROUTE', { name: '如何聯絡我們', index: 1, path: '/Q&A' })
                } else if (type == 'purchase') {
                    this.$store.commit('GETCURRENTPAGEROUTE', { name: '哪裡購買如記產品', index: 1, path: '/Q&A' })
                } else {
                    this.$store.commit('GETCURRENTPAGEROUTE', { name: '所有問題', index: 1, path: '/Q&A' })
                }
            },
            immediate: true
        }
    },
    mounted() {
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '常見問題', index: 0, path: '/Q&A' })
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '所有問題', index: 1, path: '/Q&A' })
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 2, path: '' })
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 3, path: '' })
    },
}
</script>

<style scoped>
.QAContainer {
    display: flex;
    gap: 1rem;
    flex-direction: column;
}

.QAContainer>div {
    position: relative;
}

.QAContentItem {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    border-radius: 20px;

    background-color: #71CC86;

    transition-duration: 100ms;

    cursor: pointer;
}

.QAContentItem>img {
    height: 40px;
}

.QAContentItem>.plusImg {
    transform: rotate(0deg);
    transition-duration: 300ms;
}

.QAContentItem>h2 {
    color: white;
    width: 100%;
}

.QAContentItem+p {
    border: solid 2px #71CC86;
    position: relative;
    top: -16px;
    z-index: -1;
    padding: 3rem 4rem 2rem;
    line-height: 2rem;

    white-space: pre-line;

    display: none;
}
</style>