import { createRoot } from "react-dom/client";

function MyButton() {
  return (<button>I am button</button>);
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <MyButton />
    </div>
  );
}
const container = document.getElementById('root');

if (container) {
  createRoot(container).render(<MyApp />);
}