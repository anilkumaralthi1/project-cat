function switchOff() {
document.getElementById('switchStatus').textContent="Switched off"
document.getElementById('offSwitch').style.backgroundColor="gray"
document.getElementById('onSwitch').style.backgroundColor="green"
document.getElementById('bulbImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
document.getElementById('catImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
}
function switchOn() {
    document.getElementById('switchStatus').textContent="Switched on"
    document.getElementById('offSwitch').style.backgroundColor="red"
document.getElementById('onSwitch').style.backgroundColor="gray"
document.getElementById('bulbImage').src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png'
document.getElementById('catImage').src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png'
}
    
