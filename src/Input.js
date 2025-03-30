export const keys =  {
    a: { pressed: false },
    d: { pressed: false },
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false },
    " ": {pressed: false}
}



export function initInputs() {
    addEventListener("keydown", (event) => { if (keys[event.key]) keys[event.key].pressed = true; });
    addEventListener("keyup", (event) => { if (keys[event.key]) keys[event.key].pressed = false; });
}