// Simulating company data
let companies = [
    {id: 1, name: "TechCorp", sector: "Technology", description: "Leading tech company in Country X."},
    {id: 2, name: "FinanceX", sector: "Finance", description: "Top financial institution in Country X."},
    {id: 3, name: "HealthCare X", sector: "Healthcare", description: "Healthcare services and products."}
];

// Load companies dynamically
window.onload = function() {
    loadCompanies();
};

// Load companies into portfolio section
function loadCompanies() {
    const companyList = document.getElementById('company-list');
    companyList.innerHTML = ''; // Clear previous content

    companies.forEach(company => {
        let companyDiv = document.createElement('div');
        companyDiv.className = 'company';
        companyDiv.innerHTML = `
            <h3>${company.name}</h3>
            <p>Sector: ${company.sector}</p>
            <button onclick="viewCompany(${company.id})">View Details</button>
        `;
        companyList.appendChild(companyDiv);
    });
}

// View Company Details
function viewCompany(id) {
    const company = companies.find(c => c.id === id);
    const detailsSection = document.getElementById('company-details');
    const portfolioSection = document.getElementById('portfolio');
    const detailsContent = document.getElementById('details-content');

    detailsContent.innerHTML = `
        <h3>${company.name}</h3>
        <p>Sector: ${company.sector}</p>
        <p>${company.description}</p>
    `;

    portfolioSection.style.display = 'none';
    detailsSection.style.display = 'block';
}

// Go back to portfolio
function goBack() {
    document.getElementById('company-details').style.display = 'none';
    document.getElementById('portfolio').style.display = 'block';
}

// Search Functionality
document.getElementById('search').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const filteredCompanies = companies.filter(company => company.name.toLowerCase().includes(query));
    
    const companyList = document.getElementById('company-list');
    companyList.innerHTML = '';

    filteredCompanies.forEach(company => {
        let companyDiv = document.createElement('div');
        companyDiv.className = 'company';
        companyDiv.innerHTML = `
            <h3>${company.name}</h3>
            <p>Sector: ${company.sector}</p>
            <button onclick="viewCompany(${company.id})">View Details</button>
        `;
        companyList.appendChild(companyDiv);
    });
});
