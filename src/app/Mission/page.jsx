import styles from "./MissionPage.module.css";
import SiteHeader from "../../components/SiteHeader";
import Footer from "../../components/Footer";
import LogoMark from "../../components/LogoMark";
import MissionHub from "../../components/MissionHub";

export default function MissionPage() {
    return (
        <>
        <SiteHeader />
        <main className={styles.main}>
            <MissionHub />
        </main>
        <Footer />
        </>
            );
        }