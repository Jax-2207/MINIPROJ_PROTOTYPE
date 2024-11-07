const totalRevenueInput = document.getElementById("totalRevenueInput");
const netProfitInput = document.getElementById("netProfitInput");
const customerRetentionInput = document.getElementById("customerRetentionInput");
const salesGrowthInput = document.getElementById("salesGrowthInput");
const customerSatisfactionInput = document.getElementById("customerSatisfactionInput");
const npsInput = document.getElementById("npsInput");

const salesTrendCanvas = document.getElementById("salesTrend");
const categorySalesCanvas = document.getElementById("categorySalesPie");

let salesTrendChart;
let categorySalesChart;


function initializeCharts() {
    const salesTrendData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: 'Sales Trend',
            data: [
                parseFloat(document.getElementById("janInput").value),
                parseFloat(document.getElementById("febInput").value),
                parseFloat(document.getElementById("marInput").value),
                parseFloat(document.getElementById("aprInput").value),
                parseFloat(document.getElementById("mayInput").value),
                parseFloat(document.getElementById("junInput").value),
                parseFloat(document.getElementById("julInput").value)
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const categorySalesData = {
        labels: ['Category A', 'Category B', 'Category C', 'Category D'],
        datasets: [{
            data: [
                parseFloat(document.getElementById("categoryAInput").value),
                parseFloat(document.getElementById("categoryBInput").value),
                parseFloat(document.getElementById("categoryCInput").value),
                parseFloat(document.getElementById("categoryDInput").value)
            ],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0'
            ]
        }]
    };

    salesTrendChart = new Chart(salesTrendCanvas, {
        type: 'line',
        data: salesTrendData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    categorySalesChart = new Chart(categorySalesCanvas, {
        type: 'pie',
        data: categorySalesData,
        options: {
            responsive: true
        }
    });
}


function updateCharts() {
    salesTrendChart.data.datasets[0].data = [
        parseFloat(document.getElementById("janInput").value),
        parseFloat(document.getElementById("febInput").value),
        parseFloat(document.getElementById("marInput").value),
        parseFloat(document.getElementById("aprInput").value),
        parseFloat(document.getElementById("mayInput").value),
        parseFloat(document.getElementById("junInput").value),
        parseFloat(document.getElementById("julInput").value)
    ];
    salesTrendChart.update();

    categorySalesChart.data.datasets[0].data = [
        parseFloat(document.getElementById("categoryAInput").value),
        parseFloat(document.getElementById("categoryBInput").value),
        parseFloat(document.getElementById("categoryCInput").value),
        parseFloat(document.getElementById("categoryDInput").value)
    ];
    categorySalesChart.update();
}


const inputs = [
    totalRevenueInput,
    netProfitInput,
    customerRetentionInput,
    salesGrowthInput,
    customerSatisfactionInput,
    npsInput,
    document.getElementById("janInput"),
    document.getElementById("febInput"),
    document.getElementById("marInput"),
    document.getElementById("aprInput"),
    document.getElementById("mayInput"),
    document.getElementById("junInput"),
    document.getElementById("julInput"),
    document.getElementById("categoryAInput"),
    document.getElementById("categoryBInput"),
    document.getElementById("categoryCInput"),
    document.getElementById("categoryDInput"),
];

inputs.forEach(input => {
    input.addEventListener('input', updateCharts);
});


initializeCharts();


const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    
    document.querySelectorAll('div').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
