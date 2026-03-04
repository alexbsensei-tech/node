export async function loadSupplements() {
    try {
        const res = await fetch("/supplements");
        const data = await res.json();

        const tbody = document.querySelector("#supplementsTable tbody");
        tbody.innerHTML = "";

        data.forEach(item => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${item.Name}</td>
                <td>${item.Serving_size}</td>
                <td><a href="${item.Link}" target="_blank">View Details</a></td>
                <td>${item.Comments}</td>
            `;
            tbody.appendChild(tr);
        });
    } catch (err) {
        console.error("Error loading supplements:", err);
    }
}