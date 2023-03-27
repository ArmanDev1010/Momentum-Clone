const $time = document.getElementById("time"),
    $one = document.querySelector(".one"),
    $two = document.querySelector(".two"),
    $task_name = document.querySelector(".task_name"),
    $check = document.querySelector(".check"),
    $good = document.getElementById("good"),
    $name = document.getElementById("name"),
    $task = document.getElementById("task"),
    $focusBox = document.getElementById("focusBox"),
    $delete_btn = document.getElementById("delete_btn");

$task.addEventListener("keypress", w => {
    if (w.key === "Enter") {
        console.log(w.target.value)
        w.preventDefault();
        if (!w.target.value == "") {
            $one.style.display = "none";
            $two.style.display = "flex";
            localStorage.setItem("mainFocus", w.target.value)
            $task_name.innerText = localStorage.getItem("mainFocus");
        }
        w.target.value = "";
    }
})

$check.onclick = () => {
    if ($check.checked == true) {
        $two.style.textDecoration = "line-through"
        $two.style.color = "#e3e3e3"
    } else {
        $two.style.textDecoration = "none"
        $two.style.color = "#ffff"
    }
}

if (localStorage.getItem("mainFocus")) {
    $task_name.innerText = localStorage.getItem("mainFocus");
    $one.style.display = "none";     
} else {
    $two.style.display = "none"
}


$delete_btn.onclick = () => {
    localStorage.removeItem("mainFocus");
    $two.style.display = "none"
    $one.style.display = "block";
}

const time = () => {
    let date = new Date();
    hour = date.getHours(),
    minutes = date.getMinutes();
    
    $time.innerText = `${addZero(hour)}:${addZero(minutes)}`
}

const addZero = (num) => {
    return (num < 10 ? "0" : "") + JSON.stringify(num)
}

const timeOfDay = () => {
    const date = new Date();
    let hour = date.getHours();

    const morning = (hour >= 4 && hour <= 11),
        afternoon = (hour >= 12 && hour <= 16),
        evening = (hour >= 17 && hour <= 3)

    if (morning) {
        $good.innerText = `Good morning, `
    }
    if (afternoon) {
        $good.innerText = `Good afternoon, `
    }
    else {
        $good.innerText = `Good evening, `
    }
}

$name.onclick = (e) => {
    e.target.innerText == "[name]" ? $name.innerText = "" : null
}

$name.oninput = (e) => {
    localStorage.setItem("name", e.target.innerText);
}

if (localStorage.getItem("name") == "") {
    localStorage.setItem("name", "[name]");
}

$name.innerText = localStorage.getItem("name")

timeOfDay()

setInterval(time, 1000)
