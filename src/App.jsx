import { ThemeProvider, useTheme } from './themes/ThemeContext'; // useTheme es la constante (costum hook) que creamos para exportar y el ThemeProvider es la funcion
import RoutesApp from './routes/RoutesApp';
import './App.css';

const ThemeSection = () => {
  const { theme } = useTheme(); // al asociar el contexto a useTheme y hacer {theme}, extraigo el VALOR de theme que esta en el contexto. Ese VALOR viene del useState en el ThemeProvider.

return (
  <section className={`App ${theme}`}>
    <RoutesApp />
  </section>
)
}


const App = () => {
  return (
    <ThemeProvider>
      <ThemeSection />
    </ThemeProvider>
  );
};

export default App;
