const validateStringField = (value, fieldName) => {
  if (!value || typeof value !== 'string' || value.trim().length === 0) {
    return `${fieldName} must be a non-empty string.`;
  }
  return null;
};

const validateNonNegativeNumber = (value, fieldName) => {
  if (value === undefined || typeof value !== 'number' || value < 0) {
    return `${fieldName} must be a non-negative number.`;
  }
  return null;
};

const validateNonNegativeInteger = (value, fieldName) => {
  const numberError = validateNonNegativeNumber(value, fieldName);
  if (numberError) return numberError;
  
  if (!Number.isInteger(value)) {
    return `${fieldName} must be an integer.`;
  }
  return null;
};

const validateProductCreation = (productData) => {
  const { name, price, quantity } = productData;
  
  return (
    validateStringField(name, 'Product name') ||
    validateNonNegativeNumber(price, 'Product price') ||
    validateNonNegativeInteger(quantity, 'Product quantity')
  );
};

const validateProductUpdate = (productData) => {
  const { name, price, quantity } = productData;
  
  if (name !== undefined) {
    const nameError = validateStringField(name, 'Product name');
    if (nameError) return nameError;
  }
  
  if (price !== undefined) {
    const priceError = validateNonNegativeNumber(price, 'Product price');
    if (priceError) return priceError;
  }
  
  if (quantity !== undefined) {
    const quantityError = validateNonNegativeInteger(quantity, 'Product quantity');
    if (quantityError) return quantityError;
  }
  
  return null;
};

const validateProductId = (id) => {
  return validateStringField(id, 'Product ID');
};


const validatePromoInput = ({ name, percentage }) => {
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return 'Promo code name must be a non-empty string.';
    }
    if (
      percentage === undefined ||
      typeof percentage !== 'number' ||
      percentage <= 0 ||
      percentage > 100
    ) {
      return 'Promo code percentage must be a number between 1 and 100.';
    }
    return null;
  };

module.exports = {
  validateProductInput: validateProductCreation,
  validateProductInputUpdate: validateProductUpdate,
  validateProductId,
  validatePromoInput
};