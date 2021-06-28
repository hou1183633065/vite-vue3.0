<template>
  <div id="monaco-container">edit vue</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import * as monaco from 'monaco-editor'

export default defineComponent({
  setup() {
    let json = [
      {
        label: '',
        id: '',
        children: [
          {
            label: '',
            id: '',
            children: [
              {
                label: '',
                id: '',
                children: [],
              },
            ],
          },
        ],
      },
    ]

    let header = [
      {
        title: '姓名',
        type: 'byte',
        key: 'name'
      },
      {
        title: '性别',
        type: 'int',
        key: 'sex'
      },
      {
        title: '年龄',
        type: 'int',
        key: 'age'
      },
    ]

    let data = [
      {
        name: '张三',
        sex: 1,
        age: 18
      },
      {
        name: '李四',
        sex: 0,
        age: 18
      },
      {
        name: '王五',
        sex: 1,
        age: 18
      },
    ]
    let editor: any
    var modesIds = monaco.languages.getLanguages().map(function (lang) {
      return lang.id
    })
    console.log(modesIds)
    monaco.languages.registerCompletionItemProvider('sql', {
      provideCompletionItems: function (model, position) {
        // 获取当前行数
        const line = position.lineNumber

        // 获取当前列数
        const column = position.column
        // 获取当前输入行的所有内容
        const content = model.getLineContent(line)
        // 通过下标来获取当前光标后一个内容，即为刚输入的内容
        const sym = content[column - 2]
        var textUntilPosition = model.getValueInRange({
          startLineNumber: 1,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column,
        })
        var word = model.getWordUntilPosition(position)
        var range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        }
        //---------------------------------------------------
        //上面的代码仅仅是为了获取sym，即提示符
        //---------------------------------------------------
        var suggestions = []
        if (sym == '$') {
          //...
          //拦截到用户输入$，开始设置提示内容，同else中代码一致，自行拓展
        } else {
          //直接提示，以下为sql语句关键词提示
          var sqlStr = [
            'SELECT',
            'FROM',
            'WHERE',
            'AND',
            'OR',
            'LIMIT',
            'ORDER BY',
            'GROUP BY',
          ]
          for (var i in sqlStr) {
            suggestions.push({
              label: sqlStr[i], // 显示的提示内容
              kind: monaco.languages.CompletionItemKind['Function'], // 用来显示提示内容后的不同的图标
              insertText: sqlStr[i], // 选择后粘贴到编辑器中的文字
              detail: '', // 提示内容后的说明
              range: range,
            })
          }
        }
        return {
          suggestions: suggestions,
        }
      },
      triggerCharacters: ['$', ''],
    })
    const initEditor = () => {
      // 初始化编辑器，确保dom已经渲染
      let dom = document.getElementById('monaco-container') as any
      editor = monaco.editor.create(dom, {
        value: '',
        //         value: `select * from yzl_order.order_m om
        // left join order_detail od
        // on om.order_no = od.order_no
        // `, //编辑器初始显示文字
        language: 'sql', //语言支持自行查阅demo
        automaticLayout: true, //自动布局
        theme: 'vs', //官方自带三种主题vs, hc-black, or vs-dark
        selectOnLineNumbers: true, //显示行号
        roundedSelection: false,
        readOnly: false, // 只读
        cursorStyle: 'line', //光标样式
        glyphMargin: true, //字形边缘
        useTabStops: false,
        fontSize: 16, //字体大小
        quickSuggestionsDelay: 500, //代码提示延时
        overviewRulerBorder: false,
      }) as any
    }
    const updateValue = () => {
      // let value = `select * from yzl_order.order_m om
      //   left join order_detail od
      //   on om.order_no = od.order_no
      //   `
      let value = `select * from yzl_order.order_m om
left join order_detail od
on om.order_no = od.order_no
`
      editor.setValue(value)

      // console.log(editor.getValue())
    }
    onMounted(() => {
      initEditor()
      setTimeout(() => {
        updateValue()
      }, 2000)
    })
  },
})
</script>


<style lang="scss" scoped>
#monaco-container {
  height: 500px;
}
</style>