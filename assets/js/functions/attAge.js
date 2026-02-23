export function attAge() {
    const today = new Date().getFullYear()
    const niver = 2002
    const age = today - niver
    document.getElementById('idadeLucas').innerHTML = age
}