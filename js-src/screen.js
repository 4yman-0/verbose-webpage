const srcW = screen.width * screen.pixelDepth;
const srcH = screen.height * screen.pixelDepth;

print("Screen", `${scrW}x${scrH} ${screen.orientation.type}`);

screen.orientation.addEventListener("change", () => {
    print("Screen", screen.orientation.type);
});
