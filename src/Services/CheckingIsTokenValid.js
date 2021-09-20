export const CheckingIsTokenValid = (arrayOfData, historyVar) => {
  if (
    arrayOfData === "jwt expired" ||
    arrayOfData === "jwt malformed" ||
    arrayOfData === "invalid token" ||
    arrayOfData === undefined
  ) {
    localStorage.clear();
    historyVar.push("/login");
    historyVar.go("/login");
  }
  return null;
};
