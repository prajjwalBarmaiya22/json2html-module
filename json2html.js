export default function json2html(data) {
    // Start the HTML table with a data-user attribute
    let html = `<table data-user="barmaiya22jnv@gmail.com">
                <thead>
                    <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
                </thead>
                <tbody>`;
    
    // Loop through each object in the data array
    data.forEach(item => {
        // Add each row of data to the HTML table
        html += <tr><td>${item.Name || ''}</td><td>${item.Age || ''}</td><td>${item.Gender || ''}</td></tr>;
    });

    // Close the table tags
    html += `</tbody></table>`;
    
    return html;  // Return the HTML table as a string
}