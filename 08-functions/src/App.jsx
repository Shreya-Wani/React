const App = () => {

  // function btnClicked() {
  //   console.log('Button was clicked!')
  // }

  // function mouseEnter(){
  //   console.log('Mouse entered!')
  // }

  // function mouseLeave(){
  //   console.log('Mouse left!')
  // }

  // return (
  //   <div>
  //     <h1>Hello Guysss</h1>

  //     <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click me!</button>
  //     <button onMouseLeave={mouseLeave}>Hover over me!</button>
  //   </div>
  // )

  function inputChanging(val) {
    console.log(val)
  }

  return (
    <div>
      <input
        onChange={function(elem){
          inputChanging(elem.target.value);
        }}
        type="text"
        placeholder="Enter Name" />
    </div>
  )
}

export default App
