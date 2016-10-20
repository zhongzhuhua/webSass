# webSass
sass 基础学习

## 编译指令

    * sass scss/index.scss css/index.css 正常编译 index.scss 到 index.css
    * sass scss/index.scss:css/index.css 正常编译 index.scss 到 index.css
    * sass scss:css 编译 scss 文件夹所有文件到 css 下
    * sass --watch scss:css 监听 scss 文件夹变更，文件有更新，自动编译到 css 文件件下
    * sass --style configs 根据 configs 决定编译后文件
    *   configs 配置4选1
    *     nested 默认，尾部 } 不换行
    *     expanded 美化代码
    *     compact 一个样式合并一行
    *     compressed 全部压缩
