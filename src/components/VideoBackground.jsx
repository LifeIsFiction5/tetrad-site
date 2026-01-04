import styles from "./VideoBackground.module.css";

export default function VideoBackground({ srcMp4, srcWebm, poster, children }) {
    return (
        <div className={styles.wrap}>
            <video
                className={styles.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={poster}
                >
                    {srcWebm && <source src={srcWebm} type="video/webm" />}
                    <source src={srcMp4} type="video/mp4" />
                </video>

                {/* Dark overlay, so text is readable */}
                <div className={styles.overlay} />

                {/* Page content sits above video */}
                <div className={styles.content}>
                    {children}
                </div>
        </div>
    );
}
