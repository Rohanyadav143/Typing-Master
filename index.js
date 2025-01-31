function startTyping(event){
    event.preventDefault();
    const timeValue = document.getElementById("time");
    const selectedTimeValue = timeValue.value;
    const typeValue = document.getElementById("type");
    const selectedTypeValue = typeValue.value;
    window.location.href = `typingPage.html?time1=${selectedTimeValue}&type1=${selectedTypeValue}`;
}