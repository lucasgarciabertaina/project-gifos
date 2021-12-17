export default function isDark() {
    return sessionStorage.getItem("modo") == null || sessionStorage.getItem("modo") === "Modo Diurno" ? false : true;
}