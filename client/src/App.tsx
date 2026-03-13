/*
 * DESIGN: Rigore Nordico con Calore Mediterraneo
 * App: routing completo con Navbar e Footer persistenti
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ChiSono from "./pages/ChiSono";
import AreeDiAttivita from "./pages/AreeDiAttivita";
import CodiceRosso from "./pages/CodiceRosso";
import DirittoDiFamiglia from "./pages/DirittoDiFamiglia";
import CasiApproccio from "./pages/CasiApproccio";
import Credenziali from "./pages/Credenziali";
import Contatti from "./pages/Contatti";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chi-sono" component={ChiSono} />
      <Route path="/aree-di-attivita" component={AreeDiAttivita} />
      <Route path="/codice-rosso" component={CodiceRosso} />
      <Route path="/diritto-di-famiglia" component={DirittoDiFamiglia} />
      <Route path="/casi-e-approccio" component={CasiApproccio} />
      <Route path="/credenziali" component={Credenziali} />
      <Route path="/contatti" component={Contatti} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
