let versions = {
    date: "August 27, 2023",
    ver : "0.6.4"
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
    Copyright 2023 princej69
    Version ${versions.ver}

`