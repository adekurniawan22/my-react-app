import Logo from "../../img/logo.jpg";
export default function Header() {
    return (
        <header>
            <div class="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div class="header">
                <span>Ade Kurniawan</span>
                <p>an innovation solar design practice that brings solar energy into daily life</p>
            </div>
        </header>
    );
}
