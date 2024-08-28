var scrW = screen.width;
var scrH = screen.height;

print("Screen", `${scrW}x${scrH} ${screen.orientation.type}`);

screen.orientation.addEventListener("change", () => {
    print("Screen", screen.orientation.type);
});
