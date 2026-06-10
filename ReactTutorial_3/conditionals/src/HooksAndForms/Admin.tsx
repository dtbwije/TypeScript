import { useState } from "react";

function SigninForm() {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Username: ${userName}, Password: ${password}`);
    }

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={userName} onChange={(event) => setUserName(event.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SigninForm;