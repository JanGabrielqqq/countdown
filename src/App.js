import Coundown from "./Components/Coundown";
import Header from "./Components/Header";
import styles from "./App.module.scss";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal/Modal";
import LapHistoryModal from "./Components/Modal/LapHistoryModal";
import { useSelector } from "react-redux";

function App(props) {
  const showLogHistory = useSelector((state) => state.lapTime.showLogHistory);
  const isSubmitted = useSelector((state) => state.time.isSubmitted);

  return (
    <>
      <div className={styles.container}>
        <LapHistoryModal showLogHistory={showLogHistory} />
        <Header />
        <Coundown />

        <Footer />
      </div>

      <Modal isSubmitted={isSubmitted} />
    </>
  );
}

export default App;
