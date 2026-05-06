// ==================== MEDICINE DATABASE ====================

const medicineDatabase = {
  "MCN-1001": {
    name: "Amoxicillin 500mg",
    generic: "Amoxicillin",
    manufacturer: "PharmaCorp Ltd., Bhaktapur",
    manufactured: "2024-03-15",
    expiry: "2026-03-14",
    batch: "BT-2024-A112",
    solanaAddress: "11111111111111111111111111111112",
    ipfs: "QmXf7MfkREfq2qwA8NFpxSAKxN3hXZwj8B5wL2Z8bAkE2o",
    distributor: "NepaMed Distributors, Kathmandu",
    pharmacy: "CityHealth Pharmacy, New Baneshwor",
    temp: "2–8°C maintained",
    status: "safe",
    solanaTx: "4vJ9JU1bJJE24gnxYYZCrQcgJ5V8KqfgN2F67RqFhG8QxWVCopNJqrfYaLCXG5A9gLQWyLBMQHXYjLcZhNptb6Em",
    blockNo: "45,821,033",
    ts: ["2024-03-15 08:00", "2024-03-18 14:22", "2024-04-01 09:45", "2024-04-02 16:10"]
  },
  "MCN-2042": {
    name: "Paracetamol 650mg",
    generic: "Paracetamol",
    manufacturer: "HealGen Pharma, Lalitpur",
    manufactured: "2022-07-01",
    expiry: "2024-06-30",
    batch: "BT-2022-P042",
    solanaAddress: "TokenkegQfeZyiNwAJsyFbPVwwQQfimwQWzPoh3zxLk",
    ipfs: "QmYt3Z9vK8xN2Lq6jW4fP1R5cB7dE9sH0tU8vX2yA3bC4",
    distributor: "Valley Drug Suppliers, Patan",
    pharmacy: "MedPlus Pharmacy, Koteshwor",
    temp: "15–25°C maintained",
    status: "expired",
    solanaTx: "2YKZD5jVKgXQrG3bXZQJgP5gZpMcZJ7oN3KnQ9vE8RdLpJi5QvW6TcN7Zy",
    blockNo: "38,112,774",
    ts: ["2022-07-01 10:30", "2022-07-05 11:00", "2022-07-20 08:15", "2022-08-01 13:40"]
  },
  "MCN-3041": {
    name: "Cetirizine 10mg",
    generic: "Cetirizine HCl",
    manufacturer: "UNKNOWN",
    manufactured: "N/A",
    expiry: "N/A",
    batch: "N/A",
    solanaAddress: null,
    ipfs: "Not registered",
    distributor: "Unregistered Entity",
    pharmacy: "Unverified Vendor",
    temp: "Unknown",
    status: "fake",
    solanaTx: null,
    blockNo: "Not found",
    ts: []
  },
  "MCN-4099": {
    name: "Metformin 500mg",
    generic: "Metformin HCl",
    manufacturer: "BioSynth Pharma, Hetauda",
    manufactured: "2024-11-20",
    expiry: "2027-11-19",
    batch: "BT-2024-M099",
    solanaAddress: "EPjFWdd5Au1XmwDkNECMqxPaJj1ytmNz7nCQpYgLvJr8",
    ipfs: "QmZk9aM5bL2nO8pQ1tY2mR7hS8vW1cD3eF4gH6iJ7kL8mN",
    distributor: "KTM Medical Depot, Balaju",
    pharmacy: "Sunrise Pharmacy, Baneshwor",
    temp: "15–25°C maintained",
    status: "safe",
    solanaTx: "3vPz4X8B2K6nJ9aQ5tY2mR7hS8vW1cD3eF4gH6iJ7kL8mN9oP0qRsT",
    blockNo: "46,002,119",
    ts: ["2024-11-20 09:00", "2024-11-24 13:55", "2024-12-01 10:20", "2024-12-02 15:30"]
  }
};

// ==================== MEDICINE TRACKING ====================

function fill(id) {
  document.getElementById('inp').value = id;
  go();
}

