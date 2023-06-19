<template>
    <div class="newInfoContainer">
        <h1 class="newInfoTitle">最新消息</h1>
        <div class="linkGroup">
            <p to="/NewInfo/NewProduct" class="link" @click="changeType('all')">所有消息</p>
            <div class="line"></div>
            <p to="/NewInfo/NewProduct" class="link" @click="changeType('NewProduct')">新品上市</p>
            <div class="line"></div>
            <p to="/NewInfo/RelateInfo" class="link" @click="changeType('RelateInfo')">如記消息</p>
            <div class="line"></div>
            <p to="/NewInfo/ProductRelate" class="link" @click="changeType('ProductRelate')">產品相關</p>
        </div>

        <div class="newInfoRouterView">
            <div class="newInfoCardItem" v-for="(item , index) in currentNewInfo" :key="index">
                <div class="newInfoCardImgContainer">
                    <img :src="item.img" alt="" class="newInfoCardImg">
                </div>
                <h3 class="newInfoCardTitle">{{ item.title }}</h3>
                <p class="newInfoCardcontent">{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentNewInfoType: 'all',
            currentNewInfo:[]
        }
    },
    computed: {
        newInfoArray() {
            return this.$store.state.newInfo;
        }
    },
    methods: {
        changeType(type) {
            this.currentNewInfoType = type
        },
    },
    watch: {
        currentNewInfoType: {
            handler(type) {
                const vm = this;
                vm.currentNewInfo = [];

                vm.newInfoArray.forEach(item => {
                    if(type === 'all') {
                        vm.currentNewInfo.push(item);
                    }else if(type === item.category ) {
                        vm.currentNewInfo.push(item);
                    }
                });

                if(type == 'NewProduct'){
                    this.$store.commit('GETCURRENTPAGEROUTE', { name: '新品上市', index: 1, path: '/NewInfo' })
                }else if (type == 'RelateInfo') {
                    this.$store.commit('GETCURRENTPAGEROUTE', { name: '如記消息', index: 1, path: '/NewInfo' })
                }else if (type == 'ProductRelate') {
                    this.$store.commit('GETCURRENTPAGEROUTE', { name: '產品相關', index: 1, path: '/NewInfo' })
                }else{
                    this.$store.commit('GETCURRENTPAGEROUTE', { name: '所有消息', index: 1, path: '/NewInfo' })
                }

            },
            immediate: true
        }
    },
    mounted() {
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '最新消息', index: 0, path: '/NewInfo' })
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '所有消息', index: 1, path: '/NewInfo' })
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 2, path: '' })
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 3, path: '' })
    }
}
</script>

<style scoped>
.newInfoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.newInfoTitle {
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

    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}

.newInfoCardItem {
    border-radius: 20px;
    padding: 1.5rem;

    box-shadow: 0px 5px 10px #A3A3A3;
}

.newInfoCardImgContainer {
    border-radius: 20px;
    overflow: hidden;
}

.newInfoCardImg {
    width: 100%;
    object-fit: cover;
    object-position: center;

    border-radius: 20px;
}

.newInfoCardImg:hover {
    transform: scale(1.2, 1.2);
    transition-duration: .5s;
}

.newInfoCardTitle {
    width: 100%;
    margin: 1rem 0;
}

.newInfoCardcontent {
    width: 100%;
    font-size: 15px;
}</style>