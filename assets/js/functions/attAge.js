export function attAge() {
    const birthDate = new Date(2002, 6, 21); // 21 de Julho de 2002
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    const element = document.getElementById('idadeLucas');
    if (element) {
        element.textContent = age;
    }
}