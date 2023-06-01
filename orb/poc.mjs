const linkElem = document.createElement("link");
linkElem.setAttribute("rel", "stylesheet");
linkElem.setAttribute("href", new URL("poc.css", import.meta.url));

const template = document.createElement("template");
template.innerHTML = `<div class="orbcursor" style="opacity:0;"></div>`;

class CursorOrbElement extends HTMLElement {
  static get observedAttributes() {
    return ["speed"];
  }

  get observedTags() {
    // Tags that will make the orb active
    return ["A"];
  }

  get targetFPS() {
    // Speed of the orb adjusted for higher or lower FPS screens
    return 60;
  }

  constructor() {
    super();

    this._pos = {
      mouseX: 0,
      mouseY: 0,
      cursorX: 0,
      cursorY: 0,
    };

    this._cancelMoveToPointer();
    let ele = this.attachShadow({ mode: "closed" });

    ele.appendChild(linkElem.cloneNode(true));
    ele.appendChild(template.content.cloneNode(true));
    this._cursor = ele.querySelector(".orbcursor");
    this.cursor.style.removeProperty("opacity");

    // Register events
    window.addEventListener("pointermove", (e) => {
      this._onMove(e);
    });
    window.addEventListener("pointerout", (e) => {
      this._onLeave(e);
    });
  }

  set speed(value) {
    this.setAttribute("speed", value);
  }
  get speed() {
    let spd = parseFloat(this.getAttribute("speed")) || 0.2;
    // clamp between 0 and 1
    spd = Math.min(1, spd);
    return Math.max(0, spd);
  }

  get cursor() {
    return this._cursor;
  }

  _cancelMoveToPointer() {
    this._animating = false;
    this._timestamp = -1;
  }

  _moveToPointer(delta = 0) {
    if (this._animating) {
      let distX = this._pos.mouseX - this._pos.cursorX;
      let distY = this._pos.mouseY - this._pos.cursorY;

      let trueSpeed = this.speed;
      // Change speed based on how long it took to get to this frame
      if (delta > 0) {
        let preferredTime = 1000 / this.targetFPS;
        trueSpeed *= delta / preferredTime;
      }

      this._pos.cursorX += distX * trueSpeed;
      this._pos.cursorY += distY * trueSpeed;

      this.cursor.style.left = this._pos.cursorX + "px";
      this.cursor.style.top = this._pos.cursorY + "px";

      // Stop animating when our destination has been reached (or very very close)
      if (
        Math.abs(this._pos.mouseX - this._pos.cursorX) < 0.01 &&
        Math.abs(this._pos.mouseY - this._pos.cursorY) < 0.01
      ) {
        // Done animating
        this._animating = false;
        return;
      }

      // Request next movement frame
      requestAnimationFrame((timestamp) => {
        let deltaTimestamp = 0;
        if (this._timestamp != -1) {
          deltaTimestamp = timestamp - this._timestamp;
        }
        this._timestamp = timestamp;
        this._moveToPointer(deltaTimestamp);
      });
    }
  }

  _onMove(e) {
    if (!this.isConnected) return;

    this._pos.mouseX = e.clientX;
    this._pos.mouseY = e.clientY;

    this.cursor.classList.remove("animoff");

    // Move the orb towards the cursor
    if (!this._animating) {
      this._animating = true;
      this._moveToPointer();
    }

    // Check if orb is hovering over an orbReact attribute element
    let elesAtThisPoint = document.elementsFromPoint(e.clientX, e.clientY);
    let react = false;
    for (let i = 0; i < elesAtThisPoint.length; i++) {
      const ele = elesAtThisPoint[i];
      if (
        this.observedTags.includes(ele.tagName) ||
        ele.hasAttribute("orbReact")
      ) {
        react = ele;
        break;
      }
    }

    if (react) {
      this.cursor.classList.remove("idle", "animactive");
      this.cursor.classList.add("hoveringattr");
    } else {
      this.cursor.classList.add("idle", "animactive");
      this.cursor.classList.remove("hoveringattr");
    }
  }

  _onLeave(e) {
    if (!this.isConnected) return;
    let t = e.relatedTarget || e.toElement;
    if (!t || t.nodeName == "HTML") {
      // Left the screen
      this.cursor.classList.remove("hoveringattr", "idle", "animactive");
      this.cursor.classList.add("animoff");
      //this._cancelMoveToPointer();
    }
  }
}

customElements.define("orb-cursor", CursorOrbElement);
export default CursorOrbElement;
