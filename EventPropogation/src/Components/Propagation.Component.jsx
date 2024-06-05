function Propagation () {
    return (
        <>
        <div onClick={()=>{alert("this is parent div")}} style={ {border: "1px solid black"   } } >
            parent div    
            <div onClick={(e)=> {e.stopPropagation();alert("This is child div")}} style={{border: "1px solid red"}} >
                Child div


            </div>


        </div>
        
        
        
        
        </>
    )
}
export default Propagation