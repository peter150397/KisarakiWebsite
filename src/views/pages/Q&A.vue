<template>
    <div class="QAContainer">
        <h1 class="QATitle">常見問題</h1>
        <div class="linkGroup">
            <p class="link" @click="changeType('all')">所有問題</p>
            <div class="line"></div>
            <p class="link" @click="changeType('contact')">如何聯絡我們</p>
            <div class="line"></div>
            <p class="link" @click="changeType('purchase')">哪裡購買如記產品</p>
        </div>

        <div class="newInfoRouterView">
            <div class="QAContentContainer">
                <div :id="'QAContent' + index" @click="slideAnimate(index)" v-for="(item, index) in currentQA"
                    :key="index">
                    <div class="QAContentItem">
                        <img src="@/assets/Q&AImg/question-mark.png" alt="">
                        <h2>{{ item.title }}</h2>
                        <img src="@/assets/Q&AImg/plus.png" alt="" class="plusImg">
                    </div>
                    <p>{{ item.content }}</p>
                </div>
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
            currentQA:[]
        }
    },
    computed: {
        QAArray() {
            return this.$store.state.QA
        }
    },
    methods: {
        slideAnimate(index) {
            if ($(`#QAContent${index} > .QAContentItem`).css('border-radius') == '20px') {
                $(`#QAContent${index} > p`).slideDown(300)
                $(`#QAContent${index} > .QAContentItem`).css('transition-delay', '0ms');
                $(`#QAContent${index} > .QAContentItem`).css('border-radius', '20px 20px 0 0');
                $(`#QAContent${index} > .QAContentItem > .plusImg`).css('transform', 'rotate(45deg)');
            } else {
                $(`#QAContent${index} > p`).slideUp(300)
                $(`#QAContent${index} > .QAContentItem`).css('transition-delay', '200ms');
                $(`#QAContent${index} > .QAContentItem`).css('border-radius', '20px');
                $(`#QAContent${index} > .QAContentItem > .plusImg`).css('transform', 'rotate(0deg)');
            }
        },
        changeType(type) {
            this.currentQAType = type
        },
    },
    watch: {
        currentQAType: {
            handler(type) {
                const vm = this;
                vm.currentQA = [];

                vm.QAArray.forEach(item => {
                    if(type === 'all') {
                        vm.currentQA.push(item);
                    }else if(type === item.category ) {
                        vm.currentQA.push(item);
                    }
                });

                if(type == 'contact'){
                    this.$store.commit('GETCURRENTPAGEROUTE', { name: '如何聯絡我們', index: 1, path: '/Q&A' })
                }else if (type == 'purchase') {
                    this.$store.commit('GETCURRENTPAGEROUTE', { name: '哪裡購買如記產品', index: 1, path: '/Q&A' })
                }else{
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
    flex-direction: column;
    align-items: center;
}

.QATitle {
    padding-top: 4rem;
}

.linkGroup {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    height: 37px;
}

.line {
    height: 50%;
    width: 1px;
    background-color: black;
}

.link {
    padding: 0.5rem 1.5rem;
    border-radius: 10px;

    text-decoration: none;
    color: black;
}

.link:hover {
    background-color: #FFD86F;
    color: white;

    transition-duration: .3s;

    cursor: pointer;
}

.newInfoRouterView {
    width: 62.5%;
    margin-bottom: 6rem;
}

.QAContentContainer {
    display: flex;
    gap: 1rem;
    flex-direction: column;
}

.QAContentContainer>div {
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