function dropdown(index) {
    let collapse = document.querySelectorAll('[data-active]')
    let show = document.querySelectorAll('.collapse')
    let arrow = document.querySelectorAll('.arrow')
    if (show[index].className != 'collapse show') {
        collapse[index].classList.add('bg-right-collapse');
        arrow[index].style.transform = "rotate(180deg)";
    } else {
        collapse[index].classList.remove('bg-right-collapse');
        arrow[index].style.transform = "rotate(0deg)";
    }
}