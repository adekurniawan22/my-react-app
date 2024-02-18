const dataSosmed = [
    {
        id: 1,
        title: "Facebook",
        url: "https://facebook.com",
    },
    {
        id: 2,
        title: "Instagram",
        url: "https://instagram.com",
    },
    {
        id: 3,
        title: "Twitter",
        url: "https://twitter.com",
    },
];
export default function Footer() {
    return (
        <footer>
            <ul>
                {dataSosmed.map((item) => (
                    <li key={item.id}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
