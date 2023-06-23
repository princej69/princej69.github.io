let versions = {
    date: "June 17, 2023",
    ver : "0.6"
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