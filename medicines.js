const medicines = [
  {
    name: "Paracetamol",
    disease: "Cold & Flu",
    dosage: "500mg",
    brand: "XYZ Pharma",
    image: "images/paracetmol.jpg"
  },
  {
    name: "Aspirin",
    disease: "Headache",
    dosage: "300mg",
    brand: "ABC Labs",
    image: "images/aspirin.jpg"
  },
  {
    name: "Metformin",
    disease: "Diabetes",
    dosage: "500mg",
    brand: "HealthPlus",
    image: "images/Metformin.jpeg"
  },
  {
    name: "Amlodipine",
    disease: "Blood Pressure",
    dosage: "5mg",
    brand: "PharmaX",
    image: "images/amlodipine.jpg"
  },
  {
    name: "Omeprazole",
    disease: "Stomach Pain",
    dosage: "20mg",
    brand: "MedCare",
    image: "images/omeprazole.jpg"
  },
  {
    name: "Loratadine",
    disease: "Allergy",
    dosage: "10mg",
    brand: "AllerMed",
    image: "images/Loratadine.jpg"
  },
  {
    name: "Ibuprofen",
    disease: "Cold & Flu",
    dosage: "400mg",
    brand: "ReliefCorp",
    image: "images/Ibuprofen.jpg"
  },
  {
    name: "Cetirizine",
    disease: "Allergy",
    dosage: "10mg",
    brand: "Zytec Health",
    image: "images/Cetirizine.jpeg"
  },
  {
    name: "Glibenclamide",
    disease: "Diabetes",
    dosage: "5mg",
    brand: "GlucoPharma",
    image: "images/Glibenclamide.jpeg"
  },
  {
    name: "Losartan",
    disease: "Blood Pressure",
    dosage: "50mg",
    brand: "CardioCare",
    image: "images/Losartan.jpeg"
  },
  {
    name: "Pantoprazole",
    disease: "Stomach Pain",
    dosage: "40mg",
    brand: "DigestWell",
    image: "images/Pantoprazole.jpg"
  },
  {
    name: "Ranitidine",
    disease: "Stomach Pain",
    dosage: "150mg",
    brand: "AcidFix",
    image: "images/Ranitidine.jpg"
  },
  {
    name: "Chlorpheniramine",
    disease: "Cold & Flu",
    dosage: "4mg",
    brand: "FluGone",
    image: "images/Chlorpheniramine.jpg"
  },
  {
    name: "Naproxen",
    disease: "Headache",
    dosage: "250mg",
    brand: "PainAway",
    image: "images/Naproxen.jpeg"
  },
  {
    name: "Gliclazide",
    disease: "Diabetes",
    dosage: "80mg",
    brand: "Diabeta",
    image: "images/Gliclazide.jpg"
  },
  {
    name: "Hydrochlorothiazide",
    disease: "Blood Pressure",
    dosage: "25mg",
    brand: "Thiazidex",
    image: "images/Hydrochlorothiazide.jpg"
  },
  {
    name: "Levocetirizine",
    disease: "Allergy",
    dosage: "5mg",
    brand: "Zyxal Meds",
    image: "images/Levocetirizine.jpg"
  },
  {
    name: "Diclofenac",
    disease: "Headache",
    dosage: "50mg",
    brand: "Relaxa",
    image: "images/Diclofenac.jpg"
  },
  {
    name: "Cough Syrup DX",
    disease: "Cold & Flu",
    dosage: "10ml",
    brand: "CofStop",
    image: "images/Cough Syrup DX.jpg"
  },
  {
    name: "Domperidone",
    disease: "Stomach Pain",
    dosage: "10mg",
    brand: "DigestAid",
    image: "images/Domperidone.jpg"
  }
];

function displayMedicineCards(data) {
  const container = document.getElementById("medicineCards");
  container.innerHTML = "";
  data.forEach(med => {
    const card = `
      <div class="medicine-card">
        <img src="${med.image}" alt="${med.name}">
        <div class="card-content">
          <h4>${med.name}</h4>
          <p><strong>Disease:</strong> ${med.disease}</p>
          <p><strong>Dosage:</strong> ${med.dosage}</p>
          <p><strong>Brand:</strong> ${med.brand}</p>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

function filterCardsByDropdown() {
  const selectedDisease = document.getElementById("diseaseSelect").value;
  const filtered = selectedDisease
    ? medicines.filter(med => med.disease === selectedDisease)
    : medicines;
  displayMedicineCards(filtered);
}

window.onload = () => {
  displayMedicineCards(medicines);
};
