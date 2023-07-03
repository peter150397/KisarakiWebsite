<template>
    <div class="columnCenterContainer">
        <h1 class="pageTitle">最新消息</h1>
        <div class="linkGroup">
            <p to="/NewInfo/NewProduct" class="link" @click="changeType('all')">所有消息</p>
            <div class="linkGroupLine"></div>
            <p to="/NewInfo/NewProduct" class="link" @click="changeType('NewProduct')">新品上市</p>
            <div class="linkGroupLine"></div>
            <p to="/NewInfo/RelateInfo" class="link" @click="changeType('RelateInfo')">如記消息</p>
            <div class="linkGroupLine"></div>
            <p to="/NewInfo/ProductRelate" class="link" @click="changeType('ProductRelate')">產品相關</p>
        </div>

        <select class="RWDSelectLinkGroup" v-model="currentNewInfoType">
            <option value="all">所有消息</option>
            <option value="NewProduct">新品上市</option>
            <option value="RelateInfo">如記消息</option>
            <option value="ProductRelate">產品相關</option>
        </select>

        <div class="newInfoContainer mainContent">
            <div class="newInfoCardItem" v-for="(item, index) in currentNewInfo" :key="index">
                <div class="newInfoCardImgContainer">
                    <img :src="item.img" alt="" class="newInfoCardImg">
                </div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentNewInfoType: 'all',
            currentNewInfo: []
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
                    if (type === 'all') {
                        vm.currentNewInfo.push(item);
                    } else if (type === item.category) {
                        vm.currentNewInfo.push(item);
                    }
                });

                if (type == 'NewProduct') {
                    this.$store.commit('GETCURRENTPAGEROUTE', { name: '新品上市', index: 1, path: '/NewInfo' })
                } else if (type == 'RelateInfo') {
                    this.$store.commit('GETCURRENTPAGEROUTE', { name: '如記消息', index: 1, path: '/NewInfo' })
                } else if (type == 'ProductRelate') {
                    this.$store.commit('GETCURRENTPAGEROUTE', { name: '產品相關', index: 1, path: '/NewInfo' })
                } else {
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
    display: grid;
    gap: 2vw;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}

.newInfoCardItem {
    box-shadow: 0px 5px 10px #A3A3A3;
}
</style>