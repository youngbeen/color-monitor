<template>
  <div class="home">
    <input type="text" class="input" v-model="colorStr" :placeholder="placeholder">
    <div class="box-input">
      <input type="checkbox" id="chkbox" v-model="showColorValue"><label for="chkbox" class="label">Show color value</label>
    </div>

    <div class="box-preview" v-show="colors.length">
      <div class="box-tips">
        <div class="tip">* click color block to copy color</div>
      </div>

      <!-- title row -->
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

// '#1b87fc', '#79c1eb', '#4af3bb', '#c6f34a', '#e6e6e6', '#f39c4a', '#eb75d7', '#eb757f', '#4af300', '#af4af3' - , , black, rgb(255, 25, 53), yellow, rgba(0, 0,0, .3), hsl(0, 9%, 29%)

export default {
  data () {
    return {
      colorStr: '',
      placeholder: 'css colors here, seperate by comma(,). use - to switch to new row',
      showColorValue: true
    }
  },
  computed: {
    colors () {
      if (this.colorStr) {
        const result = []
        const rows = this.colorStr.split('-')
        rows.forEach(r => {
          console.log(r)
          r = r.replace(/(?<=\()([^)]+)(?=\))/g, (string) => string.replace(/,/g, '|'))
          // console.log(r)
          let array = r.split(',')
          array = array.map(item => {
            item = item.replace(/'|\s|\n|\r/g, '')
            item = item.replace(/\|/g, ',')
            return item
          })
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
