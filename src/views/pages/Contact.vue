<template>
    <div class="ContactContainer">
        <h1 class="ContactTitle">聯絡我們</h1>
        <p class="ContactSubTitle">品質是公司根本，服務是公司生命<br>發揚傳統美食、穩健踏實、積極創新、誠信正直</p>
        <div>
            <div class="companyInfoContainer">
                <h2>如記食品有限公司</h2>
                <div>
                    <img src="@/assets/ContactImg/office.png" alt="">
                    <p>16455131</p>
                </div>
                <div>
                    <img src="@/assets/ContactImg/location.png" alt="">
                    <p>911屏東縣竹田鄉糶糴村南進路11號</p>
                </div>
                <div>
                    <img src="@/assets/ContactImg/telephone.png" alt="">
                    <p>08-771 0088</p>
                </div>
                <div>
                    <img src="@/assets/ContactImg/printer.png" alt="">
                    <p>08-771 1122</p>
                </div>
                <div>
                    <img src="@/assets/ContactImg/email.png" alt="">
                    <p>kisaraki@flno1.com.tw / rja@flno1.com.tw</p>
                </div>
                <!-- <img src="@/assets/ContactImg/Bg1.png" alt=""> -->
            </div>
            <div class="formContainer">
                <div>
                    <h2>聯絡我們</h2>
                    <form action="">
                        <table>
                            <tr>
                                <td style="width: 2%;"><p>*</p></td>
                                <td style="width: 20%;"><label for="buyerName">姓名</label></td>
                                <td><input type="text" placeholder="請輸入姓名" id="buyerName"></td>
                            </tr>
                            <tr>
                                <td><p>*</p></td>
                                <td><label for="buyer">電話</label></td>
                                <td><input type="text" placeholder="請輸入電話" id="buyer"></td>
                            </tr>
                            <tr>
                                <td><p>*</p></td>
                                <td><label for="buyer">手機</label></td>
                                <td><input type="text" placeholder="請輸入手機" id="buyer"></td>
                            </tr>
                            <tr>
                                <td><p></p></td>
                                <td><label for="buyer">統編</label></td>
                                <td><input type="text" placeholder="請輸入統編" id="buyer"></td>
                            </tr>
                            <tr>
                                <td><p>*</p></td>
                                <td><label for="buyer">地址</label></td>
                                <td><input type="text" placeholder="請輸入地址" id="buyer"></td>
                            </tr>
                            <tr>
                                <td><p>*</p></td>
                                <td><label for="buyer">詢問主題</label></td>
                                <td>
                                    <select name="" id="">
                                        <option value="">請選擇主題分類</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><p>*</p></td>
                                <td><p>內容</p></td>
                                <td><textarea name="" id=""></textarea></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                    <input type="submit" value="確認">
                                    <input type="reset" value="取消">
                                </td>
                            </tr>
                        </table>
                        
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '聯絡我們', index: 0, path: '/Contact' })
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 1, path: '' })
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 2, path: '' })
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 3, path: '' })
    },
}
</script>

<style scoped>
.ContactContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ContactTitle {
    padding-top: 4rem;
}

.ContactSubTitle {
    margin: 2rem 0;
    text-align: center;
}

.ContactContainer>div {
    width: 975px;
    height: 730px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    position: relative;

    margin-bottom: 6rem;
}

.companyInfoContainer {
    width: 48%;
    height: 75%;
    padding: 3.5rem;

    display: flex;
    gap: 2rem;
    flex-direction: column;

    background: url('@/assets/ContactImg/Bg1.png'), linear-gradient(323deg, #6CF6C0 0%, #D5FECB 100%);
    background-repeat: no-repeat;
    background-position: 130% 130%;
    background-size: 300px 300px, auto;

    border-radius: 40px;
    box-shadow: 0px 3px 10px #47B286;

    position: absolute;
    left: 0;
}

.companyInfoContainer>div {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.companyInfoContainer>div>img {
    height: 24px;
}

.formContainer {
    width: 90%;
    height: 100%;

    background: url('@/assets/ContactImg/Bg2.png');
    background-position: center center;
    box-shadow: 0px 3px 10px #C0CCDD;
    border-radius: 40px;
}
.formContainer > div{
    width: 48%;
    position: absolute;
    right: 0;
    top: 12.5%;
}

table{
    width: calc(100% - 3.5rem);
    border-collapse: collapse;
}
textarea{
    width: 100%;
    height: 150px;
    resize: vertical;
}
</style>