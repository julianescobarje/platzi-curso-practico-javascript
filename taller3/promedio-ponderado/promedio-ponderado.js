function calcularPromedioPonderado(lista) {
  const notesWithCredit = lista.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
  });

  const sumOfNotesWithCredit = notesWithCredit.reduce(function (
    sum = 0,
    newVal
  ) {
    return sum + newVal;
  });

  const credits = lista.map(function (noteObject) {
    return noteObject.credit;
  });

  const sumOfCredits = credits.reduce(function (sum = 0, newVal) {
    return sum + newVal;
  });

  const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

  return promedioPonderadoNotasConCreditos;
}
