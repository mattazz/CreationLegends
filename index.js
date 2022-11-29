
let i = 1;
let x = 0;

function logorot(){
    let rotation = 'rotate(' + x + 'deg)'
    $('#logo-image').css('transform', rotation)
    x++
    if(i<1000){
        setTimeout(logorot, 50);
    }
}
logorot()

