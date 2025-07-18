import { useState } from 'react'
import './App.css'

function App() {

  const [display, setDisplay] = useState('0')

  const btnList = [
    { id: 'zero', num: 0 },
    { id: 'one', num: 1 },
    { id: 'two', num: 2 },
    { id: 'three', num: 3 },
    { id: 'four', num: 4 },
    { id: 'five', num: 5 },
    { id: 'six', num: 6 },
    { id: 'seven', num: 7 },
    { id: 'eight', num: 8 },
    { id: 'nine', num: 9 },
    { id: 'add', num: '+' },
    { id: 'subtract', num: '-' },
    { id: 'multiply', num: '*' },
    { id: 'divide', num: '/' },
    { id: 'decimal', num: '.' },
    { id: 'equals', num: '=' },
    { id: 'clear', num: 'C' },
  ]

  const digitMap: Record<string, string> = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
  }

  const operatorMap: Record<string, string> = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/',
    decimal: '.', // 将小数点也纳入运算符管理，方便处理逻辑
  }

  const calculatorExpression = (expression: string): string => {
    try {
      if (expression.endsWith('.')) {
        expression = expression.slice(0, -1)
      }


      const rawTokens = expression.match(/(\d+\.?\d*)|([\+\-\*\/])/g)

      if (!rawTokens || rawTokens.length === 0) {
        return 'Error'
      }
      console.log('tokens', rawTokens)
      const tokens: string[] = [];
      for (let i = 0; i < rawTokens.length; i++) {
        const token = rawTokens[i]

        if (token === '-' && i > 0 && ['+', '*', '/'].includes(rawTokens[i - 1])) {
          if (i + 1 < rawTokens.length && !isNaN(parseFloat(rawTokens[i + 1]))) {
            tokens.push('-' + rawTokens[i + 1])
            i++
          } else {
            tokens.push(token)
          }
        } else if (token === '-' && i === 0) {
          if (i + 1 < rawTokens.length && !isNaN(parseFloat(rawTokens[i + 1]))) {
            tokens.push('-' + rawTokens[i + 1])
            i++
          } else {
            return 'Error'
          }
        } else {
          tokens.push(token)
        }
      }

      if (tokens.length === 0 || isNaN(parseFloat(tokens[0]))) {
        return 'Error'
      }

      let result: number = parseFloat(tokens[0])
      let operator: string | null = null
      let i = 1

      while (i < tokens.length) {
        operator = tokens[i]
        const nextNumber = parseFloat(tokens[i + 1])

        if (isNaN(nextNumber)) {
          return 'Error'
        }

        switch (operator) {
          case '+':
            result += nextNumber
            break
          case '-':
            result -= nextNumber
            break
          case '*':
            result *= nextNumber
            break
          case '/':
            if (nextNumber === 0) {
              return 'Error: Div by 0'
            }
            result /= nextNumber
            break
          default:
            return 'Error'
        }
        i += 2
      }
      return String(parseFloat(result.toFixed(10)))
    } catch (error) {
      console.error('Calculator Error:', error)
      return 'Error'
    }
  }

  const btnClick = (id: string) => {
    if (digitMap[id]) {
      const digit = digitMap[id]

      setDisplay(prev => {
        if (prev === '0' || prev === 'Error') {
          if (digit === '0') {
            return '0'
          }
          return digit

        }
        return prev + digit
      })
      return
    }
    if (operatorMap[id]) {
      const operator = operatorMap[id]

      setDisplay(prev => {
        if (prev === 'Error') return '0'
        const lastChar = prev.slice(- 1)

        const isLastcharOperator = ['+', '-', '*', '/', '.'].includes(lastChar)

        if (id === 'decimal') {
          const parts = prev.split(/[\+\-\*\/]/)
          const currentNumber = parts[parts.length - 1]
          if (currentNumber.includes('.')) {
            return prev
          }
        }

        if (id === 'subtract' && isLastcharOperator) {
          return prev + operator
        }

        if (isLastcharOperator && ['+', '-', '*', '/'].includes(operator)) {
          return prev.slice(0, -1) + operator
        }
        return prev + operator
      })
      return
    }

    if (id === 'clear') {
      setDisplay('0')
      return
    }

    if (id === 'equals') {
      setDisplay(prev => {
        const lastChar = prev.slice(-1)
        if (['+', '-', '*', '/'].includes(lastChar)) {
          return 'Error'
        }
        try {
          const result = calculatorExpression(display)
          return result
        } catch (error) {
          console.error('Calculator Error:', error)
          return 'Error'
        }
      })
      return
    }
  }

  return (
    <>
      <div className="container">
        <div id="display" className="display">{display}</div>
        <div className="buttons">
          {btnList.map((btn) => <button key={btn.id} id={btn.id} onClick={() => btnClick(btn.id)}>{btn.num}</button> )}
        </div>
      </div>
    </>
  )
}

export default App
