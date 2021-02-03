<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
String.prototype.replaceAll = function(FindText, RepText) {
  return this.replace(new RegExp(FindText, 'g'), RepText)
}
export default {
  name: 'App'
}
</script>
<style lang="scss">
.float-header {
  cursor: move;
}
@-moz-document url-prefix() {
  .el-checkbox__label {
    margin-left: -5px;
    background: #fff;
  }
  .el-checkbox__label:hover {
    background: #f0f6ff;
  }
}
.table-row-selection-style {
  background-color: rgb(240, 246, 255) !important;
}
#app {
  // .el-collapse-item__header {
  //   height: 38px;
  //   line-height: 38px;
  //   font-size: 12px;
  //   margin-bottom: 20px;
  // }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE10+ CSS styles go here */
    .el-input__inner {
      line-height: 18px;
    }
  }
  @-moz-document url-prefix() {
    // .el-table__row {
    //   .el-checkbox {
    //     .is-checked {
    //       margin-left: 10px;
    //     }
    //     .is-focus {
    //       .el-checkbox__inner {
    //         margin-left: 10px;
    //       }
    //     }
    //   }
    // }
    .el-table-column--selection {
      .cell {
        .el-checkbox:not(.is-focus) {
          margin-left: -10px;
        }
        .el-checkbox .is-focus {
          margin-left: 10px;
        }
      }
    }
  }
}

.el-dialog__wrapper {
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE10+ CSS styles go here */
    .el-input__inner {
      line-height: 18px;
    }
  }
}
// #app .sidebar-container {
//   z-index: 0;
// }
#app {
  font-family: "微软雅黑", "Microsoft YaHei", "Helvetica Neue", Helvetica,
    "PingFang SC", "Hiragino Sans GB", Arial, sans-serif;
}
input[type="text"]:hover {
  border-color: #1890ff;
}
.el-select .el-input .el-select__caret {
  line-height: 30px;
}
input[type="text"] {
  border: 1px solid #d3d3d3;
}
input[type="text"]:focus {
  border-color: #1890ff;
}
.dial-el-popover {
  height: 360px;
}
.vue-treeselect__single-value {
  z-index: 1;
  padding-left: 15px !important;
  color: #747474 !important;
}
::-webkit-scrollbar-track-piece {
  //滚动条凹槽的颜色，还可以设置边框属性
  background-color: #f8f8f8;
}
.el-table ::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}
.el-table__fixed {
  bottom: 15px !important;
}
::-webkit-scrollbar {
  //滚动条的宽度
  width: 5px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  //滚动条的设置
  background-color: #dddddd;
  background-clip: padding-box;
  min-height: 28px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}
.required-label-style {
  label::before {
    content: "*";
    color: #ff4949;
    margin-right: 4px;
  }
}
.ellipsis-style {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 24px 0;
}
.el-divider {
  background-color: #dcdfe6;
  position: relative;
}
</style>

