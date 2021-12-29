function evaluateDate() {
    
    const date = new Date();
    const endDate = new Date(date.getTime() + 14 * 24 * 60 * 60 * 1000);
    const formattedStartDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    let endMonth = endDate.getMonth()+1;
    endMonth = endMonth.toString().length == 1 ? `0${endMonth}` : endMonth;
    const formattedEndDate = `${endDate.getFullYear()}-${endMonth}-${endDate.getDate()}`;
    let elem = document.getElementById('date');
    elem.setAttribute("max", formattedEndDate);
    elem.setAttribute("min", formattedStartDate);

}

export { evaluateDate }
