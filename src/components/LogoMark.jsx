import styles from "./LogoMark.module.css";

export default function LogoMark({
  src = "/images/logo.png",
  alt = "Tetrad logo",
  className = "",
}) {
  return (
    <img
      className={`${styles.img} ${className}`}
      src={src}
      alt={alt}
      draggable="false"
    />
  );
}
