const App = ({ initialButtonText, initialButtonClassName }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [buttonClassName, setButtonClassName] = React.useState(
    initialButtonClassName
  )

  const onButtonClick = () => {
    buttonText === initialButtonText
      ? setButtonText('Hello from React')
      : setButtonText(initialButtonText)
    buttonClassName === initialButtonClassName
      ? setButtonClassName('btn_style_2')
      : setButtonClassName(initialButtonClassName)
  }

  return (
    <div className="app">
      <button onClick={onButtonClick} className={buttonClassName}>
        {buttonText}
      </button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <App initialButtonText="Click here" initialButtonClassName="btn_style_1" />
)
