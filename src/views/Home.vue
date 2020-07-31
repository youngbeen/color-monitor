<template>
  <div class="home">
    <input type="text" class="input" ref="input" v-model="colorStr" :placeholder="placeholder">
    <div class="box-input">
      <input type="checkbox" id="chkbox" v-model="showColorValue"><label for="chkbox" class="label">是否展示色值</label>
    </div>
    <!-- <div class="tip">1. 多颜色使用英文,分隔</div>
    <div class="tip">2. 使用数组形式</div> -->

    <div class="box-preview" v-show="colors.length">
      <div class="box-tips">
        <div class="tip">* 点击色块拷贝色值</div>
      </div>
      <!-- 标题行 -->
      <div class="row row-title">
        <div class="title" v-for="n in maxCol" :key="n">{{ n }}</div>
      </div>
      <div class="row" v-for="(r, index) in colors" :key="index">
        <div class="item" v-for="(c, i) in r" :key="i" :style="{ background: c }" @click="copyColor(c.toLowerCase())">
          <div class="value">{{ showColorValue ? c.toLowerCase() : '' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { clipboard } from '@youngbeen/angle-ctrl'

export default {
  data () {
    return {
      colorStr: '',
      placeholder: 'CSS颜色，多个颜色值使用英文,分隔，换行使用-分隔',
      showColorValue: true
    }
  },
  computed: {
    colors () {
      if (this.colorStr) {
        const result = []
        const rows = this.colorStr.split('-')
        rows.forEach(r => {
          let array = r.split(',')
          array = array.map(item => item.replace(/'|\s|\n|\r/g, ''))
          result.push(array)
        })
        return result
      } else {
        return []
      }
    },
    maxCol () {
      let result = 0
      this.colors.forEach(r => {
        if (r.length > result) {
          result = r.length
        }
      })
      return result
    }
  },

  methods: {
    copyColor (color) {
      // console.log(color)
      color && clipboard.copy(color)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  padding: 16px 32px;
  .input {
    display: block;
    width: 100%;
    padding: 6px;
    font-size: 14px;
  }
  .box-input {
    display: flex;
    align-items: center;
    label.label {
      font-size: 12px;
      // vertical-align: top;
      user-select: none;
    }
  }
  .box-preview {
    // display: flex;
    // flex-direction: column;
    // flex-wrap: wrap;
    padding-top: 8px;
    .box-tips {
      padding: 4px 0;
      .tip {
        color: #666;
        font-size: 11px;
      }
    }
    .row {
      display: flex;
      &.row-title {
        margin-bottom: 2px;
      }
      .title {
        width: 100px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        font-size: 11px;
        font-weight: bold;
        border-bottom: 1px solid #000;
        &:not(:last-of-type) {
          border-right: 1px solid #000;
        }
      }
      .item {
        width: 100px;
        height: 30px;
        .value {
          height: 100%;
          line-height: 30px;
          padding: 0 12px;
          color: #fff;
          mix-blend-mode: difference;
          font-size: 12px;
          // font-weight: bold;
          // text-shadow: -1px -1px 1px #fff;
        }
      }
    }
  }
}
</style>
