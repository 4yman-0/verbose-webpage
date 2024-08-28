let [scrW, srcH] = [
	screen.width * screen.pixelDepth,
	screen.height * screen.pixelDepth
];

print("Screen", `${scrW}x${scrH} ${screen.orientation.type}`);

screen.orientation.addEventListener("change", () => {
    print("Screen", screen.orientation.type);
});
