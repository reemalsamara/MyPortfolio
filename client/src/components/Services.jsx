function Services() {
    const services = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Consulting",
    ];

    return (
        <div className="page services">
            <h2>Services</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
        </div>
    );
}

export default Services;
