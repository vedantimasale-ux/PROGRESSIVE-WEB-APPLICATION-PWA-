// ===============================
// 🛒 Add To Cart Function
// ===============================
function addToCart(name, price) {
    alert(name + " added to cart 🛒");
}


// ===============================
// 📦 Service Worker Registration
// ===============================
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("js/sw.js")
        .then(() => {
            console.log("Service Worker Registered ✅");
        })
        .catch((error) => {
            console.log("Service Worker Failed ❌", error);
        });
    });
}


// ===============================
// 🔔 Push Notification
// ===============================
const notifyBtn = document.getElementById("notifyBtn");

if (notifyBtn) {
    notifyBtn.addEventListener("click", () => {

        Notification.requestPermission().then(permission => {

            if (permission === "granted") {
                new Notification("Welcome to Smart PWA Store 🎉", {
                    body: "Enjoy offline shopping experience!",
                    icon: "icons/icon-192.png"
                });
            } else {
                alert("Notification permission denied ❌");
            }

        });

    });
}