import AllLongestStrings from './components/AllLongestStrings'
import AlternatingSums from './components/AlternatingSums'
import { useState, useEffect } from 'react'

function App() {
  const strings = ['ten', 'toi', 'la', 'le', 'hung', 'tien']
  const weights = [60, 40, 55, 75, 64]
  const [team1, team2] = AlternatingSums(weights)
  const [color, setColor] = useState('#f0f0cf')
  const [isCopied, setIsCospied] = useState(false)
  const [gradient, setGradient] = useState('')
  const [gradientColor1, setGradientColor1] = useState('')
  const [gradientColor2, setGradientColor2] = useState('')

  const handleRandom = () => {
    const randomColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16)
    setColor(randomColor)
  }

  function gradientColor() {
    const randomColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16)
    const color1 = randomColor
    const color2 = '#' + ((Math.random() * 0xffffff) << 0).toString(16)
    setGradient(`linear-gradient(to right, ${color1}, ${color2})`)
    setGradientColor1(color1)
    setGradientColor2(color2)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(color)
    setIsCospied(true)
  }

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <div style={{backgroundColor: color}}>
      <div style={{background: gradient}}>
      <AllLongestStrings strings={strings} />
      <p>Team 1: {team1} kg</p>
      <p>Team 2: {team2} kg</p>
      <h1>Color Picker</h1>
      <p>Background color: {color}</p>
      <p>Gradient color: {gradientColor1} {gradientColor2}</p>
      <button onClick={handleRandom}>Random Color</button>
      <button onClick={gradientColor}>Random Gradient</button>
      <button onClick={handleCopy}>{isCopied ? 'Copied' : 'Copy'}</button>
      </div>
    </div>
  )
}

export default App