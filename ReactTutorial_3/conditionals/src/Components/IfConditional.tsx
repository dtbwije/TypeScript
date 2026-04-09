function IfConditional() {
  const condition = true;
  let elementVariable;
  if(condition){
      elementVariable = <div>true</div>
  } else {
      elementVariable = <div>false</div>
  }

  return (
      <>
      <h3>Element Variables</h3>
      {elementVariable}
      </>
  )
}

export default IfConditional