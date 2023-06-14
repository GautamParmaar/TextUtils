import React,{useState} from 'react'


export default function TextForms
(props) {
 
  const [text,setText]=useState("")

  const handleUpClick=(e)=>{
    // console.log("uppercase clicked" +text);
    e.preventDefault();
    let newText=text.toUpperCase()
    setText(newText)
  }
   const handleLoClick=(e)=>{
    // console.log("uppercase clicked" +text);
    e.preventDefault();
    let newText=text.toLowerCase()
    setText(newText)
  }
  const handleOnChange=(event)=>{
    // console.log("Onchange")
    setText(event.target.value)
  }
  const handleCLRClick=(e)=>{
    e.preventDefault();

    let newText=""
    setText(newText);
  }

  return (
    <>
    <div>
    
    <form>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    
    <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} rows="8"></textarea>
    
    <button  className="btn btn-primary my-3 mx-2" onClick={handleUpClick}  >Convert to UpperCase</button>
    <button  className="btn btn-primary my-3 mx-2" onClick={handleLoClick}  >Convert to LowerCase</button>
    <button  className="btn btn-primary my-3" onClick={handleCLRClick}  >Clear</button>


    </div>
    </form>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words & {text.length} characters</p>
    <h2>Preview</h2>
    <p>{text}</p>
    
    </div>
    </>
  )
}