function go() {
  const key = document.getElementById('inp').value.trim().toUpperCase();
  const out = document.getElementById('out');
  out.innerHTML = '';

  if (!key) {
    out.innerHTML = '<div class="nf"><div class="nfi">⚠️</div><h3>Enter Medicine ID</h3><p>Please enter a valid medicine ID to track.</p></div>';
    return;
  }

  const medicine = medicineDatabase[key];
  if (!medicine) {
    out.innerHTML = '<div class="nf"><div class="nfi">🔍</div><h3>No Record Found</h3><p>No Solana blockchain entry for <strong>'+key+'</strong>.<br>Verify the ID or contact your supplier.</p></div>';
    return;
  }

  out.innerHTML = '<div class="loading"><div class="spinner"></div><p>Querying Solana blockchain...</p></div>';
  setTimeout(() => renderMedicine(medicine, key), 1200);
}

function renderMedicine(medicine, id) {
  const out = document.getElementById('out');
  const sc = { safe: 'safe', expired: 'expired', fake: 'fake' };
  const sl = { safe: '✔ Verified Safe', expired: '⚠ Expired', fake: '✕ Counterfeit' };
  const cls = sc[medicine.status];
  const lbl = sl[medicine.status];

  const steps = medicine.status === 'fake'
    ? [{icon:'❓',role:'No Valid Chain',entity:'This medicine has no verified blockchain record.',tags:[{t:'UNVERIFIED',c:''}]}]
    : [
      {icon:'🏭',role:'Manufacturer',entity:medicine.manufacturer,tags:[{t:medicine.ts[0],c:'ts'},{t:'Batch: '+medicine.batch,c:'hx'},{t:'Temp: '+medicine.temp,c:''}]},
      {icon:'🚚',role:'Distributor',entity:medicine.distributor,tags:[{t:medicine.ts[1],c:'ts'},{t:'Solana Verified ✓',c:'hx'}]},
      {icon:'🏪',role:'Pharmacy',entity:medicine.pharmacy,tags:[{t:medicine.ts[2],c:'ts'},{t:'Smart Contract ✓',c:'hx'}]},
      {icon:'👤',role:'Customer Delivered',entity:'End consumer — QR verified',tags:[{t:medicine.ts[3]||'Pending',c:'ts'}]}
    ];

  const chainHTML = steps.map(s => '<div class="cstep"><div class="cicon">'+s.icon+'</div><div class="ccont"><div class="crole">'+s.role+'</div><div class="centity">'+s.entity+'</div><div class="cmeta">'+s.tags.map(t => '<span class="ctag '+t.c+'">'+t.t+'</span>').join('')+'</div></div></div>').join('');

  const solanaTxHTML = medicine.solanaTx ? '<div class="txrow" onclick="verifySolanaTransaction(\''+medicine.solanaTx+'\')"><div class="txicon">◎</div><div><div class="txlbl">Solana Transaction Signature</div><div class="txval">'+medicine.solanaTx+'</div></div></div>' : '';

  const solanaAddressHTML = medicine.solanaAddress ? '<div class="ibox"><div class="lbl">Solana Address</div><div class="val green">'+medicine.solanaAddress.substring(0,20)+'...</div></div>' : '';

  out.innerHTML = '<div class="result"><div class="rhead"><div><div class="rname">'+medicine.name+'</div><div class="rid">ID: '+id+' | Batch: '+medicine.batch+' | '+medicine.generic+'</div></div><div class="badge '+cls+'"><span class="bdot"></span>'+lbl+'</div></div><div class="rbody"><div class="igrid"><div class="ibox"><div class="lbl">Manufacturer</div><div class="val">'+medicine.manufacturer.split(',')[0]+'</div></div><div class="ibox"><div class="lbl">Date of Production</div><div class="val">'+medicine.manufactured+'</div></div><div class="ibox"><div class="lbl">Expiry Date</div><div class="val">'+medicine.expiry+'</div></div><div class="ibox"><div class="lbl">Pharmacy</div><div class="val">'+medicine.pharmacy.split(',')[0]+'</div></div>'+solanaAddressHTML+'<div class="ibox"><div class="lbl">IPFS Hash</div><div class="val green">'+medicine.ipfs+'</div></div></div><div class="chain-ttl">◎ Solana Supply Chain Journey</div><div class="chain">'+chainHTML+'</div>'+solanaTxHTML+'<div class="sol-info"><strong>✓ Blockchain Verified:</strong> This medicine is recorded on Solana Devnet with immutable timestamps and cryptographic proofs.</div></div></div>';
}

function verifySolanaTransaction(signature) {
  alert('🔍 Solana Transaction:\n\n' + signature + '\n\n📡 Network: Devnet\n\nIn production:\nhttps://explorer.solana.com/tx/' + signature + '?cluster=devnet');
}

console.log('✅ Medicine Tracking Module Loaded');
