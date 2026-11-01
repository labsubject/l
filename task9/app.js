import React,{Component} from "react"
/*function Greet(props){
  return(
    <div>
      <h1>
      Hello {props.name}!
      </h1>
    </div>
  )
}
function App(){
  return(
    <div>
      <h1><Greet name="varsha"/></h1>
    </div>
  )
}
  */
 class Greet extends Component{
  render(){
    return(
      <div>Hello {this.props.name}!</div>
    )
  }
 }
 class App extends Greet{
  render(){
    return(
      <div>
        <h1><Greet name="varsha"/></h1>
      </div>
    )
  }
 }
export default App