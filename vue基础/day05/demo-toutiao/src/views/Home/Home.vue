<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" fixed />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="finished">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onload"
      >
        <Article v-for="item in artlist" :key="item.id"
                 :title="item.title"
                 :author="item.aut_id"
                 :cmd-count="item.comm_count"
                 :time="item.pubdate"
                 :cover="item.cover"
        >

        </Article>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleList } from '@/api/article'
import Article from '@/components/Article/ArticleInfo'
export default {
  components: { Article },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data () {
    return {
      page: 1,
      limit: 10,
      artlist: [],
      loading: true,
      finished: false,
      isLoading: false,
      isRefresh: false
    }
  },
  created () {
    this.initArticleList()
  },
  methods: {
    async initArticleList (isRefresh) {
      const { data: res } = await getArticleList(this.page, this.limit)

      if (isRefresh) {
        this.artlist = [...res, ...this.artlist]
        this.isRefresh = false
      } else {
        this.artlist = [...this.artlist, ...res]
      }

      this.loading = false
      this.isLoading = false

      if (res.length === 0) {
        this.finished = true
      }
    },
    onload () {
      this.page++
      this.initArticleList()
    },
    onRefresh () {
      this.page++
      this.isRefresh = true
      this.initArticleList(this.isRefresh)
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  padding: 46px 0 50px 0;
  .van-nav-bar {
    background-color: #007bdf;
  }
  /deep/.van-nav-bar__title {
    color: aliceblue;
  }
}
</style>
