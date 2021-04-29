import "./App.css";
import { TeliaButton } from "@teliads/components/react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Using Telia component in React app
                <TeliaButton variant="primary">A button</TeliaButton>
            </header>
        </div>
    );
}

export default App;
