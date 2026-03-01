const today = new Date("2024-10-21T00:00:00");
const [year, month, day]= [
    today.getFullYear(),
    today.getMonth() +1,
    today.getDate(),
];
console.log(year + "年" + month + "月" + day + "日");