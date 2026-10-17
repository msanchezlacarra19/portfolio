import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./themes/AppTheme";

function App() {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
}
export default App;