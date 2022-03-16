let pcbImg = document.createElement("img");

pcbImg.style.cssText = `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width:100%;
height: auto;
z-index: 9;
opacity: 0.5;
`;

let zoom = 1;
const ZOOM_SPEED = 0.01;
pcbImg.addEventListener("wheel", (e) => {
	if (e.deltaY > 0) {
		pcbImg.style.transform = `translate(-50%, -50%) scale(${(zoom +=
			ZOOM_SPEED)})`;
	} else {
		pcbImg.style.transform = `translate(-50%, -50%) scale(${(zoom -=
			ZOOM_SPEED)})`;
	}
});

function onDocumentDrag(event) {
	event.preventDefault();
}

function onDocumentDrop(event) {
	event.preventDefault();

	var file = event.dataTransfer.files[0];
	var reader = new FileReader();

	reader.onload = function (event) {
		pcbImg.src = event.target.result;
		document.querySelector("body").appendChild(pcbImg);
	};
	console.log(event.dataTransfer.files[0]);

	reader.readAsDataURL(file);
}

document.addEventListener("drop", onDocumentDrop, false);
document.addEventListener("dragover", onDocumentDrag, false);
document.addEventListener("dragleave", onDocumentDrag, false);
