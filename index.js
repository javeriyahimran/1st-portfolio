console.log("hello")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    console.log(document.getElementById('sidebar'));
    document.getElementById('sidebar').classList.toggle('sidebarGo')

    if (document.getElementById('sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';


    }
    else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';

        }, 350)

    }
})
