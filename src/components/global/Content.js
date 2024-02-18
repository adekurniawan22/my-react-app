const dataMenu = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Services",
        url: "/services",
    },
];
export default function Content() {
    return (
        <div className="content">
            <ul>
                {dataMenu.map((item) => (
                    <li key={item.id}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
