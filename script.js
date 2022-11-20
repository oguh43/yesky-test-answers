(function () {
    if (document.querySelector('button[type="submit"]').offsetParent !== null) {
        alert("Please submit the test first!")
        return
    }

    let form = Array.prototype.slice.call(document.getElementsByClassName("grafeon-generate-test")[0].children)
    let flag = false
    let n = []
    form.forEach(el => {
        if (!flag){
            if (el.tagName.toLowerCase() == "h2"){
                flag = true
            }
            return
        }
        if (el.tagName.toLowerCase() == "input"){
                flag = false
        }
        n.push(el)
    })
    n.shift()
    n = n.filter(el => el.tagName.toLowerCase() == "div")

    let res = {}
    for (let i = 0; i < n.length; i++){
        res[i] = {}
        let nx = Array.prototype.slice.call(n[i].getElementsByClassName("yesky_popover"))
        for (let j = 0; j < nx.length; j++){
            res[i][j] = nx[j].dataset.content
        }
    }

    let dl = window.document.createElement('a');
    dl.href = window.URL.createObjectURL(new Blob([JSON.stringify(res,undefined,2)], {type: 'text/plain'}));
    dl.download = 'odpovede.txt';
    document.body.appendChild(dl)
    dl.click();
    document.body.removeChild(dl)
}())
