function alocarCarros(plateList) {
  const sectors = { A: 0, B: 0, C: 0 };
  const caps = { A: 2, B: 2, C: 2 };
  const keys = Object.keys(sectors);
  for (let i = 0; i < plateList.length; i++) {
    if (sectors.A >= caps.A && sectors.B >= caps.B && sectors.C >= caps.C) {
      console.log("Estacionamento cheio");
      break;
    }
    let minCount = 999;
    let targetKey = keys[0];
    for (let j = 0; j < keys.length; j++) {
      if (sectors[keys[j]] < caps[keys[j]] && sectors[keys[j]] < minCount) {
        minCount = sectors[keys[j]];
        targetKey = keys[j];
      }
    }
    sectors[targetKey]++;
  }
  console.log("Setor A: " + sectors.A + " carros");
  console.log("Setor B: " + sectors.B + " carros");
  console.log("Setor C: " + sectors.C + " carros");
}

alocarCarros(["ABC1234", "DEF5678", "GHI9012", "JKL3456", "MNO7890"]);