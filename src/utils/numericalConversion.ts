export const numberRepresentation = (value: any, digits = 2) => {
  let aux: any = convertNumber(value);
  if (validateNumber(aux)) {
    const formato = { minimumFractionDigits: digits, maximumFractionDigits: digits }
    aux = aux.toLocaleString('pt-BR', formato);
  }
  else {
    aux = "";
  }
  return aux;
}

export const convertNumber = (value: any) => {
  let aux = value;
  if (isNaN(aux) && typeof aux === "string" && aux.includes(",")) {
    aux = aux.replace(".", "").replace(",", ".");
  }
  else if (isNaN(aux)) {
    return 0;
  }

  return parseFloat(aux);
}

export const validateNumber = (value: any) => {
  let auxValue = convertNumber(value);
  return !isNaN(auxValue) && typeof auxValue === 'number';
}