let versions = {
    date: "August 29, 2024",
    ver : "0.7.1"
}

let drawerActivated = false
document.querySelector("#drawer").style.display = "none"

function showDrawer() {
    drawerActivated = !drawerActivated
    if (drawerActivated) {
        document.querySelector("#drawer").style.display = "block"
    } else {
        document.querySelector("#drawer").style.display = "none"
    }
}

document.getElementById("ftr").innerText = `
    ${versions.date}
    Copyright 2024 princej69
    Version ${versions.ver}

`