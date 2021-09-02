module.exports.minute = minute;
module.exports.hour = hour;
module.exports.day_message = day_message;
module.exports.day_of_the_week = day_of_the_week;
module.exports.day_of_the_week1 = day_of_the_week1;
module.exports.full_day_message = full_day_message;


//tylko godzina
function hour() {
  var date = new Date();
  var hour = date.getHours();
  if (hour == 24)
    hour = "0";
  if (hour < 10)
    hour = "0" + hour;
  return hour;
}
//tylko minuta
function minute() {
  var date = new Date();
  var minute = date.getMinutes();
  if (minute < 10)
    minute = "0" + minute;
  return minute;
}

//data + pełna nazwa miesiąca + rok
function full_day_message() {
  var date = new Date();
  var fullMonth = full_month();

  return date.getDate() + " " + fullMonth + " " + date.getFullYear() + "r.";
}

//data liczbowo
function day_message() {
  var date = new Date();
  var month = Number.parseInt(date.getMonth()) + 1;
  return date.getDate() + "." + month + "." + date.getFullYear() + "r.";
}

//nazwa dnia tygodnia do wiadomosci powitalnej
function day_of_the_week() {
  var date = new Date();
  var dayOfTheWeek = date.getDay();
  switch (dayOfTheWeek) {
    case 0:
      dayOfTheWeek = "Niedziele";
      break;
    case 1:
      dayOfTheWeek = "Poniedziałek";
      break;
    case 2:
      dayOfTheWeek = "Wtorek";
      break;
    case 3:
      dayOfTheWeek = "Środe";
      break;
    case 4:
      dayOfTheWeek = "Czwartek";
      break;
    case 5:
      dayOfTheWeek = "Piątek";
      break;
    case 6:
      dayOfTheWeek = "Sobote";
      break;
    default:
      dayOfTheWeek = "";
  }

  return dayOfTheWeek;
}

//nazwa dnia tygodnia, tytul kanalu glosowego
function day_of_the_week1() {
  var date = new Date();
  var dayOfTheWeek = date.getDay();
  switch (dayOfTheWeek) {
    case 0:
      dayOfTheWeek = "Niedziela";
      break;
    case 1:
      dayOfTheWeek = "Poniedziałek";
      break;
    case 2:
      dayOfTheWeek = "Wtorek";
      break;
    case 3:
      dayOfTheWeek = "Środa";
      break;
    case 4:
      dayOfTheWeek = "Czwartek";
      break;
    case 5:
      dayOfTheWeek = "Piątek";
      break;
    case 6:
      dayOfTheWeek = "Sobota";
      break;
    default:
      dayOfTheWeek = "";
  }

  return dayOfTheWeek;
}

//nazwa miesiaca
function full_month() {
  var date = new Date();
  var month = date.getMonth();
  var full_month;
  switch (month) {
    case 0:
      full_month = "Stycznia";
      break;
    case 1:
      full_month = "Luty";
      break;
    case 2:
      full_month = "Marca";
      break;
    case 3:
      full_month = "Kwietnia";
      break;
    case 4:
      full_month = "Maj";
      break;
    case 5:
      full_month = "Czerwca";
      break;
    case 6:
      full_month = "Lipca";
      break;
    case 7:
      full_month = "Sierpnia";
      break;
    case 8:
      full_month = "Września";
      break;
    case 9:
      full_month = "Października";
      break;
    case 10:
      full_month = "Listopada";
      break;
    case 11:
      full_month = "Grudnia";
      break;

  }
  return full_month;
}



