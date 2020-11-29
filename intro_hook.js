import React, {useEffect, useState} from 'react'
function intro_hook() {
const [count, setCount] = useState(0)
const [name, setName]=useState("")
// const increment=()=> {
// setCount(count+1)
// }
const handleChange =(e)=> {
    setName(e.target.value)
}
useEffect(() => {
console.log("component updated"+ count)
    }, [count])
return(
    <div className="App">
        <h1>Workshop hooks</h1>
        <button onClick={()=> setCount(count + 1)}>+</button>
        <p>{count}</p>
        <input onChange={handleChange} />
        <p>name:{name}</p>
    </div>
)
}

export default hook
