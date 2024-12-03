export const dateObjToDateString = (date: Date): string => {
    if (!date) return "";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth()+1).padStart(2, "0");
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
}