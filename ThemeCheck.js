var matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);
onUpdate();

function onUpdate() {
    if (matcher.matches) {
        document.querySelector("link[href='./Photos/Logos/LivToAir_Logo_Dark.png']").href = "./Photos/Logos/LivToAir_Logo_Light.png";
    }
}