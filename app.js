// Initialize charts
const ctx1 = document.getElementById('chart1').getContext('2d');
const ctx2 = document.getElementById('chart2').getContext('2d');

const chart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Category 1',
            data: [12, 19, 3, 5],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
});

const chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Category 2',
            data: [2, 29, 5, 15],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    }
});

// Filter data dynamically
document.getElementById('filter').addEventListener('change', (event) => {
    const filterValue = event.target.value;
    // Fetch or filter data accordingly, then update charts
    updateCharts(filterValue);
});

function updateCharts(filter) {
    // Example: Based on `filter`, fetch or filter data then set chart data and update
    chart1.data.datasets[0].data = [/* filtered data */];
    chart1.update();

    chart2.data.datasets[0].data = [/* filtered data */];
    chart2.update();
}

// Export data
document.getElementById('export').addEventListener('click', () => {
    // Export logic, e.g., converting data to CSV or JSON
    alert("Data exported!");
});
const socket = new WebSocket('wss://your-websocket-server.com');

socket.onmessage = function(event) {
    const newData = JSON.parse(event.data);
    // Update chart data and refresh
    chart1.data.datasets[0].data = newData.category1;
    chart1.update();
    
    chart2.data.datasets[0].data = newData.category2;
    chart2.update();
};