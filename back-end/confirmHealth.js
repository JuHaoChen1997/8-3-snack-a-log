const confirmHealth = (snack) => {
  let { fiber, protein, added_sugar } = snack;
  const fiberValue = parseInt(fiber);
  const proteinValue = parseInt(protein);
  const added_sugarValue = parseInt(added_sugar);

  //if fiber, protein, added_sugar is not a num, then can not use them to determine healthy
  if (isNaN(fiberValue) || isNaN(proteinValue) || isNaN(added_sugarValue)) {
    return null;
  }

  if ((fiberValue >= 5 || proteinValue >= 5) && added_sugarValue < 5) {
    return true;
  } else {
    return false;
  }
};

module.exports = confirmHealth;
